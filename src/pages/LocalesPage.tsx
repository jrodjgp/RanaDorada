import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface Location {
  name: string;
  address: string;
  badge: string | null;
  mapsQuery: string;
}

interface Zone {
  zone: string;
  locations: Location[];
}

const zones: Zone[] = [
  {
    zone: 'Centro / Histórica',
    locations: [
      {
        name: 'Casco Antiguo',
        address: 'Calle 9 con Calle Boquete, Esquina Casco Antiguo',
        badge: 'Flagship',
        mapsQuery: 'La+Rana+Dorada+Casco+Antiguo+Panama',
      },
      {
        name: 'Vía Argentina',
        address: 'Vía Argentina 20, frente al Parque Andrés Bello, El Cangrejo',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Via+Argentina+Panama',
      },
      {
        name: 'Marbella',
        address: 'Calle 54 Este, Plaza La Riviera',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Marbella+Panama',
      },
    ],
  },
  {
    zone: 'Este / Financiera',
    locations: [
      {
        name: 'San Francisco',
        address: 'Plaza SF 69, Calle 69 Este',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+San+Francisco+Panama',
      },
      {
        name: 'Costa del Este',
        address: 'Centro Comercial Downtown Plaza',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Costa+del+Este+Panama',
      },
    ],
  },
  {
    zone: 'Norte / Canal',
    locations: [
      {
        name: 'Centennial',
        address: 'Plaza Caminos de Centenial, Local 1, Condado del Rey',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Centennial+Panama',
      },
      {
        name: 'Clayton',
        address: 'Clayton Plaza, Vía principal hacia el Hospital',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Clayton+Panama',
      },
      {
        name: 'Brisas del Golf',
        address: 'Avenida C Norte con Calle 29, San Miguelito',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Brisas+del+Golf+Panama',
      },
      {
        name: 'Tap Room — Fábrica',
        address: 'Avenida Juan Pablo II con Calle C, Urb. Industrial La Locería',
        badge: 'Cervecería',
        mapsQuery: 'La+Rana+Dorada+Tap+Room+Loceria+Panama',
      },
    ],
  },
  {
    zone: 'Panamá Oeste',
    locations: [
      {
        name: 'Costa Verde',
        address: 'Boulevard Costa Verde, La Chorrera',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Costa+Verde+Chorrera+Panama',
      },
      {
        name: 'Coronado',
        address: 'Mi Plaza Coronado, Distrito de Chame',
        badge: 'Más reciente',
        mapsQuery: 'La+Rana+Dorada+Coronado+Panama',
      },
    ],
  },
  {
    zone: 'Interior del País',
    locations: [
      {
        name: 'Santiago',
        address: 'La Plaza (Plaza Banconal), Carretera Panamericana, Veraguas',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+Santiago+Veraguas+Panama',
      },
      {
        name: 'Chiriquí',
        address: 'Design Plaza, Local 41, Ciudad de David, Chiriquí',
        badge: null,
        mapsQuery: 'La+Rana+Dorada+David+Chiriqui+Panama',
      },
    ],
  },
];

function BadgeComponent({
  type,
}: {
  type: 'Flagship' | 'Cervecería' | 'Más reciente';
}) {
  let bgColor: string;
  let color: string;
  let border: string;

  if (type === 'Flagship') {
    bgColor = '#E8A200';
    color = '#1C1A17';
    border = 'none';
  } else if (type === 'Cervecería') {
    bgColor = '#1C1A17';
    color = '#F5EDD6';
    border = 'none';
  } else {
    bgColor = 'transparent';
    color = '#E8A200';
    border = '1px solid #E8A200';
  }

  return (
    <span
      style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '9px',
        fontWeight: 700,
        padding: '4px 10px',
        borderRadius: '2px',
        background: bgColor,
        color: color,
        border: border,
      }}
    >
      {type}
    </span>
  );
}

