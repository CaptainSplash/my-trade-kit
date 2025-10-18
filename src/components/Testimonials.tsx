import React from 'react';

const Testimonials: React.FC = () => {
    const bgUrl = encodeURI('/Brand gradients.png');
    return (
        <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* Full-bleed flipped gradient background */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${bgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top left',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scaleY(-1)',
                    transformOrigin: 'center',
                    zIndex: 0,
                }}
            />
            <section id="testimonials" className="section-spacing" style={{ position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <p style={{ fontSize: '14px', color: '#ffffff' }}>Trusted by small businesses across the UK</p>
                    </div>
                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                    {/* Testimonial 1 */}
                    <div style={{ padding: '24px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px auto', boxShadow: '0 8px 32px rgba(0,0,0,0.28)', transform: 'rotateY(-8deg) scale(1.04)', transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)', background: '#111' }}>
                            <img src="/Testimonial images/childcare.jpg" alt="Childcare business" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.08) contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.18))' }} />
                        </div>
                        <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#ffffff' }}>
                            Saved hours every week on updates
                        </h3>
                        <p style={{ fontSize: '14px', marginBottom: '16px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
                            Example scenario based on the type of results our clients aim for:
                        </p>
                        <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6', color: '#ffffff' }}>
                            "If I didn't have a service like My Trade Kit, I'd still be spending evenings fixing website problems. With them handling updates and reports, I could actually focus on running my business instead of worrying about my site."
                        </p>
                        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                            — Example: Emma, Owner, Little Oak Childcare
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div style={{ padding: '24px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px auto', boxShadow: '0 8px 32px rgba(0,0,0,0.28)', transform: 'rotateY(-8deg) scale(1.04)', transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)', background: '#111' }}>
                            <img src="/Testimonial images/cleaner.jpg" alt="Cleaning business" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.08) contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.18))' }} />
                        </div>
                        <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#ffffff' }}>
                            Website brought in 3× more enquiries
                        </h3>
                        <p style={{ fontSize: '14px', marginBottom: '16px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
                            Typical outcome we help clients work towards:
                        </p>
                        <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6', color: '#ffffff' }}>
                            "Before getting proper SEO and a site rebuild, my cleaning business barely showed up on Google. With the kind of service My Trade Kit offers, we're getting way more enquiries — people are finally finding us online again."
                        </p>
                        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                            — Example: Tom, Owner, Sparkle Clean Ltd
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div style={{ padding: '24px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px auto', boxShadow: '0 8px 32px rgba(0,0,0,0.28)', transform: 'rotateY(-8deg) scale(1.04)', transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)', background: '#111' }}>
                            <img src="/Testimonial images/plumber.jpg" alt="Plumbing business" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.08) contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.18))' }} />
                        </div>
                        <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px', color: '#ffffff' }}>
                            Bookings up by 40% in one month
                        </h3>
                        <p style={{ fontSize: '14px', marginBottom: '16px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
                            Illustrative case of how digital care can deliver results:
                        </p>
                        <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6', color: '#ffffff' }}>
                            "When I finally got help running ads and managing my social media, everything changed for my plumbing business. With My Trade Kit handling it all, enquiries became steady and bookings jumped by around 40%. They made the whole process simple."
                        </p>
                        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                            — Example: Jason, Plumber, JP Plum Ltd.
                        </p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;