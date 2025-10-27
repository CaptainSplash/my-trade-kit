const textBoxStyle = {
  minHeight: '100px',
  height: '240px',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 250, 245, 0.6)',
  border: '1px solid rgba(81, 61, 134, 0.08)'
};

const imageBoxStyle = {
  minHeight: '100px',
  height: '240px',
  padding: '16px',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const imageContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '24px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain' as const
};

const titleStyle = {
  fontWeight: 'bold',
  marginBottom: '12px',
  fontFamily: "'Special Gothic Expanded One', sans-serif",
  fontSize: '24px',
  lineHeight: '1.3',
  color: '#513d86'
};

const descStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#333333'
};

export default function HowItWorks() {
  return (
    <div style={{ 
      background: 'linear-gradient(180deg, rgba(255, 250, 245, 0.4) 0%, rgba(255, 250, 245, 0.8) 50%, rgba(255, 250, 245, 0.4) 100%)',
      width: '100%',
      position: 'relative' as const
    }}>
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl px-4" style={{ color: '#000000', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {/* Box 1 */}
          <div style={textBoxStyle}>
            <div style={{ textAlign: 'left' }}>
              <div style={titleStyle}>1. Build a strong foundation</div>
              <div style={descStyle}>→ Custom branding, websites, and SEO that set you up for success.</div>
            </div>
          </div>

          {/* Box 2 */}
          <div style={imageBoxStyle}>
            <div style={imageContainerStyle}>
              <img src="/How it works imagery/Website.webp" alt="Website" style={imageStyle} loading="lazy" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="how-it-works-box-3" style={imageBoxStyle}>
            <div style={imageContainerStyle}>
              <img src="/How it works imagery/Growth.webp" alt="Growth" style={imageStyle} loading="lazy" />
            </div>
          </div>

          {/* Box 4 */}
          <div className="how-it-works-box-4" style={textBoxStyle}>
            <div style={{ textAlign: 'left' }}>
              <div style={titleStyle}>2. Drive consistent growth</div>
              <div style={descStyle}>→ Organic and paid marketing that attracts your ideal clients.</div>
            </div>
          </div>

          {/* Box 5 */}
          <div className="how-it-works-box-5" style={textBoxStyle}>
            <div style={{ textAlign: 'left' }}>
              <div style={titleStyle}>3. Stay supported, always</div>
              <div style={descStyle}>→ Ongoing updates, reports, and account management for peace of mind.</div>
            </div>
          </div>

          {/* Box 6 */}
          <div className="how-it-works-box-6" style={imageBoxStyle}>
            <div style={imageContainerStyle}>
              <img src="/How it works imagery/Care.webp" alt="Care" style={imageStyle} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
