<?php
require_once 'config.php';

$location = isset($_GET['location']) ? $_GET['location'] : '';
$flat_type = isset($_GET['flat_type']) ? $_GET['flat_type'] : '';

if (!empty($location) && !empty($flat_type)) {
    $query = "SELECT * FROM owners WHERE location LIKE :location AND flat_type = :flat_type";
    $stmt = $conn->prepare($query);
    
    $location_param = "%$location%";
    $stmt->bindParam(":location", $location_param);
    $stmt->bindParam(":flat_type", $flat_type);
    
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $listings = $stmt->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($listings);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Sorry, such type of flats are not available for specified location."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Please provide location and flat type."));
}
?>
