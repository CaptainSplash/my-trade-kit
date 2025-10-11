import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="section-spacing">
            <div className="container text-center">
                <h2 style={{ 
                    fontFamily: 'var(--font-special-gothic)', 
                    fontSize: '40px', 
                    letterSpacing: '-0.02em',
                    marginBottom: '60px',
                    color: 'var(--color-purple)'
                }}>
                    What Our Clients Say
                </h2>
                <blockquote style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    fontSize: '20px',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    color: '#555',
                    borderLeft: '4px solid var(--color-purple)',
                    paddingLeft: '32px',
                    background: 'rgba(81, 61, 134, 0.05)',
                    padding: '40px 32px',
                    borderRadius: '16px'
                }}>
                    <p style={{ margin: 0 }}>
                        "Working with Digital Care transformed our online presence completely. They took the stress out of everything and delivered exactly what we needed to grow our business."
                    </p>
                    <footer style={{ 
                        marginTop: '20px', 
                        fontSize: '16px', 
                        fontStyle: 'normal',
                        color: 'var(--color-purple)',
                        fontFamily: 'var(--font-liter-medium)'
                    }}>
                        — Sarah Johnson, Local Business Owner
                    </footer>
                </blockquote>
            </div>
        </section>
    );
};

export default Testimonials;