import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Star, Instagram, Facebook, Twitter } from 'lucide-react';

const stats = [
    { icon: <Users size={40} />, label: "Happy Customers", value: "10,000+" },
    { icon: <Home size={40} />, label: "Available Houses", value: "2,500+" },
    { icon: <Star size={40} />, label: "Average Rating", value: "4.9/5" }
];

const customers = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
];

const Highlights = () => {
    return (
        <div className="page-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
            <div className="container section">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    className="text-gradient"
                >
                    Why Choose RentalHub?
                </motion.h1>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '6rem' }}>
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="glass-card"
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                            <h2 style={{ fontSize: '2.5rem' }}>{s.value}</h2>
                            <p style={{ color: 'var(--text-muted)' }}>{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="glass" style={{ padding: '4rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '3rem' }}>Our Happy Customers</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {customers.map((c, i) => (
                            <motion.img
                                key={i}
                                whileHover={{ y: -10 }}
                                src={c}
                                style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--primary)' }}
                            />
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <h3>Connect With Us</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem' }}>
                            <motion.a whileHover={{ scale: 1.2 }} href="#" style={{ color: 'var(--text)' }}><Instagram size={32} /></motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#" style={{ color: 'var(--text)' }}><Facebook size={32} /></motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#" style={{ color: 'var(--text)' }}><Twitter size={32} /></motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
