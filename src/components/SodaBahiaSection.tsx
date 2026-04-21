import { useState } from 'react';

const cans = [
  { bg: '#7BB83A', label: 'Limón',    rotation: -8 },
  { bg: '#E8821A', label: 'Naranja',  rotation: -4 },
  { bg: '#E84B6A', label: 'Toronja',  rotation:  0 },
  { bg: '#C4A800', label: 'Jengibre', rotation:  4 },
  { bg: '#5C1A2A', label: 'Kola',     rotation:  8 },
];

export default function SodaBahiaSection() {
  const [rowHovered, setRowHovered] = useState(false);

  return (
    <section
      style={{
        backgroundColor: '#F5EDD6',
        padding: '64px 10%',
        borderTop: '1px solid rgba(28,26,23,0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '0 0 auto', maxWidth: '420px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#666',
              marginBottom: '8px',
            }}
          >
            Sin alcohol,
          </span>

          <h2
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 52px)',
              color: '#1C1A17',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            con personalidad.
          </h2>

          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              color: '#555',
              lineHeight: 1.65,
              maxWidth: '360px',
              marginBottom: '32px',
            }}
          >
            Soda Bahía es nuestra línea de bebidas artesanales sin alcohol.
            Misma cultura, sin el ABV.
          </p>

          <a
            href="#soda-bahia"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#E8A200',
              textDecoration: 'none',
              borderBottom: '1px solid #E8A200',
              paddingBottom: '2px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Conocer Soda Bahía →
          </a>
        </div>

        <div
          style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              cursor: 'default',
            }}
            onMouseEnter={() => setRowHovered(true)}
            onMouseLeave={() => setRowHovered(false)}
          >
            {cans.map((can, i) => (
              <div
                key={can.label}
                style={{
                  position: 'relative',
                  width: '72px',
                  height: '120px',
                  borderRadius: '8px',
                  backgroundColor: can.bg,
                  marginLeft: i === 0 ? '0' : rowHovered ? '4px' : '-12px',
                  transform: `rotate(${rowHovered ? 0 : can.rotation}deg)`,
                  transition: 'transform 0.3s ease, margin-left 0.3s ease',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '8px',
                  zIndex: i,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                  }}
                >
                  {can.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
