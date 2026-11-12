import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, DollarSign, List } from 'lucide-react';

const SearchResults = () => {
    const [searchParams, setSearchParams] = useState({ location: '', flat_type: '1BHK' });
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearching(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost/rentalhub/backend/search_listings.php?location=${searchParams.location}&flat_type=${searchParams.flat_type}`);
            setResults(response.data);
        } catch (err) {
            setResults([]);
            setError(err.response?.data?.message || 'Sorry, such type of flats are not available for specified location.');
        }
        setSearching(false);
    };

    return (
        <div className="page-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
            <div className="container section">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass"
                    style={{ padding: '2rem', marginBottom: '4rem' }}
                >
                    <form onSubmit={handleSearch} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                            <label>Location</label>
                            <input
                                type="text"
                                className="glass"
                                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white' }}
                                placeholder="Enter city or area..."
                                onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                                required
                            />
                        </div>
                        <div style={{ width: '200px' }}>
                            <label>Flat Type</label>
                            <select
                                className="glass"
                                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white' }}
                                onChange={(e) => setSearchParams({ ...searchParams, flat_type: e.target.value })}
                            >
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                                <option value="Villa">Villa</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ height: '58px', padding: '0 2rem' }}>
                            <Search /> Search
                        </button>
                    </form>
                </motion.div>

                {error && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                    <h2>{error}</h2>
                </motion.div>}

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    <AnimatePresence>
                        {results.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: 0, overflow: 'hidden' }}
                            >
                                <img src={item.image_path} alt="Flat" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 className="text-gradient">{item.flat_type}</h3>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}><MapPin size={16} /> {item.location}</p>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontWeight: 700, fontSize: '1.2rem', color: 'var(--secondary)' }}><DollarSign size={20} /> {item.rent} / month</p>
                                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <p><strong>Facilities:</strong> {item.facilities}</p>
                                        <p><strong>Contact:</strong> {item.contact_number}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
