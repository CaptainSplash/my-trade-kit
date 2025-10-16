import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="section-spacing">
            <div className="container text-center">
                <h2 style={{ 
                    fontSize: '40px', 
                    letterSpacing: '-0.02em',
                    marginBottom: '32px',
                    color: 'var(--color-purple)'
                }}>
                    Care Through Clarity
                </h2>
                <p style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.7',
                    maxWidth: '800px',
                    margin: '0 auto',
                    color: '#555'
                }}>
                    We believe small businesses deserve websites and branding that reflect their unique identity and values. Our mission is to provide digital care that simplifies the online experience, allowing you to focus on what you do best – growing your business with confidence.
                </p>
            </div>
        </section>
    );
};

export default About;