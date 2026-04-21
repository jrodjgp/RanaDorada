import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import beers, { Beer } from '../data/beers';

interface BeerDetailPageProps {
  cartCount: number;
  onAddToCart: (beer: Beer) => void;
  openCart: () => void;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}

const reviews = [
  { name: 'Carlos M.', text: 'La mejor cerveza artesanal de Panamá. Siempre fresca, siempre perfecta.' },
  { name: 'Andrea R.', text: 'Me sorprendió la complejidad del sabor. La recomiendo sin dudar.' },
  { name: 'Luis T.', text: 'Perfecta para compartir. Se convirtió en mi favorita del happy hour.' },
  { name: 'María F.', text: 'Increíble equilibrio. Nunca pensé que una cerveza local fuera tan buena.' },
  { name: 'Roberto S.', text: 'El packaging con las ranas ya me ganó. El sabor me enamoró.' },
];

function darkenHex(hex: string, amount = 20): string {
  const h = hex.replace('#', '');
  const num = parseInt(h, 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);
  return `rgb(${r},${g},${b})`;
}

function CanPlaceholder({ beer, w, h }: { beer: Beer; w: number; h: number }) {
  return (
    <div
      style={{
        backgroundColor: darkenHex(beer.bg, 18),
        width: `${w}px`,
        height: `${h}px`,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 32px 72px rgba(0,0,0,0.4)',
      }}
    >
      <span style={{ color: '#F5EDD6', fontFamily: 'Space Grotesk', fontSize: '13px', opacity: 0.6 }}>
        {beer.name} CAN
      </span>
    </div>
  );
}

function StatBar({ label, value, width, delay = 0 }: { label: string; value: string | number; width: number; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.style.width = `${width}%`;
    }, delay + 100);
    return () => clearTimeout(timer);
  }, [width, delay]);

  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888' }}>
          {label}
        </span>
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700, color: '#1C1A17' }}>
          {value}
        </span>
      </div>
      <div style={{ width: '100%', height: '6px', backgroundColor: '#D4C5A0', borderRadius: '3px', overflow: 'hidden' }}>
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: '0%',
            backgroundColor: '#E8A200',
            borderRadius: '3px',
            transition: 'width 1.2s ease',
          }}
        />
      </div>
    </div>
  );
}

