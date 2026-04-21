import { useState } from 'react';
import beers, { Beer } from '../data/beers';

interface BeerCarouselProps {
  onAddToCart: (beer: Beer) => void;
}

function CanPlaceholder({ beer }: { beer: Beer }) {
  return (
    <div
      style={{
        backgroundColor: beer.bg,
        width: '220px',
        height: '380px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
      }}
    >
      <span
        style={{
          color: '#F5EDD6',
          fontFamily: 'Space Grotesk',
          fontSize: '13px',
          opacity: 0.6,
        }}
      >
        {beer.name} CAN
      </span>
    </div>
  );
}

export default function BeerCarousel({ onAddToCart }: BeerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beer = beers[currentIndex];
  const total = beers.length;

  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const next = () => setCurrentIndex((i) => (i + 1) % total);

  const arrowBase: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#ffffff',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'border-color 0.2s ease, color 0.2s ease',
    borderRadius: '2px',
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: beer.bg,
        transition: 'background-color 0.4s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '45%',
            paddingLeft: '8%',
            paddingRight: '4%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '80px',
          }}
        >
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '12px',
              color: '#F5EDD6',
              opacity: 0.5,
              letterSpacing: '0.1em',
              marginBottom: '40px',
            }}
          >
            0{currentIndex + 1} / 0{total}
          </span>

          <h2
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(42px, 5vw, 72px)',
              color: '#F5EDD6',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            {beer.name}
          </h2>

          <span
            style={{
              display: 'inline-block',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#E8A200',
              border: '1px solid #E8A200',
              padding: '4px 10px',
              marginBottom: '28px',
              alignSelf: 'flex-start',
            }}
          >
            {beer.style}
          </span>

          <hr style={{ borderColor: 'rgba(255,255,255,0.15)', marginBottom: '20px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#F5EDD6',
                  opacity: 0.6,
                }}
              >
                ABV
              </span>
              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#F5EDD6',
                }}
              >
                {beer.abv}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#F5EDD6',
                  opacity: 0.6,
                }}
              >
                IBU
              </span>
              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#F5EDD6',
                }}
              >
                {beer.ibu !== null ? beer.ibu : '—'}
              </span>
            </div>
          </div>

          <hr style={{ borderColor: 'rgba(255,255,255,0.15)', marginBottom: '20px' }} />

          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '14px',
              fontStyle: 'italic',
              color: '#F5EDD6',
              opacity: 0.75,
              marginBottom: '28px',
            }}
          >
            {beer.flavors}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color: '#E8A200',
              }}
            >
              {beer.price}
            </span>

            <button
              onClick={() => onAddToCart(beer)}
              style={{
                backgroundColor: '#E8A200',
                color: '#1C1A17',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '12px 20px',
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8820A';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8A200';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>

        <div
          style={{
            width: '55%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CanPlaceholder beer={beer} />
        </div>
      </div>

      <button
        onClick={prev}
        style={{ ...arrowBase, left: '24px' }}
        aria-label="Cerveza anterior"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#E8A200';
          e.currentTarget.style.color = '#E8A200';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          e.currentTarget.style.color = '#ffffff';
        }}
      >
        ←
      </button>

      <button
        onClick={next}
        style={{ ...arrowBase, right: '24px' }}
        aria-label="Siguiente cerveza"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#E8A200';
          e.currentTarget.style.color = '#E8A200';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          e.currentTarget.style.color = '#ffffff';
        }}
      >
        →
      </button>

      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10,
        }}
      >
        {beers.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: i === currentIndex ? '#E8A200' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
            aria-label={`Ir a ${beers[i].name}`}
          />
        ))}
      </div>
    </section>
  );
}
