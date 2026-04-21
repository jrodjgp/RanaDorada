import Navbar from '../components/Navbar';

export default function NosotrosPage({
  cartCount,
  badgeRef,
}: {
  cartCount: number;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />

      {/* SECTION 1 - Hero */}
      <section
        style={{
          backgroundColor: '#1C1A17',
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#2C1F0A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            color: 'rgba(245,237,214,0.15)',
            fontFamily: 'Space Grotesk, sans-serif',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          FOTO EQUIPO — 1920×1080
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '240px',
            background: 'linear-gradient(transparent, #1C1A17)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '10vh',
            left: '8%',
            zIndex: 2,
          }}
        >
          <div style={{ marginBottom: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.5)',
              }}
            >
              +15 AÑOS DE CULTURA
            </span>
            <span style={{ color: '#E8A200', fontSize: '8px' }}>●</span>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.5)',
              }}
            >
              14 PUBS A NIVEL NACIONAL
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(48px, 12vw, 96px)',
              color: '#E8A200',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Somos una<br />gran familia
          </h1>
        </div>
      </section>

      {/* SECTION 2 - Historia */}
      <section
        style={{
          backgroundColor: '#F5EDD6',
          padding: '100px 8%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '400px',
                height: '480px',
                background: '#D4C5A0',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                color: '#A89880',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              FOTO CERVECERÍA
            </div>
            <div
              style={{
                display: 'inline-block',
                background: '#E8A200',
                color: '#1C1A17',
                padding: '6px 16px',
                borderRadius: '2px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                fontWeight: 700,
                marginTop: '-16px',
                marginLeft: '16px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              EST. 2010
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                right: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'Newsreader, serif',
                fontWeight: 700,
                fontSize: '280px',
                color: 'rgba(28,26,23,0.05)',
                pointerEvents: 'none',
                userSelect: 'none',
                lineHeight: 1,
              }}
            >
              15
            </div>

            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '44px',
                color: '#1C1A17',
                lineHeight: 1.05,
                marginBottom: '24px',
                marginTop: 0,
              }}
            >
              Una historia que inspira
            </h2>

            <p
              style={{
                fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '16px',
                color: '#555',
                lineHeight: 1.75,
                marginBottom: '16px',
                margin: 0,
                paddingBottom: '16px',
              }}
            >
              Hace más de una década, decidimos que Panamá merecía algo mejor. Algo hecho con las manos, con paciencia y con pasión. Así nació La Rana Dorada, en un pequeño pub en el Casco Antiguo, donde la historia comenzó a escribirse con lúpulo y cebada.
            </p>

            <p
              style={{
                fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '16px',
                color: '#555',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}
            >
              No éramos los más grandes, pero teníamos la convicción de crear una cultura cervecera auténtica. Hoy, miramos hacia atrás y vemos una revolución líquida, construida pinta a pinta, junto a una comunidad que nos adoptó como su cerveza local.
            </p>

            <a
              href="#"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E8A200',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Conoce el proceso →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Esencia */}
      <section
        style={{
          backgroundColor: '#1C1A17',
          padding: '100px 8%',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '52px',
                color: '#F5EDD6',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Nuestra esencia
            </h2>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.35)',
                margin: '8px 0 0 0',
              }}
            >
              Lo que nos define
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 0,
              maxWidth: '100%',
            }}
          >
            {[
              {
                title: 'Craft Beers',
                desc: 'Elaboradas con ingredientes premium',
                bg: '#2C1F0A',
              },
              {
                title: 'Alta Calidad',
                desc: 'Proceso de fermentación supervisado',
                bg: '#1A2C1A',
              },
              {
                title: 'Nuestra Comunidad',
                desc: '14 pubs · Panamá City',
                bg: '#2C1A08',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  height: '400px',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: item.bg,
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: '60%',
                    inset: '0 0 0 0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#E8A200',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(245,237,214,0.55)',
                      marginTop: '4px',
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Propósito */}
      <section
        style={{
          backgroundColor: '#1C1A17',
          padding: '100px 8%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Newsreader, serif',
            fontWeight: 700,
            fontSize: '300px',
            color: 'rgba(232,162,0,0.04)',
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          RANA
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '480px',
              height: '520px',
              background: '#0A1A0A',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              color: 'rgba(245,237,214,0.3)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            FOTO RANA DORADA
          </div>

          <div>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.3)',
                marginBottom: '16px',
                margin: 0,
              }}
            >
              Parte de alta fermentación
            </p>

            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '52px',
                color: '#E8A200',
                lineHeight: 1,
                marginBottom: '20px',
                marginTop: '0',
              }}
            >
              Cerveza con<br />propósito
            </h2>

            <p
              style={{
                fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '18px',
                color: 'rgba(245,237,214,0.7)',
                lineHeight: 1.65,
                marginBottom: '32px',
              }}
            >
              5 centavos de cada lata son destinados a proteger la Rana Dorada y su hábitat natural en Panamá.
            </p>

            <a
              href="#"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.4)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(245,237,214,0.2)',
                paddingBottom: '2px',
                display: 'inline-block',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E8A200';
                e.currentTarget.style.borderBottomColor = '#E8A200';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(245,237,214,0.4)';
                e.currentTarget.style.borderBottomColor = 'rgba(245,237,214,0.2)';
              }}
            >
              Leer sobre la fundación →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Familia Corporativa */}
      <section
        style={{
          backgroundColor: '#F5EDD6',
          padding: '80px 8%',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(28,26,23,0.4)',
                margin: 0,
              }}
            >
              Parte de nuestra familia
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 0,
              textAlign: 'center',
            }}
          >
            {[
              { name: 'Pedro Mandinga', type: 'Ron Artesanal' },
              { name: 'Sinners Brewery', type: 'Cervecería Aliada' },
              { name: 'El Irish Pub', type: 'Cadena de Pubs' },
            ].map((brand, i, arr) => (
              <div
                key={i}
                style={{
                  flex: '1 0 33.333%',
                  padding: '40px 32px',
                  borderRight: i < arr.length - 1 ? '1px solid rgba(28,26,23,0.1)' : 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Newsreader, serif',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: '28px',
                    color: '#1C1A17',
                    margin: 0,
                  }}
                >
                  {brand.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(28,26,23,0.35)',
                    marginTop: '6px',
                    margin: '6px 0 0 0',
                  }}
                >
                  {brand.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
