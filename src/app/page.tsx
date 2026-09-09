const destinations = [
  ['Kerala', 'Backwaters, beaches and slow travel'],
  ['Rajasthan', 'Forts, deserts and royal heritage'],
  ['Tamil Nadu', 'Temples, culture and coastal escapes'],
  ['Himachal Pradesh', 'Mountains, valleys and adventure'],
]

const features = [
  ['AI Trip Planner', 'Create practical day-by-day itineraries around your budget, interests and travel dates.'],
  ['Curated Journeys', 'Discover ready-to-buy travel plans built around India’s most inspiring destinations.'],
  ['Travel Marketplace', 'Prepare the platform for hotels, activities, transport and partner offers.'],
  ['Partner Analytics', 'Track referrals, bookings and commissions with a partner-ready architecture.'],
]

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <div className="brand">ANAAYA<span>SAAS</span></div>
        <div className="navlinks"><a href="#destinations">Destinations</a><a href="#features">Features</a><a href="#partners">Partners</a></div>
      </nav>

      <section className="hero container">
        <div>
          <div className="eyebrow">India travel, reimagined</div>
          <h1>Build your journey across India.</h1>
          <p>One platform for AI-assisted trip planning, curated itineraries, destination discovery and a future-ready tourism marketplace.</p>
          <div className="actions"><a className="btn primary" href="#destinations">Explore India</a><a className="btn" href="#features">See how it works</a></div>
        </div>
        <aside className="panel">
          <h3>Smart Journey Preview</h3>
          <div className="stat"><span>Destination</span><strong>South India</strong></div>
          <div className="stat"><span>Trip style</span><strong>Culture + Nature</strong></div>
          <div className="stat"><span>Planning</span><strong>AI-assisted</strong></div>
          <div className="stat"><span>Marketplace</span><strong>Ready to connect</strong></div>
        </aside>
      </section>

      <section id="features" className="section container">
        <h2>Everything needed for modern travel commerce.</h2>
        <p>Start with discovery and planning, then connect payments, partners and operations as the product grows.</p>
        <div className="grid">{features.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="destinations" className="section container">
        <h2>Start with India’s iconic journeys.</h2>
        <p>Destination catalogue structure ready for rich content, SEO pages and booking integrations.</p>
        <div className="grid">{destinations.map(([name, text]) => <article className="card" key={name}><div className="eyebrow">India</div><h3>{name}</h3><p>{text}</p><a href="#">View journey →</a></article>)}</div>
      </section>

      <section id="partners" className="section container">
        <div className="panel"><h2>Built for travellers and tourism partners.</h2><p>Connect hotels, activity operators, transport providers and affiliate networks while keeping customer, order and commission data structured for scale.</p><a className="btn primary" href="mailto:partners@example.com">Become a partner</a></div>
      </section>

      <footer className="footer"><div className="container">© 2026 Anaayasaas · Indian Tourism SaaS</div></footer>
    </main>
  )
}
