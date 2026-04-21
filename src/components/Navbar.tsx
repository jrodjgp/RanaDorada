import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}

const navLinks = [
  { label: 'Cervezas', href: '/cervezas' },
  { label: 'Cervecería', href: '/cerveceria' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Locales', href: '/locales' },
];

export default function Navbar({ cartCount, badgeRef }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.3s ease',
          backgroundColor: scrolled ? '#1C1A17' : 'transparent',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 5%',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '22px',
              color: '#E8A200',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            La Rana Dorada
          </Link>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F5EDD6',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E8A200')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#F5EDD6')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              style={{
                position: 'relative',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#F5EDD6',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Ver carrito"
            >
              <ShoppingCart size={22} />
              <span
                ref={badgeRef}
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  background: '#E8A200',
                  color: '#1C1A17',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: cartCount > 0 ? 'flex' : 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}
              >
                {cartCount}
              </span>
            </button>

            <button
              className="md:hidden"
              onClick={() => setDrawerOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#F5EDD6',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {drawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: '#1C1A17',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 5%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '22px',
                color: '#E8A200',
              }}
            >
              La Rana Dorada
            </span>
            <button
              onClick={() => setDrawerOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#F5EDD6',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontFamily: 'Newsreader, serif',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: '36px',
                  color: '#F5EDD6',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E8A200')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#F5EDD6')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
