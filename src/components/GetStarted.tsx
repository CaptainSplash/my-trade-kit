const GetStarted = () => {
  return (
    <section id="get-started" className="section-spacing" style={{ backgroundColor: 'rgba(23, 112, 77, 0.05)' }}>
      <div className="container">
        <h2 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '32px', color: '#17704d', textAlign: 'left', marginBottom: '32px', marginLeft: 0 }}>
          We Make It Easy to Get Started
        </h2>
        <div className="get-started-pairs">
          {/* Pair 1 */}
          <div className="get-started-pair">
            <div className="step-icon-wrapper">
              <img src="/Get started imagery/Speech.webp" alt="Speech bubble" className="get-started-img" loading="lazy" />
            </div>
            <div className="get-started-box">
              <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '10px', color: '#17704d', lineHeight: '1.3' }}>1. Start with a quick chat</h3>
              <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.5', margin: 0 }}>
                Tell us what you need help with — websites, socials, ads, SEO, or the full package. We'll help you choose what fits.
              </p>
            </div>
          </div>
          {/* Pair 2 */}
          <div className="get-started-pair">
            <div className="step-icon-wrapper">
              <img src="/Get started imagery/Clipboard.webp" alt="Clipboard" className="get-started-img" loading="lazy" />
            </div>
            <div className="get-started-box">
              <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '10px', color: '#17704d', lineHeight: '1.3' }}>2. Get your custom plan</h3>
              <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.5', margin: 0 }}>
                We'll build a clear, simple plan based on your goals and budget — no jargon, no confusion. You'll always know what's being done and why.
              </p>
            </div>
          </div>
          {/* Pair 3 */}
          <div className="get-started-pair">
            <div className="step-icon-wrapper">
              <img src="/Get started imagery/Cog.webp" alt="Cog" className="get-started-img" loading="lazy" />
            </div>
            <div className="get-started-box">
              <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '10px', color: '#17704d', lineHeight: '1.3' }}>3. We handle the rest</h3>
              <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.5', margin: 0 }}>
                We'll set it up, run it, and keep it updated — whether it's your site, socials, or search results. You get results without the stress.
              </p>
            </div>
          </div>
          {/* Pair 4 */}
          <div className="get-started-pair">
            <div className="step-icon-wrapper">
              <img src="/Get started imagery/Graph.webp" alt="Graph" className="get-started-img" loading="lazy" />
            </div>
            <div className="get-started-box">
              <h3 style={{ fontFamily: "'Special Gothic Expanded One', sans-serif", fontSize: '20px', marginBottom: '10px', color: '#17704d', lineHeight: '1.3' }}>4. Review & grow</h3>
              <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.5', margin: 0 }}>
                We check in regularly, share reports, and fine-tune what's working so your digital side keeps improving while you focus on your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
