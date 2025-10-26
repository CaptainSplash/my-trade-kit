// Auto-scrolling gallery using images from /public/Gallery
const images = [
  '/Gallery/1.webp',
  '/Gallery/2.webp',
  '/Gallery/3.webp',
  '/Gallery/4.webp',
  '/Gallery/5.webp',
  '/Gallery/7.webp',
  '/Gallery/8.webp',
  '/Gallery/9.webp',
  '/Gallery/10.webp',
  '/Gallery/11.webp',
  '/Gallery/12.webp',
  '/Gallery/13.webp',
  '/Gallery/14.webp',
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
              loading="lazy"
              draggable={false}
            />
          ))}
          {encoded.map((src, idx) => (
            <img
              key={`g2-${idx}`}
              src={src}
              alt="Gallery item duplicate"
              className="marquee-img rounded-img"
              loading="lazy"
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