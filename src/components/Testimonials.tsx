import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="section-spacing" style={{ backgroundColor: '#e0f7fa' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <p style={{ fontSize: '14px', color: '#666' }}>Trusted by small businesses across the UK</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                    {/* Testimonial 1 */}
                    <div style={{ border: '2px solid black', padding: '20px', backgroundColor: 'white' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', margin: '0 auto 20px auto' }}></div>
                        <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px' }}>
                            Saved hours every week on updates
                        </h3>
                        <p style={{ fontSize: '14px', marginBottom: '16px', fontStyle: 'italic', color: '#666' }}>
                            Example scenario based on the type of results our clients aim for:
                        </p>
                        <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6' }}>
                            "Many small business owners waste evenings fixing website issues. Our service takes care of updates, reports, and maintenance — giving that time back and reducing downtime worries."
                        </p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                            – Example: Childcare business owner
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div style={{ border: '2px solid black', padding: '20px', backgroundColor: 'white' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', margin: '0 auto 20px auto' }}></div>
                        <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px' }}>
                            Website brought in 3× more enquiries
                        </h3>
                        <p style={{ fontSize: '14px', marginBottom: '16px', fontStyle: 'italic', color: '#666' }}>
                            Typical outcome we help clients work towards:
                        </p>
                        <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6' }}>
                            "A refreshed, SEO-friendly website can make a huge difference. Clients in similar industries have reported more visibility and up to 3× more enquiries after improvements like these."
                        </p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                            – Example: Cleaning company owner
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div style={{ border: '2px solid black', padding: '20px', backgroundColor: 'white' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', margin: '0 auto 20px auto' }}></div>
                        <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '12px' }}>
                            Bookings up by 40% in one month
                        </h3>
                        <p style={{ fontSize: '14px', marginBottom: '16px', fontStyle: 'italic', color: '#666' }}>
                            Illustrative case of how digital care can deliver results:
                        </p>
                        <p style={{ fontSize: '16px', marginBottom: '16px', lineHeight: '1.6' }}>
                            "When social media and ads work together, enquiries can rise quickly. We've seen examples of small service businesses grow bookings by around 40% after streamlined campaigns."
                        </p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                            – Example: Local trades business
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;