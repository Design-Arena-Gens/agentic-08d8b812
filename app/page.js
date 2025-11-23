export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold' }}>ICEEM</h1>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '56px', margin: '0 0 20px', fontWeight: 'bold' }}>
            Innovation & Excellence
          </h2>
          <p style={{ fontSize: '24px', marginBottom: '40px', opacity: 0.95 }}>
            Empowering businesses in Tunisia with cutting-edge solutions
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: 'white',
            color: '#1e3a8a',
            padding: '16px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            Get Started
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" style={{
        padding: '80px 20px',
        background: '#f9fafb',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '20px', color: '#1f2937' }}>Our Services</h2>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '60px' }}>
            Comprehensive solutions tailored to your business needs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Consulting',
                description: 'Strategic business consulting to drive growth and innovation',
                icon: '💼'
              },
              {
                title: 'Technology Solutions',
                description: 'Modern technology implementation and digital transformation',
                icon: '⚡'
              },
              {
                title: 'Training & Development',
                description: 'Professional training programs to enhance team capabilities',
                icon: '📚'
              }
            ].map((service, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1f2937' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '80px 20px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '42px', marginBottom: '20px', color: '#1f2937' }}>
                About ICEEM
              </h2>
              <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.8', marginBottom: '20px' }}>
                Based in Tunisia, ICEEM is committed to delivering excellence and innovation in every project we undertake. We partner with businesses to unlock their full potential through strategic guidance and innovative solutions.
              </p>
              <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.8' }}>
                Our team of experts brings years of experience and a passion for driving meaningful change in the business landscape.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              height: '400px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '72px'
            }}>
              🇹🇳
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 20px',
        background: '#1e3a8a',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '200+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Team Members' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '18px', opacity: 0.9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 20px',
        background: '#f9fafb',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '20px', color: '#1f2937' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '40px' }}>
            Ready to transform your business? Contact us today.
          </p>

          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
            textAlign: 'left'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#1f2937' }}>Email:</strong>
              <span style={{ color: '#6b7280', marginLeft: '10px' }}>contact@iceem.tn</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#1f2937' }}>Location:</strong>
              <span style={{ color: '#6b7280', marginLeft: '10px' }}>Tunisia</span>
            </div>
            <div>
              <strong style={{ color: '#1f2937' }}>Website:</strong>
              <span style={{ color: '#6b7280', marginLeft: '10px' }}>iceem.tn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1f2937',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', marginBottom: '10px', fontWeight: 'bold' }}>ICEEM</p>
          <p style={{ opacity: 0.7, fontSize: '14px' }}>
            © 2024 ICEEM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
