import { useState } from 'react';
import Navbar from '../components/Navbar';

interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  subtitle: string;
  featured: boolean;
  readTime: string;
  body: string;
}

const posts: BlogPost[] = [
  {
    id: 'pils-oro-copa-americas',
    category: 'PREMIOS',
    date: 'Copa Cervezas de América · 2024',
    title: 'La Pils que conquistó América',
    subtitle:
      'Cómo nuestra Czech Lager se convirtió en la cerveza más premiada del continente.',
    featured: true,
    readTime: '4 min',
    body: `
Hay victorias que se celebran con una pinta en la mano. Esta fue una de ellas.

En 2024, en el certamen más exigente del continente —la Copa de Cervezas de América—, La Rana Dorada fue reconocida como la mejor cerveza de América. Pero la historia de nuestra Pils con los galardones internacionales empieza mucho antes.

Desde la primera Copa Cervezas de América en 2014, nuestra Czech Pilsner ya llamaba la atención de los jueces. Una lager rubio brillante, elaborada con receta de origen alemán, con un perfil limpio que no esconde nada: amargor equilibrado a 23 IBUs, notas herbales y florales, cuerpo ligero pero con carácter. Nada que disimular. Todo que mostrar.

"La cerveza artesanal la hacen las personas. Sin su trabajo incansable y cuidado no tendríamos resultados de calidad," dijo Stefano Marín, nuestro Maestro Cervecero, al recibir uno de los galardones internacionales. Y tenía razón. Detrás de cada lata hay un equipo que llegó antes de que saliera el sol y se fue cuando ya la ciudad dormía.

A lo largo de los años, la Pils también cosechó Plata en el World Beer Awards de México y Bronce en el World Beer Awards de Colombia —competencias donde participan más de 3.500 cervezas de todos los continentes. Cada medalla, un argumento técnico. Cada sorbo, la evidencia.

En un continente donde las lagers son el terreno más competido —donde la tradición checa, alemana y americana se disputan el podio—, una cervecería panameña de 15 años llegó a la cima. La Rana Dorada no llegó a imitar a nadie. Llegó a ser reconocida como la mejor.

La próxima vez que abras una Pils bien fría, sabrás que en esa lata hay más que cebada y lúpulo.
    `,
  },
  {
    id: 'primer-single-malt',
    category: 'DESTILERÍA',
    date: 'Noviembre 2023',
    title: 'Primer single malt whisky panameño',
    subtitle:
      'Después de 11 años produciendo cerveza artesanal, hoy traemos el PRIMER SINGLE MALT 100% panameño...',
    featured: false,
    readTime: '3 min',
    body: '',
  },
  {
    id: 'donacion-ranita-dorada',
    category: 'CONSERVACIÓN',
    date: 'Enero 2022',
    title: 'Donación para la conservación de la Ranita Dorada',
    subtitle:
      'El martes 12 de enero fue una jornada muy especial. Todas las ventas realizadas en La Rana Dorada ese día fueron destinadas a...',
    featured: false,
    readTime: '2 min',
    body: '',
  },
  {
    id: 'chocolate-rana-dorada',
    category: 'GASTRONOMÍA',
    date: 'Agosto 2022',
    title: 'Chocolate de La Rana Dorada',
    subtitle:
      'El aroma a lúpulo es lo que nos da la bienvenida a esta barra de chocolate exótica. Nos invita a llamar inmediatamente...',
    featured: false,
    readTime: '2 min',
    body: '',
  },
  {
    id: 'copa-cervezas-america',
    category: 'PREMIOS',
    date: 'Copa Cervezas de América',
    title: 'Panamá en el podio continental',
    subtitle:
      'Dentro de la competencia internacional Copa Cervezas de América, donde participan cervezas de todo el continente...',
    featured: false,
    readTime: '3 min',
    body: '',
  },
];

function DropCap({ text }: { text: string }) {
  const firstChar = text.charAt(0);
  const rest = text.substring(1);

  return (
    <span>
      <span
        style={{
          float: 'left',
          fontFamily: 'Newsreader, serif',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '0.8',
          marginRight: '8px',
          color: '#E8A200',
        }}
      >
        {firstChar}
      </span>
      {rest}
    </span>
  );
}

