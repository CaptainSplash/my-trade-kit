import React from 'react';

const Hero: React.FC = () => {
    return (
        <section 
            id="hero" 
            style={{ 
                paddingTop: '280px',
                paddingBottom: '160px',
                backgroundImage: 'url("/Brand gradients.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                minHeight: '600px',
                width: '100vw',
                maxWidth: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                marginTop: '-100px',
                zIndex: 1
            }}
        >
            <div className="container text-center">
                <h1 style={{ 
                    fontSize: '64px',
                    lineHeight: '1.1',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                    fontWeight: '400'
                }}>
                    Focus on your business — while we handle your digital care
                </h1>
                <p style={{ 
                    fontSize: '20px', 
                    marginBottom: '40px',
                    maxWidth: '600px',
                    margin: '0 auto 40px auto',
                    opacity: '0.95'
                }}>
                    Your all-in-one digital partner for websites, marketing, and social — helping your business show up, stand out, and succeed online.
                </p>
                <a href="#contact" className="btn-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Hero;