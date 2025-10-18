"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const logoSrc = isSticky ? '/Logo black.png' : '/Logo white.png';

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent layout jump when header becomes fixed by adding top padding to body
  useEffect(() => {
    const h = headerRef.current?.offsetHeight || 0;
    if (isSticky) {
      document.body.style.paddingTop = `${h}px`;
    } else {
      document.body.style.paddingTop = '0px';
    }
    return () => {
      document.body.style.paddingTop = '0px';
    };
  }, [isSticky]);
  return (
    <header ref={headerRef} className={`site-header${isSticky ? ' is-sticky' : ''}`} style={{ 
      position: isSticky ? 'fixed' : 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      margin: '0',
      padding: '5px 20px',
      width: '100%'
    }}>
      <div className="site-header-wrap" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        padding: '0 20px',
        position: 'relative'
      }}>
        <div className="header-row" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <div className="logo site-logo flex items-center">
            <Image 
              src={logoSrc} 
              alt="My Trade Kit Logo" 
              width={180} 
              height={60}
              priority
              className="site-logo-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="header-buttons hidden md:flex">
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
          {/* Mobile hamburger button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            className="mobile-menu-button hamburger-btn flex md:hidden"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="md:hidden" style={{
            position: 'absolute',
            top: '64px',
            right: '20px',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            padding: '12px',
            color: 'white',
            minWidth: '200px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
          }}>
            <a
              href="tel:07344144672"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '8px',
                color: 'white',
                textDecoration: 'none'
              }}
            >
              📞 07344144672
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '8px',
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;