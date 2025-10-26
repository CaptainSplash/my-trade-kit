"use client";

import { useState, FormEvent } from 'react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgwnpry";

const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '500',
    color: 'var(--color-purple)',
    fontSize: '14px',
    fontFamily: 'Special Gothic Expanded One, sans-serif'
} as const;

const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '2px solid #cccccc',
    borderRadius: '10px',
    fontSize: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'Liter, Arial, sans-serif',
    outline: 'none'
} as const;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (!res.ok) throw new Error('Failed to send message');
            
            setFormData({ name: '', email: '', phone: '', message: '' });
            alert('Thank you for your message! We\'ll get back to you soon.');
        } catch (err) {
            alert((err as Error).message || 'Sorry, something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section
            id="contact"
            className="section-spacing"
            style={{
                position: 'relative',
                minHeight: '600px',
                width: '100vw',
                maxWidth: '100vw',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                marginTop: '0',
                zIndex: 1,
                overflow: 'hidden',
                background: 'none',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/Brand gradient.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="contact-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '40px',
                        letterSpacing: '-0.02em',
                        marginBottom: '16px',
                        color: 'white',
                    }}>
                        Let's make your digital presence effortless.
                    </h2>
                    <p style={{
                        fontSize: '17px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '560px',
                        margin: '0 auto',
                        lineHeight: '1.5'
                    }}>
                        Ready to take the stress out of your online presence? Let's chat about how we can help.
                    </p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form" style={{ 
                    maxWidth: '540px', 
                    margin: '0 auto',
                    background: 'white',
                    padding: '32px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                        <div>
                            <label style={labelStyle}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#cccccc'}
                                required
                            />
                        </div>
                        
                        <div>
                            <label style={labelStyle}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#cccccc'}
                                required
                            />
                        </div>
                    </div>
                    
                    <div style={{ marginBottom: '18px' }}>
                        <label style={labelStyle}>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={inputStyle}
                            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#cccccc'}
                            placeholder="Optional"
                        />
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{
                                ...inputStyle,
                                resize: 'vertical',
                                minHeight: '100px'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#cccccc'}
                            placeholder="Tell us how we can help..."
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary" 
                        style={{ 
                            width: '100%',
                            fontSize: '17px',
                            padding: '15px 28px',
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
}