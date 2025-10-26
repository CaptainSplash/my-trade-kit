const footerStyle = {
    background: '#000',
    color: 'white',
    padding: '64px 0 48px 0',
    width: '100%',
    position: 'relative' as const,
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
};

const socialLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40
};

const iconStyle = {
    width: 28,
    height: 28,
    display: 'block'
};

const smallIconStyle = {
    width: 20,
    height: 20,
    verticalAlign: 'middle'
};

export default function Footer() {
    return (
        <footer id="footer" style={footerStyle}>
            {/* Subtle top accent and fade for smoother transition */}
            <div aria-hidden="true" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--color-purple), var(--color-orange), var(--color-green))',
                opacity: 0.6
            }} />
            <div aria-hidden="true" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '48px',
                background: 'linear-gradient(to bottom, rgba(255,250,245,0.10), rgba(0,0,0,0))',
                pointerEvents: 'none'
            }} />
            <div className="container" style={containerStyle}>
                {/* Logo */}
                <div style={{ marginBottom: '8px' }}>
                    <img
                        src="/White Design 2, 10 corners.png"
                        alt="My Trade Kit Logo"
                        width={40}
                        height={40}
                        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.12)', display: 'block' }}
                        loading="lazy"
                    />
                </div>

                {/* Social icons */}
                <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                    <a 
                        href="https://www.instagram.com/mytradekithq/?hl=en" 
                        target="_blank" 
                        rel="noopener" 
                        aria-label="Instagram" 
                        style={socialLinkStyle}
                    >
                        <img src="/Social media icons/instagram-svgrepo-com.svg" alt="Instagram" style={iconStyle} />
                    </a>
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener" 
                        aria-label="LinkedIn" 
                        style={socialLinkStyle}
                    >
                        <img src="/Social media icons/linkedin-svgrepo-com.svg" alt="LinkedIn" style={iconStyle} />
                    </a>
                </div>

                {/* Contact info */}
                <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '18px', color: 'rgba(255,255,255,0.92)' }}>
                    <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src="/Social media icons/phone-svgrepo-com.svg" alt="Phone" style={smallIconStyle} />
                            07344144672
                        </span>
                        <span style={{ marginLeft: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src="/Social media icons/envelope-svgrepo-com.svg" alt="Email" style={smallIconStyle} />
                            <a href="mailto:mytradekit@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>mytradekit@gmail.com</a>
                        </span>
                    </div>
                </div>

                {/* Legal and tagline */}
                <div style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.72)' }}>
                    <p style={{ margin: 0 }}>© 2025 My Trade Kit – Digital care for busy businesses.</p>
                    <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', marginLeft: '12px', textDecoration: 'underline' }}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}