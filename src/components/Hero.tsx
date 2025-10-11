import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="gradient-bg" style={{ marginTop: '-80px', paddingTop: '120px' }}>
            <div className="container text-center">
                <h1 style={{ 
                    fontFamily: 'var(--font-special-gothic)', 
                    fontSize: '64px',
                    lineHeight: '1.1',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em'
                }}>
                    Digital care for busy businesses.
                </h1>
                <p style={{ 
                    fontSize: '20px', 
                    marginBottom: '40px',
                    maxWidth: '600px',
                    margin: '0 auto 40px auto',
                    opacity: '0.95'
                }}>
                    We take the stress out of websites, branding, and online presence so you can focus on what you do best – running your business.
                </p>
                <a href="#contact" className="btn-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
                    Book a Call
                </a>
            </div>
        </section>
    );
};

export default Hero;