function LocationCard({ location }: { location: Location }) {
  return (
    <div
      style={{
        background: 'white',
        border: '0.5px solid rgba(28,26,23,0.12)',
        borderRadius: '8px',
        padding: '24px',
        position: 'relative',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(28,26,23,0.3)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(28,26,23,0.12)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {location.badge && <BadgeComponent type={location.badge as any} />}

      <h3
        style={{
          fontFamily: 'Newsreader, serif',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: '24px',
          color: '#1C1A17',
          marginBottom: '6px',
          marginTop: 0,
        }}
      >
        {location.name}
      </h3>

      <p
        style={{
          fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '13px',
          color: 'rgba(28,26,23,0.5)',
          lineHeight: 1.5,
          marginBottom: '20px',
          marginTop: 0,
        }}
      >
        {location.address}
      </p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => {
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`,
              '_blank'
            );
          }}
          style={{
            flex: 1,
            background: '#1C1A17',
            color: '#F5EDD6',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '10px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Google Maps →
        </button>
        <button
          onClick={() => {
            window.open(`https://waze.com/ul?q=${location.mapsQuery}`, '_blank');
          }}
          style={{
            flex: 1,
            background: 'transparent',
            border: '0.5px solid rgba(28,26,23,0.25)',
            color: 'rgba(28,26,23,0.6)',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '10px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(28,26,23,0.5)';
            e.currentTarget.style.color = 'rgba(28,26,23,0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(28,26,23,0.25)';
            e.currentTarget.style.color = 'rgba(28,26,23,0.6)';
          }}
        >
          Waze →
        </button>
      </div>
    </div>
  );
}

export default function LocalesPage({
  cartCount,
  badgeRef,
}: {
  cartCount: number;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />

      {/* SECTION 1 - Hero */}
      <section
        style={{
          backgroundColor: '#1C1A17',
          padding: '100px 8% 64px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '-20px',
            fontFamily: 'Newsreader, serif',
            fontWeight: 700,
            fontSize: '200px',
            color: 'rgba(245,237,214,0.04)',
            pointerEvents: 'none',
            overflow: 'hidden',
            lineHeight: 1,
          }}
        >
          Locales
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#E8A200',
              marginBottom: '12px',
              margin: '0 0 12px 0',
            }}
          >
            14 Locales en Panamá
          </p>

          <h1
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(48px, 10vw, 72px)',
              color: '#F5EDD6',
              lineHeight: 1,
              marginBottom: '16px',
              marginTop: 0,
            }}
          >
            Encuéntranos.
          </h1>

          <p
            style={{
              fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '16px',
              color: 'rgba(245,237,214,0.45)',
              margin: 0,
              maxWidth: '600px',
            }}
          >
            De Casco Antiguo a Chiriquí. Siempre hay una Rana cerca.
          </p>
        </div>
      </section>

      {/* SECTION 2 - Zones */}
      <section
        style={{
          backgroundColor: '#F5EDD6',
          padding: '80px 8%',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {zones.map((zoneData, zoneIdx) => (
            <div
              key={zoneIdx}
              style={{
                borderTop:
                  zoneIdx === 0 ? 'none' : '1px solid rgba(28,26,23,0.1)',
                paddingTop: zoneIdx === 0 ? 0 : '48px',
                marginTop: zoneIdx === 0 ? 0 : '48px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(28,26,23,0.35)',
                  marginBottom: '24px',
                  marginTop: 0,
                }}
              >
                {zoneData.zone}
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '16px',
                }}
              >
                {zoneData.locations.map((location, locIdx) => (
                  <LocationCard key={locIdx} location={location} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 - Tap Room */}
      <section
        style={{
          backgroundColor: '#2C1F0A',
          padding: '80px 8%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              width: '480px',
              height: '360px',
              background: '#1A1008',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              color: 'rgba(245,237,214,0.15)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            FOTO TAP ROOM
          </div>

          <div>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#E8A200',
                marginBottom: '12px',
                margin: '0 0 12px 0',
              }}
            >
              Cervecería y Destilería
            </p>

            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '44px',
                color: '#F5EDD6',
                lineHeight: 1.1,
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              El corazón<br />de todo.
            </h2>

            <p
              style={{
                fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '16px',
                color: 'rgba(245,237,214,0.55)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              Nuestra fábrica en La Locería es donde la magia ocurre. Aquí nacen todas las cervezas de La Rana Dorada y el ron Pedro Mandinga. Visítala de viernes a sábado con tour guiado.
            </p>

            <button
              onClick={() => navigate('/cerveceria')}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E8A200',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Reservar tour →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
