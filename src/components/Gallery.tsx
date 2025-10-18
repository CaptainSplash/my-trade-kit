import React from 'react';

// Auto-scrolling gallery using images from /public/Gallery
const images = [
  '/Gallery/11_envelope and app.webp',
  '/Gallery/13_lanyard and paper.webp',
  '/Gallery/14-14.webp',
  '/Gallery/1_1st.webp',
  '/Gallery/3-03.webp',
  '/Gallery/4_mockup real_mockup real.webp',
  '/Gallery/5-05.webp',
  '/Gallery/5_grid systm.webp',
  '/Gallery/7-07.webp',
  '/Gallery/devices_devices.webp',
  '/Gallery/heronowording_Hero.webp',
];

export default function Gallery() {
  const encoded = images.map((src) => encodeURI(src));
  return (
    <section id="gallery" className="section-spacing">
      <div className="gallery-marquee">
        <div className="marquee-track">
          {encoded.map((src, idx) => (
            <img
              key={`g1-${idx}`}
              src={src}
              alt="Gallery item"
              className="marquee-img rounded-img"
              loading="eager"
              draggable={false}
            />
          ))}
          {encoded.map((src, idx) => (
            <img
              key={`g2-${idx}`}
              src={src}
              alt="Gallery item duplicate"
              className="marquee-img rounded-img"
              loading="eager"
              draggable={false}
            />
          ))}
        </div>
        <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
        <div className="marquee-fade marquee-fade--right" aria-hidden="true" />
      </div>
    </section>
  );
}
