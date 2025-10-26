const cardStyle = {
    padding: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)'
};

const imageContainerStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 20px auto',
    boxShadow: '0 8px 32px rgba(0,0,0,0.28)',
    transform: 'rotateY(-8deg) scale(1.04)',
    background: '#111'
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    filter: 'brightness(1.08) contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.18))'
};

const titleStyle = {
    fontFamily: "'Special Gothic Expanded One', sans-serif",
    fontSize: '20px',
    marginBottom: '12px',
    color: '#ffffff'
};

const disclaimerStyle = {
    fontSize: '14px',
    marginBottom: '16px',
    fontStyle: 'italic' as const,
    color: 'rgba(255, 255, 255, 0.7)'
};

const quoteStyle = {
    fontSize: '16px',
    marginBottom: '16px',
    lineHeight: '1.6',
    color: '#ffffff'
};

const authorStyle = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)'
};

const testimonials = [
    {
        image: '/Testimonial images/childcare.jpg',
        alt: 'Childcare business',
        title: 'Saved hours every week on updates',
        disclaimer: 'Example scenario based on the type of results our clients aim for:',
        quote: '"If I didn\'t have a service like My Trade Kit, I\'d still be spending evenings fixing website problems. With them handling updates and reports, I could actually focus on running my business instead of worrying about my site."',
        author: '— Example: Emma, Owner, Little Oak Childcare'
    },
    {
        image: '/Testimonial images/cleaner.jpg',
        alt: 'Cleaning business',
        title: 'Website brought in 3× more enquiries',
        disclaimer: 'Typical outcome we help clients work towards:',
        quote: '"Before getting proper SEO and a site rebuild, my cleaning business barely showed up on Google. With the kind of service My Trade Kit offers, we\'re getting way more enquiries — people are finally finding us online again."',
        author: '— Example: Tom, Owner, Sparkle Clean Ltd'
    },
    {
        image: '/Testimonial images/plumber.jpg',
        alt: 'Plumbing business',
        title: 'Bookings up by 40% in one month',
        disclaimer: 'Illustrative case of how digital care can deliver results:',
        quote: '"When I finally got help running ads and managing my social media, everything changed for my plumbing business. With My Trade Kit handling it all, enquiries became steady and bookings jumped by around 40%. They made the whole process simple."',
        author: '— Example: Jason, Plumber, JP Plum Ltd.'
    }
];

export default function Testimonials() {
    const bgUrl = encodeURI('/Brand gradient.webp');
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
                    {testimonials.map((testimonial, index) => (
                        <div key={index} style={cardStyle}>
                            <div style={imageContainerStyle}>
                                <img src={testimonial.image} alt={testimonial.alt} style={imageStyle} loading="lazy" />
                            </div>
                            <h3 style={titleStyle}>
                                {testimonial.title}
                            </h3>
                            <p style={disclaimerStyle}>
                                {testimonial.disclaimer}
                            </p>
                            <p style={quoteStyle}>
                                {testimonial.quote}
                            </p>
                            <p style={authorStyle}>
                                {testimonial.author}
                            </p>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
}