function SuggestedCard({ beer, onClick }: { beer: Beer; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: 1,
        border: '1px solid rgba(232,162,0,0.4)',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        backgroundColor: '#F5EDD6',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#E8A200';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(232,162,0,0.4)';
      }}
    >
      <div
        style={{
          height: '200px',
          backgroundColor: beer.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: darkenHex(beer.bg, 18),
            width: '120px',
            height: '200px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#F5EDD6', fontFamily: 'Space Grotesk', fontSize: '10px', opacity: 0.6 }}>
            {beer.name} CAN
          </span>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontFamily: 'Newsreader, serif', fontWeight: 700, fontSize: '24px', color: '#1C1A17', marginBottom: '4px' }}>
          {beer.name}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', color: '#888', letterSpacing: '0.1em' }}>
            {beer.style}
          </span>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '16px', fontWeight: 700, color: '#E8A200' }}>
            {beer.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BeerDetailPage({ cartCount, onAddToCart, openCart, badgeRef }: BeerDetailPageProps) {
  const { beerId } = useParams<{ beerId: string }>();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewOpacity, setReviewOpacity] = useState(1);

  const beer = beers.find((b) => b.id === Number(beerId));

  useEffect(() => {
    if (!beer) navigate('/cervezas');
  }, [beer, navigate]);

  if (!beer) return null;

  const otherBeers = beers.filter((b) => b.id !== beer.id);
  const suggestions = [
    otherBeers[beer.id % otherBeers.length],
    otherBeers[(beer.id + 1) % otherBeers.length],
  ];

  const ibuWidth = beer.ibu !== null ? Math.min((beer.ibu / 100) * 100, 100) : 0;
  const abvNum = parseFloat(beer.abv);
  const abvWidth = isNaN(abvNum) ? 0 : Math.min((abvNum / 10) * 100, 100);

  const changeReview = (dir: 1 | -1) => {
    setReviewOpacity(0);
    setTimeout(() => {
      setReviewIndex((i) => (i + dir + reviews.length) % reviews.length);
      setReviewOpacity(1);
    }, 150);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart(beer);
    }
    openCart();
  };

  const dataRows = [
    { label: 'Estilo', value: beer.style },
    { label: 'ABV', value: beer.abv },
    { label: 'IBU', value: beer.ibu ?? '—' },
    { label: 'Categoría', value: beer.category },
  ];

  return (
    <div style={{ backgroundColor: '#F5EDD6', minHeight: '100vh' }}>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />

      {/* Section 1 — Split Hero */}
      <div style={{ display: 'flex', height: '100vh' }} className="flex-col md:flex-row">
        <div
          style={{
            width: '45%',
            backgroundColor: beer.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
          }}
          className="w-full md:w-[45%] h-[50vh] md:h-full"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.12)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <CanPlaceholder beer={beer} w={280} h={480} />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: '#F5EDD6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 8% 40px',
            overflowY: 'auto',
          }}
        >
          <button
            onClick={() => navigate('/cervezas')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '11px',
              color: '#999',
              letterSpacing: '0.1em',
              marginBottom: '32px',
              padding: 0,
              textAlign: 'left',
            }}
          >
            Cervezas » {beer.name}
          </button>

          <span
            style={{
              display: 'inline-block',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#1C1A17',
              border: '1px solid #1C1A17',
              padding: '4px 10px',
              marginBottom: '16px',
              alignSelf: 'flex-start',
            }}
          >
            {beer.style}
          </span>

          <h1
            style={{
              fontFamily: 'Newsreader, serif',
              fontWeight: 700,
              fontSize: 'clamp(48px, 6vw, 80px)',
              color: '#1C1A17',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            {beer.name}
          </h1>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 500,
              color: '#E8A200',
              marginBottom: '20px',
            }}
          >
            {beer.abv}
          </p>

          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              color: '#555',
              lineHeight: 1.65,
              maxWidth: '440px',
              marginBottom: '32px',
              fontStyle: 'italic',
            }}
          >
            {beer.flavors}
          </p>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              color: '#1C1A17',
              marginBottom: '28px',
            }}
          >
            {beer.price}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid #ccc',
                borderRadius: '2px',
                background: 'transparent',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1C1A17',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1C1A17')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
            >
              −
            </button>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1C1A17',
                minWidth: '24px',
                textAlign: 'center',
              }}
            >
              {qty}
            </span>
            <button
              onClick={() => setQty((q) => q + 1)}
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid #ccc',
                borderRadius: '2px',
                background: 'transparent',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1C1A17',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1C1A17')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              maxWidth: '320px',
              width: '100%',
              backgroundColor: '#E8A200',
              color: '#1C1A17',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
              marginBottom: '16px',
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

          <button
            onClick={() => navigate('/cervezas')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '13px',
              color: '#999',
              letterSpacing: '0.05em',
              padding: 0,
              textAlign: 'left',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1C1A17')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
          >
            ← Volver a Cervezas
          </button>
        </div>
      </div>

      {/* Section 2 — Brew Facts */}
      <div
        style={{
          backgroundColor: '#F5EDD6',
          padding: '80px 10%',
          borderTop: '1px solid rgba(28,26,23,0.1)',
        }}
      >
        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontWeight: 700,
                fontSize: '36px',
                color: '#1C1A17',
                marginBottom: '32px',
              }}
            >
              Datos del Estilo
            </h2>
            {dataRows.map((row, i) => (
              <div key={row.label}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888',
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '16px',
                      color: '#1C1A17',
                      textTransform: 'capitalize',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
                {i < dataRows.length - 1 && (
                  <hr style={{ borderColor: 'rgba(28,26,23,0.1)', margin: 0 }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontWeight: 700,
                fontSize: '36px',
                color: '#1C1A17',
                marginBottom: '32px',
              }}
            >
              Perfil
            </h2>

            {beer.ibu !== null && (
              <StatBar label="Amargor (IBU)" value={beer.ibu} width={ibuWidth} delay={0} />
            )}
            {!isNaN(abvNum) && (
              <StatBar label="Alcohol (ABV)" value={beer.abv} width={abvWidth} delay={200} />
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 0',
                borderTop: '1px solid rgba(28,26,23,0.1)',
                marginTop: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888',
                }}
              >
                Disponibilidad
              </span>
              <span
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  color: '#1C1A17',
                }}
              >
                Todo el año
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Reviews */}
      <div
        style={{
          backgroundColor: '#1C1A17',
          padding: '80px 10%',
        }}
      >
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 auto', width: '40%', minWidth: '240px' }}>
            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: '#F5EDD6',
                lineHeight: 1,
                marginBottom: '32px',
                textTransform: 'uppercase',
              }}
            >
              Lo que Dicen
            </h2>

            <div style={{ display: 'flex', gap: '12px' }}>
              {[{ dir: -1, label: '←' }, { dir: 1, label: '→' }].map(({ dir, label }) => (
                <button
                  key={label}
                  onClick={() => changeReview(dir as 1 | -1)}
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    background: 'transparent',
                    color: '#ffffff',
                    fontSize: '18px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2px',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E8A200';
                    e.currentTarget.style.color = '#E8A200';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  aria-label={dir === -1 ? 'Reseña anterior' : 'Siguiente reseña'}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: '240px',
              opacity: reviewOpacity,
              transition: 'opacity 0.3s ease',
            }}
          >
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#E8A200',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              {reviews[reviewIndex].name}
            </p>
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#F5EDD6',
                lineHeight: 1.6,
              }}
            >
              "{reviews[reviewIndex].text}"
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 — Suggestions */}
      <div style={{ backgroundColor: '#F5EDD6', padding: '80px 10%' }}>
        <h2
          style={{
            fontFamily: 'Newsreader, serif',
            fontWeight: 700,
            fontSize: '36px',
            color: '#1C1A17',
            marginBottom: '40px',
          }}
        >
          También te puede gustar
        </h2>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {suggestions.map((s) => (
            <SuggestedCard
              key={s.id}
              beer={s}
              onClick={() => navigate(`/cervezas/${s.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
