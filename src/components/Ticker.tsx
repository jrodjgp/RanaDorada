export default function Ticker() {
  const text = '· BLANCHE · PALE ALE · PORTER · IPA · PILS · GRAND CRU · COCO PORTER ·\u00A0\u00A0\u00A0';

  return (
    <div
      style={{
        backgroundColor: '#2C2318',
        overflow: 'hidden',
        padding: '14px 0',
        borderTop: '1px solid rgba(232,162,0,0.15)',
        borderBottom: '1px solid rgba(232,162,0,0.15)',
      }}
    >
      <div className="marquee-track">
        {[text, text].map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: '#E8A200',
              whiteSpace: 'nowrap',
              paddingRight: '0',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
