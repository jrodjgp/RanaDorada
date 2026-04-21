import { useEffect, useRef } from 'react';

function PhotoPlaceholder({
  index,
  label,
  marginLeft,
}: {
  index: number;
  label: string;
  marginLeft: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="fade-up"
      style={{
        width: '200px',
        height: '260px',
        backgroundColor: '#D4C5A0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        marginLeft,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#9A8F7A',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function FoundedSection() {
  const photos = [
    { label: 'FOTO AQUÍ', marginLeft: 'auto' },
    { label: 'FOTO AQUÍ', marginLeft: '40%' },
    { label: 'FOTO AQUÍ', marginLeft: '0' },
  ];

  return (
    <section
      id="cerveceria"
      style={{
        backgroundColor: '#F5EDD6',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 8%',
          display: 'flex',
          gap: '80px',
          alignItems: 'flex-start',
        }}
        className="flex-col md:flex-row"
      >
        <div
          style={{
            flex: '0 0 auto',
            maxWidth: '460px',
          }}
          className="w-full"
        >
          <h2
            style={{
              fontFamily: 'Newsreader, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 56px)',
              color: '#1C1A17',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Desde 2010, fermentando cultura.
          </h2>

          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#3A3528',
              marginBottom: '32px',
              opacity: 0.85,
            }}
          >
            Somos la primera cervecería artesanal de Panamá. Nacimos con la
            misión de elevar el sabor local, usar ingredientes del trópico y
            demostrar que la buena cerveza también se hace en el istmo.
            Cada lote es pequeño, intencional y hecho con orgullo panameño.
          </p>

          <a
            href="#nosotros"
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
            Conocer la Historia →
          </a>

          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '56px',
              borderTop: '1px solid rgba(28,26,23,0.12)',
              paddingTop: '32px',
            }}
          >
            {[
              { value: '15', label: 'Años' },
              { value: '8', label: 'Estilos' },
              { value: '4', label: 'Locales' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'Newsreader, serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    color: '#E8A200',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#1C1A17',
                    opacity: 0.5,
                    marginTop: '4px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            minWidth: 0,
          }}
        >
          {photos.map((photo, i) => (
            <PhotoPlaceholder
              key={i}
              index={i}
              label={photo.label}
              marginLeft={photo.marginLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
