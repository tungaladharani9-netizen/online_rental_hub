import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Search, Star } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="page-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
            <div className="container section">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Welcome back to <span className="text-gradient">RentalHub</span>
                </motion.h1>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate('/owner')}
                        className="glass-card"
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                        <User size={64} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
                        <h2>Owner Dashboard</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>List your flats, manage details, and connect with potential tenants.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate('/customer')}
                        className="glass-card"
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                        <Search size={64} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                        <h2>Customer Search</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Search for your dream home by location and flat type.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate('/highlights')}
                        className="glass-card"
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                        <Star size={64} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
                        <h2>Highlights</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>See our success stories, ratings, and popular locations.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
