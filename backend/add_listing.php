<?php
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->owner_id) && !empty($data->flat_type) && !empty($data->rent) && !empty($data->location)) {
    $query = "INSERT INTO owners (owner_id, flat_type, rent, facilities, rules, contact_number, address, location, image_path) 
              VALUES (:owner_id, :flat_type, :rent, :facilities, :rules, :contact_number, :address, :location, :image_path)";
    
    $stmt = $conn->prepare($query);

    $stmt->bindParam(":owner_id", $data->owner_id);
    $stmt->bindParam(":flat_type", $data->flat_type);
    $stmt->bindParam(":rent", $data->rent);
    $stmt->bindParam(":facilities", $data->facilities);
    $stmt->bindParam(":rules", $data->rules);
    $stmt->bindParam(":contact_number", $data->contact_number);
    $stmt->bindParam(":address", $data->address);
    $stmt->bindParam(":location", $data->location);
    $stmt->bindParam(":image_path", $data->image_path);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("message" => "Listing added successfully."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to add listing."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
?>
