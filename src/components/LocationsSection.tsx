import { useState } from 'react';

function LocationCard({
  bg,
  badge,
  name,
  subtitle,
}: {
  bg: string;
  badge?: string;
  name: string;
  subtitle: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '520px',
        width: '50vw',
        cursor: 'pointer',
        flexShrink: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: bg,
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.75) 100%)',
          pointerEvents: 'none',
        }}
      />

      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            backgroundColor: '#E8A200',
            color: '#1C1A17',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            zIndex: 2,
          }}
        >
          {badge}
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '32px',
          zIndex: 2,
        }}
      >
        <h3
          style={{
            fontFamily: 'Newsreader, serif',
            fontWeight: 700,
            fontSize: '52px',
            color: '#ffffff',
            lineHeight: 1,
            marginBottom: '8px',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function LocationsSection() {
  return (
    <section style={{ backgroundColor: '#F5EDD6', paddingTop: '80px' }}>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '48px',
          position: 'relative',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Newsreader, serif',
            fontWeight: 700,
            fontSize: '140px',
            color: 'rgba(28,26,23,0.06)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            overflow: 'hidden',
            lineHeight: 1,
          }}
        >
          Visítanos
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#1C1A17',
              marginBottom: '8px',
            }}
          >
            Nuestros Locales
          </p>
          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              color: '#666',
            }}
          >
            14 locales en toda Panamá.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%' }}>
        <LocationCard
          bg="#2C1F0A"
          badge="Nuestro Flagship"
          name="CASCO VIEJO"
          subtitle="La Rana Dorada Original"
        />
        <LocationCard
          bg="#1C3020"
          name="MULTIPLAZA"
          subtitle="El local más reciente"
        />
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '32px',
          marginBottom: '80px',
        }}
      >
        <a
          href="#locales"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#E8A200',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Ver todos los locales →
        </a>
      </div>
    </section>
  );
}
