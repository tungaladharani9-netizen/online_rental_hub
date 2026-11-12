import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass" style={{ margin: '2rem 1rem 1rem', padding: '3rem 2rem' }}>
            <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div>
                    <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>RentalHub</h2>
                    <p style={{ color: 'var(--text-muted)' }}>House is the best place in the world. We help you find your perfect home with ease and security.</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <ul style={{ listStyle: 'none', marginTop: '1rem', color: 'var(--text-muted)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Mail size={16} /> info@rentalhub.com</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Phone size={16} /> +1 234 567 890</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> 123 Rental St, City</li>
                    </ul>
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Instagram /></a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Facebook /></a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Twitter /></a>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', color: 'var(--text-muted)' }}>
                &copy; 2026 Online Rental Housing System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
