import { X } from 'lucide-react';
import { Beer } from '../data/beers';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Beer[];
  onRemove: (id: number) => void;
}

interface GroupedItem {
  beer: Beer;
  qty: number;
}

function groupItems(items: Beer[]): GroupedItem[] {
  const map = new Map<number, GroupedItem>();
  for (const beer of items) {
    const existing = map.get(beer.id);
    if (existing) {
      existing.qty += 1;
    } else {
      map.set(beer.id, { beer, qty: 1 });
    }
  }
  return Array.from(map.values());
}

function parsePrice(price: string): number {
  return parseFloat(price.replace('$', '')) || 0;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onRemove }: CartDrawerProps) {
  const grouped = groupItems(cartItems);
  const total = grouped.reduce(
    (sum, { beer, qty }) => sum + parsePrice(beer.price) * qty,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998,
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '380px',
          maxWidth: '100vw',
          backgroundColor: '#1C1A17',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 24px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#E8A200',
            }}
          >
            Carrito
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(245,237,214,0.6)',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5EDD6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,237,214,0.6)')}
            aria-label="Cerrar carrito"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {grouped.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '15px',
                  color: 'rgba(245,237,214,0.4)',
                  fontStyle: 'italic',
                }}
              >
                Tu carrito está vacío.
              </p>
            </div>
          ) : (
            grouped.map(({ beer, qty }) => (
              <div
                key={beer.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 24px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '60px',
                    borderRadius: '6px',
                    backgroundColor: beer.bg,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '8px',
                      color: '#F5EDD6',
                      opacity: 0.6,
                      textAlign: 'center',
                      lineHeight: 1.2,
                    }}
                  >
                    {beer.name}
                  </span>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: 'Newsreader, serif',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#F5EDD6',
                      marginBottom: '2px',
                    }}
                  >
                    {beer.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(245,237,214,0.5)',
                    }}
                  >
                    {qty} × {beer.price} ={' '}
                    <span style={{ color: '#E8A200', fontWeight: 700 }}>
                      ${(parsePrice(beer.price) * qty).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(beer.id)}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(245,237,214,0.5)',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,80,80,0.5)';
                    e.currentTarget.style.color = 'rgba(255,120,120,0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.color = 'rgba(245,237,214,0.5)';
                  }}
                  aria-label={`Quitar ${beer.name}`}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            padding: '20px 24px 28px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.5)',
              }}
            >
              Total
            </span>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                color: '#E8A200',
              }}
            >
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => alert('Próximamente — integración de pago en camino')}
            style={{
              width: '100%',
              backgroundColor: '#E8A200',
              color: '#1C1A17',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              marginBottom: '12px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B8820A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8A200')}
          >
            Proceder al Pago
          </button>

          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '12px',
              color: 'rgba(245,237,214,0.35)',
              textAlign: 'center',
            }}
          >
            Pago seguro · Envío a todo Panamá
          </p>
        </div>
      </div>
    </>
  );
}
