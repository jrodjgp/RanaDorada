import { useState } from 'react';

const events = [
  {
    title: 'Happy Hour — Casco Viejo',
    date: 'VIE 25 ABR',
    time: '5:00 PM – 8:00 PM',
    location: 'La Rana Dorada Casco Viejo',
  },
  {
    title: 'Noche de Trivia Cervecera',
    date: 'SÁB 26 ABR',
    time: '7:00 PM – 10:00 PM',
    location: 'La Rana Dorada Multiplaza',
  },
  {
    title: 'Lanzamiento: Edición Limitada Verano',
    date: 'VIE 2 MAY',
    time: '6:00 PM – 9:00 PM',
    location: 'La Rana Dorada Casco Viejo',
  },
  {
    title: 'Tour de Cervecería — Cupos Limitados',
    date: 'SÁB 3 MAY',
    time: '10:00 AM – 12:00 PM',
    location: 'Cervecería Principal',
  },
  {
    title: 'Maridaje: Cervezas & Gastronomía',
    date: 'VIE 9 MAY',
    time: '7:00 PM – 10:00 PM',
    location: 'La Rana Dorada El Cangrejo',
  },
];

function EventRow({ event }: { event: (typeof events)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backgroundColor: hovered ? 'rgba(255,255,255,0.03)' : 'transparent',
        transition: 'background-color 0.2s ease',
        flexWrap: 'wrap',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ flex: 2, minWidth: '200px' }}>
        <span
          style={{
            fontFamily: 'Newsreader, serif',
            fontWeight: 700,
            fontSize: '22px',
            color: '#F5EDD6',
          }}
        >
          {event.title}
        </span>
      </div>

      <div style={{ flex: 1, minWidth: '120px' }}>
        <div
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#E8A200',
            marginBottom: '4px',
          }}
        >
          {event.date}
        </div>
        <div
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          {event.time}
        </div>
      </div>

      <div style={{ flex: 1, minWidth: '160px' }}>
        <span
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          · {event.location}
        </span>
      </div>

      <div style={{ flexShrink: 0 }}>
        <a
          href="#eventos"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#E8A200',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            whiteSpace: 'nowrap',
          }}
        >
          Ver evento →
        </a>
      </div>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section
      style={{
        backgroundColor: '#1C1A17',
        padding: '80px 8%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20px',
          right: '-20px',
          fontFamily: 'Newsreader, serif',
          fontWeight: 700,
          fontSize: '160px',
          color: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        Eventos
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: 'Newsreader, serif',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 56px)',
            color: '#F5EDD6',
            lineHeight: 1,
          }}
        >
          Lo que se viene
        </h2>
        <a
          href="#eventos"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#E8A200',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Ver todos →
        </a>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {events.map((event, i) => (
          <EventRow key={i} event={event} />
        ))}
      </div>
    </section>
  );
}
