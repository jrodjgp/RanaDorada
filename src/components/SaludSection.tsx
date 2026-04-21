const TEXT = '¡Salud! · ¡Salud! · ¡Salud! · ¡Salud! · ';

export default function SaludSection() {
  return (
    <section
      style={{
        backgroundColor: '#1C1A17',
        height: '280px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          height: '140px',
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marqueeLeft 20s linear infinite',
            width: 'max-content',
          }}
        >
          {[TEXT, TEXT].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '96px',
                color: '#F5EDD6',
                lineHeight: 1,
                paddingRight: '0',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          height: '140px',
          marginTop: '-48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marqueeLeft 25s linear infinite reverse',
            width: 'max-content',
          }}
        >
          {[TEXT, TEXT].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '96px',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(245,237,214,0.25)',
                lineHeight: 1,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(232,162,0,0.7)',
          }}
        >
          Est. 2010 · Panamá
        </span>
      </div>
    </section>
  );
}
