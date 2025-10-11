import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="logo">
            <h1 style={{ 
              fontFamily: 'var(--font-special-gothic)', 
              fontSize: '24px', 
              color: 'var(--color-purple)',
              margin: 0
            }}>
              My Trade Kit
            </h1>
          </div>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;