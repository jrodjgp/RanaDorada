import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        backgroundColor: '#2C1F0A',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 40%, rgba(232,162,0,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          paddingLeft: '8%',
          paddingRight: '8%',
          paddingBottom: '10vh',
          maxWidth: '780px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: 'Newsreader, serif',
            fontStyle: 'italic',
            fontWeight: 700,
            color: '#E8A200',
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
          className="text-[42px] md:text-[80px]"
        >
          Cerveza Artesanal.<br />Hecha en Panamá.
        </h1>

        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '15px',
            color: '#F5EDD6',
            marginTop: '20px',
            letterSpacing: '0.04em',
            opacity: 0.8,
          }}
        >
          15 años fermentando cultura.
        </p>

        <div style={{ display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap' }}>
          <Link
            to="/cervezas"
            style={{
              display: 'inline-block',
              backgroundColor: '#E8A200',
              color: '#1C1A17',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
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
            Ver Cervezas
          </Link>

          <a
            href="#cerveceria"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#E8A200',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              textDecoration: 'none',
              borderRadius: '2px',
              border: '1px solid #E8A200',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(232,162,0,0.08)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '8%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#F5EDD6',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            backgroundColor: '#F5EDD6',
          }}
        />
      </div>
    </section>
  );
}