export default function BlogPage({
  cartCount,
  badgeRef,
}: {
  cartCount: number;
  badgeRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const [email, setEmail] = useState('');
  const featuredPost = posts.find((p) => p.featured)!;
  const secondaryPosts = posts.slice(1);

  const handleSubscribe = () => {
    setEmail('');
  };

  const bodyParagraphs = featuredPost.body
    .split('\n\n')
    .filter((p) => p.trim().length > 0);

  const bgColors = ['#D4C5A0', '#C4B090', '#D4C5A0', '#B8A07A'];

  return (
    <>
      <Navbar cartCount={cartCount} badgeRef={badgeRef} />

      {/* SECTION 1 - Hero Editorial */}
      <section
        style={{
          backgroundColor: '#1C1A17',
          padding: '80px 8% 0',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#E8A200',
              marginBottom: '16px',
            }}
          >
            El diario de la rana
          </span>

          <h1
            style={{
              fontFamily: 'Newsreader, serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(56px, 10vw, 80px)',
              color: '#F5EDD6',
              lineHeight: 0.95,
              marginTop: 0,
              marginBottom: '48px',
            }}
          >
            Blog
          </h1>

          <div
            style={{
              borderBottom: '1px solid rgba(245,237,214,0.1)',
              marginBottom: '64px',
            }}
          />
        </div>
      </section>

      {/* SECTION 2 - Featured Article */}
      <section
        style={{
          backgroundColor: '#1C1A17',
          padding: '64px 8%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '55% 45%',
            gap: '64px',
            alignItems: 'start',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#E8A200',
                border: '0.5px solid #E8A200',
                padding: '4px 10px',
                marginBottom: '20px',
              }}
            >
              {featuredPost.category}
            </span>

            <h2
              style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '52px',
                color: '#F5EDD6',
                lineHeight: 1.05,
                marginBottom: '12px',
                marginTop: 0,
              }}
            >
              {featuredPost.title}
            </h2>

            <p
              style={{
                fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '18px',
                color: 'rgba(245,237,214,0.55)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                marginBottom: '32px',
                marginTop: 0,
              }}
            >
              {featuredPost.subtitle}
            </p>

            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '11px',
                color: 'rgba(245,237,214,0.3)',
                margin: '0 0 32px 0',
              }}
            >
              {featuredPost.date}
              <span style={{ margin: '0 8px' }}>·</span>
              {featuredPost.readTime}
            </p>

            {bodyParagraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '16px',
                  color: 'rgba(245,237,214,0.7)',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                  marginTop: 0,
                }}
              >
                {idx === 0 ? <DropCap text={para} /> : para}
              </p>
            ))}
          </div>

          <div>
            <div
              style={{
                width: '100%',
                minHeight: '480px',
                background: '#2C1F0A',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                color: 'rgba(245,237,214,0.15)',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '24px',
              }}
            >
              FOTO ARTÍCULO
            </div>
            <div
              style={{
                width: '40px',
                height: '1px',
                background: '#E8A200',
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - Secondary Posts Grid */}
      <section
        style={{
          backgroundColor: '#F5EDD6',
          padding: '80px 8%',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(28,26,23,0.35)',
              marginBottom: '40px',
              marginTop: 0,
            }}
          >
            Más historias
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
            }}
          >
            {secondaryPosts.map((post, idx) => (
              <div
                key={post.id}
                style={{
                  background: 'white',
                  border: '0.5px solid rgba(28,26,23,0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    height: '200px',
                    background: bgColors[idx],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: 'rgba(28,26,23,0.2)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  FOTO
                </div>

                <div style={{ padding: '24px' }}>
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '9px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#E8A200',
                      marginBottom: '8px',
                      marginTop: 0,
                    }}
                  >
                    {post.category}
                  </p>

                  <h4
                    style={{
                      fontFamily: 'Newsreader, serif',
                      fontWeight: 700,
                      fontSize: '22px',
                      color: '#1C1A17',
                      lineHeight: 1.1,
                      marginBottom: '8px',
                      marginTop: 0,
                    }}
                  >
                    {post.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: 'Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '13px',
                      color: 'rgba(28,26,23,0.5)',
                      fontStyle: 'italic',
                      lineHeight: 1.5,
                      marginBottom: '16px',
                      marginTop: 0,
                    }}
                  >
                    {post.subtitle}
                  </p>

                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '10px',
                      color: 'rgba(28,26,23,0.3)',
                      margin: 0,
                    }}
                  >
                    {post.date}
                    <span style={{ margin: '0 8px' }}>·</span>
                    {post.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Newsletter */}
      <section
        style={{
          backgroundColor: '#2C1F0A',
          padding: '64px 8%',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(245,237,214,0.4)',
            marginBottom: '12px',
            marginTop: 0,
          }}
        >
          No te pierdas nada
        </p>

        <h3
          style={{
            fontFamily: 'Newsreader, serif',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '36px',
            color: '#F5EDD6',
            marginTop: 0,
            marginBottom: '32px',
            lineHeight: 1.2,
          }}
        >
          Las historias que importan,<br />directo a tu correo.
        </h3>

        <div
          style={{
            display: 'flex',
            maxWidth: '480px',
            margin: '0 auto',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            style={{
              flex: 1,
              background: 'rgba(245,237,214,0.07)',
              border: '0.5px solid rgba(245,237,214,0.2)',
              borderRadius: '4px 0 0 4px',
              padding: '14px 20px',
              color: '#F5EDD6',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '13px',
              boxSizing: 'border-box',
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              background: '#E8A200',
              color: '#1C1A17',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              borderRadius: '0 4px 4px 0',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Suscribirse
          </button>
        </div>
      </section>
    </>
  );
}
