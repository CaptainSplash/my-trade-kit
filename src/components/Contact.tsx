"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
        
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitting(false);
        
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    return (
        <section id="contact" className="section-spacing gradient-bg">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ 
                        fontFamily: 'var(--font-special-gothic)', 
                        fontSize: '40px', 
                        letterSpacing: '-0.02em',
                        marginBottom: '20px',
                        color: 'white'
                    }}>
                        Let's make your digital presence effortless.
                    </h2>
                    <p style={{ 
                        fontSize: '18px', 
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Ready to take the stress out of your online presence? Let's chat about how we can help your business thrive.
                    </p>
                </div>
                
                <form onSubmit={handleSubmit} style={{ 
                    maxWidth: '500px', 
                    margin: '0 auto',
                    background: 'white',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '8px',
                            fontFamily: 'var(--font-liter-medium)',
                            color: 'var(--color-purple)',
                            fontSize: '16px'
                        }}>
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px',
                                border: '2px solid #e5e5e5',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontFamily: 'var(--font-liter-regular)',
                                transition: 'border-color 0.3s ease'
                            }}
                            required
                        />
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '8px',
                            fontFamily: 'var(--font-liter-medium)',
                            color: 'var(--color-purple)',
                            fontSize: '16px'
                        }}>
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px',
                                border: '2px solid #e5e5e5',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontFamily: 'var(--font-liter-regular)',
                                transition: 'border-color 0.3s ease'
                            }}
                            required
                        />
                    </div>
                    
                    <div style={{ marginBottom: '32px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '8px',
                            fontFamily: 'var(--font-liter-medium)',
                            color: 'var(--color-purple)',
                            fontSize: '16px'
                        }}>
                            Message
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            style={{
                                width: '100%',
                                padding: '16px',
                                border: '2px solid #e5e5e5',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontFamily: 'var(--font-liter-regular)',
                                resize: 'vertical',
                                minHeight: '120px',
                                transition: 'border-color 0.3s ease'
                            }}
                            placeholder="Tell us about your project and how we can help..."
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary" 
                        style={{ 
                            width: '100%',
                            fontSize: '18px',
                            padding: '18px 32px',
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;