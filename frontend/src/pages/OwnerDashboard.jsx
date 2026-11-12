import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const OwnerDashboard = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        flat_type: '1BHK',
        rent: '',
        facilities: [],
        rules: '',
        contact_number: '',
        address: '',
        location: '',
        image_path: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80' // Placeholder
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const updatedFacilities = checked
                ? [...formData.facilities, value]
                : formData.facilities.filter(f => f !== value);
            setFormData({ ...formData, facilities: updatedFacilities });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const submissionData = {
                ...formData,
                owner_id: user.user_id,
                facilities: formData.facilities.join(', ')
            };
            await axios.post('http://localhost/rentalhub/backend/add_listing.php', submissionData);
            alert('Listing added successfully!');
        } catch (error) {
            alert('Failed to add listing');
        }
    };

    return (
        <div className="page-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
            <div className="container section">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-card"
                >
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '3rem' }}>Add Your Flat Listing</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div>
                            <label>Flat Type</label>
                            <select name="flat_type" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white' }} onChange={handleChange}>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                                <option value="Villa">Villa</option>
                            </select>
                        </div>

                        <div>
                            <label>Expected Rent ($)</label>
                            <input type="number" name="rent" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white' }} onChange={handleChange} required />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Facilities</label>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                                {['WiFi', 'Parking', 'Gym', 'Swimming Pool', 'Security'].map(f => (
                                    <label key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <input type="checkbox" value={f} onChange={handleChange} /> {f}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Rules or Restrictions</label>
                            <textarea name="rules" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white', height: '100px' }} onChange={handleChange}></textarea>
                        </div>

                        <div>
                            <label>Contact Number</label>
                            <input type="text" name="contact_number" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white' }} onChange={handleChange} required />
                        </div>

                        <div>
                            <label>Location (City/Area)</label>
                            <input type="text" name="location" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white' }} onChange={handleChange} required />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Detailed Address</label>
                            <textarea name="address" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white', height: '100px' }} onChange={handleChange} required></textarea>
                        </div>

                        <div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
                            <button type="submit" className="btn btn-primary" style={{ padding: '1rem 4rem' }}>Submit Listing</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
