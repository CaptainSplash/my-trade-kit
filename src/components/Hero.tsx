const heroStyle = {
    paddingTop: '320px',
    paddingBottom: '200px',
    backgroundImage: 'url("/Brand gradient.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    minHeight: '700px',
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
    fontSize: '68px',
    lineHeight: '1.15',
    marginBottom: '32px',
    letterSpacing: '-0.02em',
    fontWeight: '400'
};

const subtextStyle = {
    fontSize: '22px',
    marginBottom: '48px',
    maxWidth: '640px',
    margin: '0 auto 48px auto',
    opacity: '0.95',
    lineHeight: '1.5'
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
                <a href="#contact" className="btn-primary" style={{ fontSize: '19px', padding: '22px 44px' }}>
                    Get Started
                </a>
            </div>
        </section>
    );
}