const heroStyle = {
    paddingTop: '280px',
    paddingBottom: '160px',
    backgroundImage: 'url("/Brand gradient.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    minHeight: '600px',
    width: '100vw',
    maxWidth: '100vw',
    position: 'relative' as const,
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    marginTop: '0',
    zIndex: 1,
    willChange: 'transform'
};

const titleStyle = {
    fontSize: '64px',
    lineHeight: '1.1',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
    fontWeight: '400'
};

const subtextStyle = {
    fontSize: '20px',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
    opacity: '0.95'
};

export default function Hero() {
    return (
        <section id="hero" style={heroStyle}>
            <div className="container text-center">
                <h1 className="hero-title" style={titleStyle}>
                    Focus on your business — while we handle your digital care
                </h1>
                <p className="hero-subtext" style={subtextStyle}>
                    Your all-in-one digital partner for websites, marketing, and social — helping your business show up, stand out, and succeed online.
                </p>
                <a href="#contact" className="btn-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
                    Get Started
                </a>
            </div>
        </section>
    );
}