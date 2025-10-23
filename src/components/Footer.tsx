import Image from 'next/image';

const footerStyle = {
    background: 'black',
    color: 'white',
    padding: '48px 0 32px 0',
    width: '100%'
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '32px',
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
        <footer style={footerStyle}>
            <div className="container" style={containerStyle}>
                {/* Logo */}
                <div style={{ marginBottom: '8px' }}>
                    <Image
                        src="/White Design 2, 10 corners.png"
                        alt="My Trade Kit Logo"
                        width={40}
                        height={40}
                        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.12)', display: 'block' }}
                        priority
                    />
                </div>

                {/* Social icons */}
                <div style={{ display: 'flex', gap: '24px', marginBottom: '8px' }}>
                    <a href="https://www.instagram.com/mytradekithq/?hl=en" target="_blank" rel="noopener" aria-label="Instagram" style={socialLinkStyle}>
                        <img src="/Social media icons/instagram-svgrepo-com.svg" alt="Instagram" style={iconStyle} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" style={socialLinkStyle}>
                        <img src="/Social media icons/linkedin-svgrepo-com.svg" alt="LinkedIn" style={iconStyle} />
                    </a>
                </div>

                {/* Contact info */}
                <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '16px', color: 'rgba(255,255,255,0.92)' }}>
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
                <div style={{ textAlign: 'center', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                    <p style={{ margin: 0 }}>© 2025 My Trade Kit – Digital care for busy businesses.</p>
                    <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', marginLeft: '12px', textDecoration: 'underline' }}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}