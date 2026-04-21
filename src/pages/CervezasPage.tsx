import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import beers, { Beer } from '../data/beers';

interface CervezasPageProps {
  cartCount: number;
  onAddToCart: (beer: Beer) => void;
  openCart: () => void;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}

type Filter = 'todas' | 'lagers' | 'ales' | 'porters' | 'especiales' | '6-pack';

const filters: { key: Filter; label: string }[] = [
  { key: 'todas', label: 'Todas' },
  { key: 'lagers', label: 'Lagers' },
  { key: 'ales', label: 'Ales' },
  { key: 'porters', label: 'Porters' },
  { key: 'especiales', label: 'Especiales' },
  { key: '6-pack', label: '6-Pack' },
];

function darkenHex(hex: string, amount = 20): string {
  const h = hex.replace('#', '');
  const num = parseInt(h, 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);
  return `rgb(${r},${g},${b})`;
}

function CanPlaceholder({ beer, large = false }: { beer: Beer; large?: boolean }) {
  const w = large ? 280 : 220;
  const h = large ? 480 : 380;
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
        boxShadow: '0 24px 56px rgba(0,0,0,0.35)',
        transition: 'transform 0.3s ease',
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

function BeerPanel({
  beer,
  index,
  onAddToCart,
  openCart,
}: {
  beer: Beer;
  index: number;
  onAddToCart: (beer: Beer) => void;
  openCart: () => void;
}) {
  const navigate = useNavigate();
  const reversed = index % 2 !== 0;

  const imageCol = (
    <div
      style={{
        width: '50%',
        backgroundColor: beer.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        const can = e.currentTarget.querySelector('.can-inner') as HTMLElement | null;
        if (can) can.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        const can = e.currentTarget.querySelector('.can-inner') as HTMLElement | null;
        if (can) can.style.transform = 'scale(1)';
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.15)',
          pointerEvents: 'none',
        }}
      />
      <div className="can-inner" style={{ transition: 'transform 0.3s ease', position: 'relative', zIndex: 1 }}>
        <CanPlaceholder beer={beer} />
      </div>
    </div>
  );

  const textCol = (
    <div
      style={{
        width: '50%',
        backgroundColor: '#F5EDD6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 8%',
        minHeight: '70vh',
        flexShrink: 0,
      }}
    >
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

      <h2
        style={{
          fontFamily: 'Newsreader, serif',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'clamp(36px, 4vw, 56px)',
          color: '#1C1A17',
          lineHeight: 1,
          marginBottom: '12px',
        }}
      >
        {beer.name}
      </h2>

      <p
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '15px',
          fontStyle: 'italic',
          color: '#666',
          marginBottom: '24px',
          lineHeight: 1.6,
        }}
      >
        {beer.flavors}
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '32px',
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '13px',
            color: '#999',
          }}
        >
          ABV {beer.abv}
          {beer.ibu !== null && <> · IBU {beer.ibu}</>}
        </span>
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
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button
          onClick={() => navigate(`/cervezas/${beer.id}`)}
          style={{
            background: 'transparent',
            border: '1px solid #1C1A17',
            color: '#1C1A17',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, color 0.2s ease',
            borderRadius: '2px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1C1A17';
            e.currentTarget.style.color = '#F5EDD6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#1C1A17';
          }}
        >
          Ver Cerveza →
        </button>

        <button
          onClick={() => {
            onAddToCart(beer);
            openCart();
          }}
          style={{
            backgroundColor: '#E8A200',
            border: 'none',
            color: '#1C1A17',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
            borderRadius: '2px',
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
          Agregar
        </button>
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: reversed ? 'row-reverse' : 'row',
        minHeight: '70vh',
        overflow: 'hidden',
      }}
      className="flex-col md:flex-row"
    >
      {imageCol}
      {textCol}
    </div>
  );
}

export default function CervezasPage({ cartCount, onAddToCart, openCart, badgeRef }: CervezasPageProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('todas');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1C1A17' }}>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />

      <div style={{ height: '60px', backgroundColor: '#1C1A17', paddingTop: '60px' }} />

      <div
        style={{
          position: 'sticky',
          top: '60px',
          zIndex: 40,
          backgroundColor: '#1C1A17',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            padding: '0 5%',
          }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeFilter === f.key ? '2px solid #E8A200' : '2px solid transparent',
                color: activeFilter === f.key ? '#E8A200' : 'rgba(245,237,214,0.55)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '16px 20px',
                cursor: 'pointer',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                whiteSpace: 'nowrap',
                marginBottom: '-1px',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        {beers.map((beer, i) => {
          const visible = activeFilter === 'todas' || beer.category === activeFilter;
          return (
            <div key={beer.id} style={{ display: visible ? 'block' : 'none' }}>
              <BeerPanel beer={beer} index={i} onAddToCart={onAddToCart} openCart={openCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
