import React from 'react';

const servicesData = [
  {
    title: 'Web Design',
    description: 'Beautiful, responsive websites that convert visitors into customers and reflect your brand perfectly.',
  },
  {
    title: 'Branding',
    description: 'Cohesive brand identity that tells your story and connects with your ideal customers.',
  },
  {
    title: 'Website Care',
    description: 'Ongoing support and maintenance so your digital presence stays fresh, secure, and effective.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: 'rgba(23, 112, 77, 0.05)' }}>
      <div className="container">
        <h2 style={{ 
          fontFamily: 'var(--font-special-gothic)', 
          fontSize: '40px', 
          letterSpacing: '-0.02em',
          marginBottom: '60px',
          textAlign: 'center',
          color: 'var(--color-purple)'
        }}>
          Our Services at My Trade Kit
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {servicesData.map((service, index) => (
            <div key={index} className="card">
              <h3 style={{ 
                fontFamily: 'var(--font-special-gothic)', 
                fontSize: '24px',
                marginBottom: '16px',
                color: 'var(--color-purple)'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: '#666'
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;