import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ 
            background: 'black',
            color: 'white',
            textAlign: 'center',
            padding: '60px 20px 40px 20px'
        }}>
            <div className="container">
                <p>© 2025 Digital Care – "Digital care for busy businesses."</p>
                <div style={{ marginTop: '20px' }}>
                    <a href="/privacy-policy" style={{ color: 'white', margin: '0 15px' }}>Privacy Policy</a>
                    <a href="https://instagram.com" style={{ color: 'white', margin: '0 15px' }}>Instagram</a>
                    <a href="https://linkedin.com" style={{ color: 'white', margin: '0 15px' }}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;