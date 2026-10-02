import { FormEvent, useEffect, useState } from 'react';
import { Icon } from './components/Icon';
import { clinic, messages, waLink } from './lib/clinic';

const navItems = [
  ['About', '#about'],
  ['Our dentists', '#doctors'],
  ['Treatments', '#treatments'],
  ['Our approach', '#approach'],
  ['Contact', '#contact'],
];

const reasons = [
  ['01', 'Comfort-first visits', 'A calm, unhurried environment where your concerns are heard.'],
  ['02', 'Clear conversations', 'Understand your options before deciding what feels right.'],
  ['03', 'Personal attention', 'Care shaped around your needs, routine, and confidence.'],
  ['04', 'A modern outlook', 'Thoughtful dentistry with an emphasis on precision and prevention.'],
];

function Brand({ onDark = false }: { onDark?: boolean }) {
  return <a className="brand" href="#top" aria-label="Shivaay Dental Care home"><img className="brand-logo" src={onDark ? clinic.logoOnDark : clinic.logo} alt="Shivaay Dental Care & Orthodontic Center" /></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    const startHeroVideo = () => {
      document.querySelector<HTMLVideoElement>('.hero-video')?.play().catch(() => undefined);
    };
    window.addEventListener('pointerdown', startHeroVideo, { once: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointerdown', startHeroVideo);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello, I would like to get in touch.\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nMessage: ${data.get('message')}`;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  return <div id="top">
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container">
        <Brand onDark={!scrolled} />
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([label, href]) => <a href={href} onClick={closeMenu} key={href}>{label}</a>)}
          <a className="nav-cta" href={waLink(messages.appointment)} target="_blank" rel="noreferrer">Book an appointment <Icon name="arrow" /></a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </nav>
    </header>

    <main>
      <section className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${clinic.images.hero})` }} />
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={clinic.images.hero} aria-hidden="true" onLoadedData={(event) => { event.currentTarget.play().catch(() => undefined); }}>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy reveal"><p className="eyebrow light-eyebrow"><span /> Advanced dental care</p><h1>Confident smiles<br /><em>begin here.</em></h1><p className="hero-text">We are Bareilly's first Invisalign Certified Clinic, with thoughtful dentistry focused on your comfort, confidence, and long-term oral health.</p><div className="hero-actions"><a className="button button-light" href={waLink(messages.appointment)} target="_blank" rel="noreferrer">Book an appointment <Icon name="arrow" /></a><a className="text-link light-link" href="#treatments">Explore treatments <Icon name="arrow" /></a></div></div>
          <div className="hero-meta"><span>{clinic.area}</span><span className="hero-line" /><span>Shivaay Dental Care</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><span className="scroll-line" /></a>
      </section>

      <section className="trust-strip"><div className="container trust-items">{clinic.trust.map((item) => <div key={item.number}><span className="trust-number">{item.number}</span><span><strong>{item.title}</strong><small>{item.sub}</small></span></div>)}</div></section>

      <section className="section about-section" id="about"><div className="container about-grid"><div className="about-visual reveal"><img className="about-team-photo" src={clinic.images.team} alt="The dental team at Shivaay Dental Care in Bareilly" loading="lazy" /><div className="vertical-note">Your smile, thoughtfully cared for</div></div><div className="about-copy reveal"><p className="eyebrow"><span /> Meet your care team</p><h2>Expert care,<br /><em>personal touch.</em></h2><p className="lead">Bareilly's First Invisalign Certified Clinic.</p><p>At Shivaay Dental Care, we are committed to providing exceptional orthodontic and dental services for patients of all ages. Our team of skilled specialists focuses on achieving healthy, beautiful smiles through personalized care. From braces and aligners to preventive and cosmetic dentistry, we use the latest technology and techniques for comfortable, effective treatment.</p><div className="doctor-signoff"><div className="signoff-line" /><div><strong>Shivaay Dental Care</strong><span>Dental Care &amp; Orthodontic Center</span></div></div><a className="text-link" href={waLink(messages.consultation)} target="_blank" rel="noreferrer">Book a consultation <Icon name="arrow" /></a></div></div></section>

      <section className="section doctors-section" id="doctors"><div className="container"><div className="section-heading-row"><div><p className="eyebrow"><span /> Meet your dentists</p><h2>Specialists who<br /><em>listen first.</em></h2></div><p className="section-intro">Experienced, thoughtful care from a team that takes time to understand your smile.</p></div><div className="doctor-grid">{clinic.doctors.map((doctor, index) => <article className="doctor-card reveal" key={doctor.name}><div className="doctor-card-photo"><img src={clinic.images.doctors[index].src} alt={clinic.images.doctors[index].alt} loading="lazy" /></div><div className="doctor-card-copy"><p className="doctor-specialty">{doctor.specialty}</p><h3>{doctor.name}</h3><p className="doctor-qualifications">{doctor.qualifications}</p><p>{doctor.description}</p></div></article>)}</div></div></section>

      <section className="section treatment-section" id="treatments"><div className="container"><div className="section-heading-row"><div><p className="eyebrow"><span /> What we do</p><h2>Specialist care for<br /><em>every smile.</em></h2></div><p className="section-intro">Explore dental treatments in Bareilly, with options explained clearly and tailored to your needs.</p></div><div className="service-list">{clinic.treatments.map((treatment, index) => <article className={`service-category${activeCategory === index ? ' is-open' : ''}`} key={treatment.title}><button className="service-category-button" type="button" aria-expanded={activeCategory === index} aria-controls={`service-panel-${index}`} onClick={() => setActiveCategory(activeCategory === index ? null : index)}><span className="service-number">{treatment.number}</span><span className="service-title">{treatment.title}</span><span className="service-toggle" aria-hidden="true" /></button><div className="service-panel" id={`service-panel-${index}`} aria-hidden={activeCategory !== index}><ul>{treatment.services.map((service, serviceIndex) => <li key={service}><a href={waLink(messages.treatment(service))} target="_blank" rel="noreferrer" tabIndex={activeCategory === index ? 0 : -1} style={{ transitionDelay: activeCategory === index ? `${serviceIndex * 45}ms` : '0ms' }}>{service}<Icon name="arrow" /></a></li>)}</ul></div></article>)}</div></div></section>

      <section className="feature-section" id="approach"><div className="container feature-grid"><div className="feature-image"><img src={clinic.images.feature} alt="Dentist providing attentive patient care" loading="lazy" /></div><div className="feature-copy"><p className="eyebrow light-eyebrow"><span /> A better dental visit</p><h2>Good dentistry is<br /><em>felt, not rushed.</em></h2><p>We believe the details matter: a calm room, time to ask questions, and care that respects the person behind the smile.</p><a className="button button-outline-light" href={waLink(messages.treatmentInfo)} target="_blank" rel="noreferrer">Talk to us on WhatsApp <Icon name="arrow" /></a></div></div></section>

      <section className="section reason-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow"><span /> Why Shivaay</p><h2>Small details.<br /><em>Meaningful care.</em></h2></div><p className="section-intro">A dental visit should leave you feeling informed, respected, and ready for your next step.</p></div><div className="reason-grid">{reasons.map(([number, title, text]) => <div className="reason-item reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>


      <section className="journey-section"><div className="container"><div className="section-heading-row journey-heading"><div><p className="eyebrow light-eyebrow"><span /> Your next step</p><h2>A simpler way<br /><em>to care for your smile.</em></h2></div><p className="section-intro light-copy">From your first message to your treatment plan, we keep the process clear and comfortable.</p></div><div className="journey-grid">{clinic.journey.map((step) => <div key={step.step}><span>{step.step}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid"><div><p className="eyebrow"><span /> Start a conversation</p><h2>Let's make room<br /><em>for your smile.</em></h2><p className="lead">Tell us what you need. We will help you find the right next step.</p><div className="contact-list"><div><span className="contact-icon"><Icon name="pin" /></span><span><small>Find us</small><strong>{clinic.address}</strong></span></div><div><span className="contact-icon"><Icon name="phone" /></span><span><small>Call or WhatsApp</small><strong>{clinic.phone}</strong></span></div><div><span className="contact-icon"><Icon name="clock" /></span><span><small>Clinic hours</small><strong>{clinic.hours.map((item, index) => <span key={item.day}>{item.day}: {item.time}{index < clinic.hours.length - 1 && <br />}</span>)}</strong></span></div></div></div><form className="contact-form" onSubmit={submitContact}><p className="form-kicker">Prefer to write first?</p><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Phone<input name="phone" required placeholder="Your phone number" /></label><label>Message<textarea name="message" required rows={4} placeholder="How can we help?"></textarea></label><button className="button button-dark" type="submit">Continue on WhatsApp <Icon name="arrow" /></button><p className="form-note">Treatment recommendations are based on individual clinical assessment.</p></form></div></section>

      <section className="location-band"><div className="container location-band-inner"><div className="location-band-copy"><p className="eyebrow light-eyebrow"><span /> Visit the clinic</p><h2>Good care is<br /><em>closer than you think.</em></h2><p>Find Shivaay Dental Care using the map below, then get turn-by-turn directions when you are ready to visit.</p><a className="button button-light" href={clinic.directionsUrl} target="_blank" rel="noreferrer">Get directions <Icon name="arrow" /></a></div><div className="map-panel"><div className="map-panel-header"><span className="map-panel-mark"><Icon name="pin" /></span><span className="map-panel-title"><small>Bareilly, Uttar Pradesh</small><strong>Shivaay Dental Care</strong></span><a className="map-panel-action" href={clinic.directionsUrl} target="_blank" rel="noreferrer" aria-label="Open Shivaay Dental Care in Google Maps" title="Open in Google Maps"><Icon name="arrow" /></a></div><div className="map-embed"><iframe title="Shivaay Dental Care location map" src="https://www.google.com/maps?q=28.379463,79.4278715&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="map-panel-address"><Icon name="pin" /><span>{clinic.address}</span></div></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-top"><Brand onDark /><div className="footer-note">Modern dentistry,<br /><em>thoughtfully delivered.</em></div><div className="footer-links"><a href="#about">About</a><a href="#treatments">Treatments</a><a href="#contact">Contact</a><a href={clinic.instagram} target="_blank" rel="noreferrer">Instagram</a></div></div><div className="container footer-bottom"><span>© 2024 Shivaay Dental Care &amp; Orthodontic Center</span><span>Designed with care for better smiles.</span><a href={waLink(messages.appointment)} target="_blank" rel="noreferrer">Book appointment <Icon name="arrow" /></a></div></footer>
    <div className="desktop-whatsapp"><a href={waLink(messages.appointment)} target="_blank" rel="noreferrer"><span>WhatsApp us</span><strong>↗</strong></a></div><div className="mobile-actions"><a href={clinic.phoneHref}><Icon name="phone" /> Call</a><a href={waLink(messages.appointment)} target="_blank" rel="noreferrer"><strong>↗</strong> WhatsApp</a></div>
  </div>;
}

export default App;
