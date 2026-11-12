import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/rentalhub/backend/login.php', credentials);
            if (response.data.user_id) {
                login(response.data);
                navigate('/home');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="page-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card"
                    style={{ width: '100%', maxWidth: '400px' }}
                >
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                className="glass"
                                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white', border: '1px solid var(--glass-border)', outline: 'none' }}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="glass"
                                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', color: 'white', border: '1px solid var(--glass-border)', outline: 'none' }}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)' }}>
                        Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Register</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
