const textBoxStyle = {
  minHeight: '160px',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  borderRadius: '8px'
};

const imageBoxStyle = {
  minHeight: '160px',
  padding: '12px',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const imageContainerStyle = {
  width: '90%',
  height: '90%',
  borderRadius: '24px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const
};

const titleStyle = {
  fontWeight: 'bold',
  marginBottom: '8px',
  fontFamily: "'Special Gothic Expanded One', sans-serif",
  fontSize: '22px'
};

const descStyle = {
  fontSize: '16px'
};

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl py-8 px-4" style={{ color: '#000000' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
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
