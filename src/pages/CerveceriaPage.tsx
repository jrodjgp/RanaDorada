import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

interface BookingState {
  name: string;
  day: 'viernes' | 'sabado' | null;
  time: string | null;
  guests: number;
}

type StepType = 'form' | 'printing' | 'ticket';

const PRICE_PER_PERSON = 15;

function generateBarcode() {
  const bars: number[] = [1, 2, 1, 3, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2];
  const heights = [28, 32, 24, 40, 26, 34, 30, 25, 38, 29, 31, 27, 36, 33, 24, 37, 35, 28, 32, 26];
  return bars.map((w, i) => ({ width: w, height: heights[i] }));
}

function TicketCard({ booking }: { booking: BookingState }) {
  const ticketId = `TKT-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
  const totalPrice = (booking.guests || 1) * PRICE_PER_PERSON;
  const barcode = generateBarcode();

  return (
    <div style={{ width: '100%', maxWidth: '520px', margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
          background: '#1C1A17',
          border: '1px solid rgba(232,162,0,0.2)',
        }}
      >
        <div style={{ flex: 1, background: '#2C1F0A', padding: '32px 28px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#E8A200',
              marginBottom: '8px',
            }}
          >
            La Rana Dorada · Tour
          </span>

          <h2
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '32px',
              color: '#F5EDD6',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Tour Cervecería<br />y Destilería
          </h2>

          <div>
            {[
              { label: 'Pasajero', value: booking.name },
              { label: 'Día', value: booking.day === 'viernes' ? 'Viernes' : 'Sábado' },
              { label: 'Hora', value: booking.time || '—' },
              { label: 'Invitados', value: `${booking.guests} ${booking.guests === 1 ? 'persona' : 'personas'}` },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: i < arr.length - 1 ? '0.5px solid rgba(245,237,214,0.1)' : 'none',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,237,214,0.3)',
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#F5EDD6',
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '0.5px solid rgba(245,237,214,0.1)',
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontSize: '11px',
              color: 'rgba(245,237,214,0.3)',
            }}
          >
            Admit {booking.guests}
          </div>
        </div>

        <div
          style={{
            width: '160px',
            background: '#251A0A',
            borderLeft: '2px dashed rgba(245,237,214,0.12)',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                gap: '2px',
                alignItems: 'flex-end',
                height: '48px',
                justifyContent: 'center',
                marginBottom: '8px',
              }}
            >
              {barcode.map((bar, i) => (
                <div
                  key={i}
                  style={{
                    width: `${bar.width}px`,
                    height: `${bar.height}px`,
                    background: 'rgba(245,237,214,0.5)',
                    borderRadius: '1px',
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '8px',
                color: 'rgba(245,237,214,0.25)',
                textAlign: 'center',
                lineHeight: 1.4,
                marginBottom: '4px',
              }}
            >
              {ticketId}
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(245,237,214,0.3)',
                marginBottom: '4px',
              }}
            >
              Total Fare
            </div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color: '#E8A200',
              }}
            >
              ${totalPrice.toFixed(2)}
            </div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                color: 'rgba(245,237,214,0.25)',
                marginBottom: '12px',
              }}
            >
              USD
            </div>
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'rgba(245,237,214,0.08)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                color: 'rgba(245,237,214,0.2)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
              }}
            >
              QR
            </div>
          </div>

          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '20px',
              color: 'rgba(245,237,214,0.15)',
            }}
          >
            ✂
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CerveceriaPage({
  cartCount,
  badgeRef,
}: {
  cartCount: number;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const [step, setStep] = useState<StepType>('form');
  const [booking, setBooking] = useState<BookingState>({
    name: '',
    day: null,
    time: null,
    guests: 1,
  });
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    if (!booking.name.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }
    if (!booking.day || !booking.time) {
      alert('Por favor selecciona día y hora');
      return;
    }

    setStep('printing');
  };

  useEffect(() => {
    if (step === 'printing') {
      const timer1 = setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = '100%';
        }
      }, 80);

      const timer2 = setTimeout(() => {
        setStep('ticket');
      }, 1500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [step]);

  return (
    <>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />

      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
          backgroundColor: '#1C1A17',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #2C1F0A 0%, #1A1008 100%)' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '11px',
              color: 'rgba(245,237,214,0.2)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            FOTO CERVECERÍA — 1920×1080
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '160px',
            background: 'linear-gradient(transparent, #1C1A17)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            paddingBottom: '80px',
            paddingLeft: '8%',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '2px',
              background: '#E8A200',
              marginBottom: '24px',
            }}
          />

          <h1
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(40px, 8vw, 72px)',
              color: '#F5EDD6',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            Cervecería<br />y Destilería
          </h1>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '12px',
              color: 'rgba(245,237,214,0.55)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              maxWidth: '500px',
            }}
          >
            Viernes y Sábados · Grupos de máx. 10 personas · Degustación incluida
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C1A17', padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#E8A200',
                marginBottom: '12px',
              }}
            >
              Reserva tu lugar
            </span>

            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#F5EDD6',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Tour Cervecería<br />y Destilería
            </h2>

            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '13px',
                color: 'rgba(245,237,214,0.4)',
                letterSpacing: '0.08em',
              }}
            >
              Una experiencia de 2 horas guiada por nuestros cerveceros expertos.
            </p>
          </div>

          {step === 'form' && (
            <div id="step1">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,237,214,0.35)',
                      marginBottom: '6px',
                    }}
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    placeholder="Tu nombre"
                    style={{
                      width: '100%',
                      background: 'rgba(245,237,214,0.06)',
                      border: '0.5px solid rgba(245,237,214,0.18)',
                      borderRadius: '6px',
                      color: '#F5EDD6',
                      fontFamily: 'Space Grotesk, sans-serif',
                      padding: '12px 14px',
                      fontSize: '13px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,237,214,0.35)',
                      marginBottom: '6px',
                    }}
                  >
                    Día
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['viernes', 'sabado'].map((day) => (
                      <button
                        key={day}
                        onClick={() => setBooking({ ...booking, day: day as 'viernes' | 'sabado' })}
                        style={{
                          flex: 1,
                          padding: '12px 14px',
                          background:
                            booking.day === day ? 'rgba(232,162,0,0.15)' : 'rgba(245,237,214,0.06)',
                          border:
                            booking.day === day
                              ? '0.5px solid #E8A200'
                              : '0.5px solid rgba(245,237,214,0.18)',
                          borderRadius: '6px',
                          color: booking.day === day ? '#E8A200' : '#F5EDD6',
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {day === 'viernes' ? 'Viernes' : 'Sábado'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,237,214,0.35)',
                      marginBottom: '6px',
                    }}
                  >
                    Hora
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['2:00 PM', '4:00 PM', '6:00 PM'].map((time) => (
                      <button
                        key={time}
                        onClick={() => setBooking({ ...booking, time })}
                        style={{
                          flex: 1,
                          padding: '12px 14px',
                          background:
                            booking.time === time ? 'rgba(232,162,0,0.15)' : 'rgba(245,237,214,0.06)',
                          border:
                            booking.time === time
                              ? '0.5px solid #E8A200'
                              : '0.5px solid rgba(245,237,214,0.18)',
                          borderRadius: '6px',
                          color: booking.time === time ? '#E8A200' : '#F5EDD6',
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,237,214,0.35)',
                      marginBottom: '6px',
                    }}
                  >
                    Invitados (máx 10)
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(245,237,214,0.06)',
                      border: '0.5px solid rgba(245,237,214,0.18)',
                      borderRadius: '6px',
                      padding: '8px 12px',
                    }}
                  >
                    <button
                      onClick={() =>
                        setBooking({ ...booking, guests: Math.max(1, booking.guests - 1) })
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#E8A200',
                        fontSize: '18px',
                        cursor: 'pointer',
                        padding: '0 4px',
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#F5EDD6',
                      }}
                    >
                      {booking.guests}
                    </span>
                    <button
                      onClick={() =>
                        setBooking({ ...booking, guests: Math.min(10, booking.guests + 1) })
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#E8A200',
                        fontSize: '18px',
                        cursor: 'pointer',
                        padding: '0 4px',
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  background: '#E8A200',
                  color: '#1C1A17',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Reservar Tour →
              </button>
            </div>
          )}

          {step === 'printing' && (
            <div id="step2" style={{ padding: '60px 0', textAlign: 'center' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,237,214,0.3)',
                  marginBottom: '20px',
                }}
              >
                Imprimiendo tu ticket...
              </span>
              <div
                style={{
                  width: '100%',
                  height: '2px',
                  background: 'rgba(245,237,214,0.1)',
                  borderRadius: '1px',
                  overflow: 'hidden',
                }}
              >
                <div
                  ref={progressBarRef}
                  style={{
                    width: '0',
                    height: '100%',
                    background: '#E8A200',
                    borderRadius: '1px',
                    transition: 'width 1.2s ease',
                  }}
                />
              </div>
            </div>
          )}

          {step === 'ticket' && (
            <div id="step3">
              <TicketCard booking={booking} />
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button
                  onClick={() => setStep('form')}
                  style={{
                    background: 'rgba(232,162,0,0.15)',
                    border: '0.5px solid #E8A200',
                    color: '#E8A200',
                    borderRadius: '6px',
                    padding: '12px 28px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#E8A200';
                    e.currentTarget.style.color = '#1C1A17';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(232,162,0,0.15)';
                    e.currentTarget.style.color = '#E8A200';
                  }}
                >
                  Hacer otra reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
