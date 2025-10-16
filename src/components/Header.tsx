import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header style={{ 
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      background: 'transparent',
      zIndex: 99999,
      margin: '0',
      padding: '5px 20px',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: '8px',
          paddingBottom: '8px'
        }}>
          <div className="logo flex items-center">
            <Image 
              src="/Logo white.png" 
              alt="My Trade Kit Logo" 
              width={180} 
              height={60}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              📞 07344144672
            </div>
            <a href="#contact" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;