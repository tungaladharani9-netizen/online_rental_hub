import React from 'react';
import { motion } from 'framer-motion';
import { Home, Shield, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
    { icon: <Search />, title: "Smart Search", desc: "Find the best flats in your preferred location instantly." },
    { icon: <Shield />, title: "Verified Listings", desc: "Every house listing is manually verified for your safety." },
    { icon: <Zap />, title: "Quick Response", desc: "Connect with owners directly without any middlemen." },
    { icon: <Home />, title: "Wide Variety", desc: "From BHKs to luxury penthouses, we have it all." }
];

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section style={{
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '0 0 50px 50px'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }}
                >
                    Online Rental <span className="text-gradient">Housing System</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ fontSize: '1.5rem', marginBottom: '2rem', fontStyle: 'italic' }}
                >
                    House is the best place in the world
                </motion.p>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Get Started</Link>
                </motion.div>
            </section>

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Core Features</h2>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card"
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {React.cloneElement(f.icon, { size: 48 })}
                            </div>
                            <h3>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
