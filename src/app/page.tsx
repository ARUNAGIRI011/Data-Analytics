export default function Home() {
  return (
    <main style={{fontFamily:'Arial,sans-serif',padding:'48px',maxWidth:1100,margin:'0 auto'}}>
      <section>
        <p>INDIAN TOURISM SAAS</p>
        <h1>Plan, discover and book better journeys across India.</h1>
        <p>AI-assisted itineraries, curated destinations, paid travel plans and a partner marketplace in one platform.</p>
        <button>Explore India</button>
      </section>
      <section style={{marginTop:48,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
        {['AI Itineraries','Destination Marketplace','Hotels & Activities','Affiliate Tracking'].map(x => <article key={x}><h2>{x}</h2><p>Foundation ready for the full tourism SaaS workflow.</p></article>)}
      </section>
    </main>
  )
}
