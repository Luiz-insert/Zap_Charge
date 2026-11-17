import { useState } from 'react'
import { wallbox, portable, connectors, perks } from './data'
import { Logo, Arrow, PerkIcon, ConnectorIcon, Wallbox, PortableIcon, ThemeIcon, Social } from './components/Icons'

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('zc-theme', next)
    } catch (e) {
      /* storage blocked: the theme still switches for this visit */
    }
    setTheme(next)
  }
  return [theme, toggle]
}

const all = [...wallbox, ...portable]

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [conn, setConn] = useState(null)
  const keep = (p) => !conn || p.conn === conn
  const wallboxShown = wallbox.filter(keep)
  const portableShown = portable.filter(keep)

  return (
    <>
      <header className="site-header">
        <nav className="container nav">
          <a href="#topo" className="brand">
            <Logo />
            <span>ZapCharge</span>
          </a>
          <ul className="nav-links">
            <li><a href="#conectores">Conectores</a></li>
            <li><a href="#produtos">Carregadores</a></li>
            <li><a href="#garantia">Garantia</a></li>
            <li><a href="#contato">Suporte</a></li>
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              <ThemeIcon theme={theme} />
            </button>
            <a href="#contato" className="btn btn-outline btn-sm">Contate-nos</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="topo" className="container hero">
          <div className="hero-copy">
            <h1>
              Carregue em casa.
              <br />
              <span className="hl">Saia a 100%.</span>
            </h1>
            <p className="lead">
              Carregadores de parede e portáteis para GB/T, Mennekes e SuperCharger. Recarga rápida, conveniência
              inteligente e sustentabilidade em um único dispositivo.
            </p>
            <div className="actions">
              <a href="#produtos" className="btn btn-accent">Ver carregadores <Arrow /></a>
              <a href="#conectores" className="btn btn-ghost">Qual é o meu conector?</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-top">
              <span>EcoCharge Super</span>
              <span className="chip-ink">Wallbox</span>
            </div>
            <Wallbox variant="hero" className="hero-ill" label="Ilustração de um carregador de parede" />
            <div className="hero-stats">
              <div><strong>5 anos</strong><span>de garantia</span></div>
              <div><strong>até 12x</strong><span>no cartão</span></div>
            </div>
          </div>
        </section>

        <section className="perks">
          <ul className="container perks-list">
            {perks.map((p) => (
              <li key={p.label}>
                <PerkIcon name={p.icon} />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="conectores" className="container section">
          <div className="section-head">
            <div>
              <span className="eyebrow">01 — Conectores</span>
              <h2>Escolha pelo plugue do seu carro</h2>
            </div>
            <p className="muted">Toque em um conector para filtrar os carregadores compatíveis logo abaixo.</p>
          </div>
          <div className="connector-grid">
            {connectors.map((c) => {
              const on = conn === c.id
              const n = all.filter((p) => p.conn === c.id).length
              return (
                <button
                  key={c.id}
                  type="button"
                  className={'connector' + (on ? ' is-on' : '')}
                  aria-pressed={on}
                  onClick={() => setConn(on ? null : c.id)}
                >
                  <span className="connector-top">
                    <ConnectorIcon name={c.icon} />
                    <span className="mono">{n} {n === 1 ? 'produto' : 'produtos'}</span>
                  </span>
                  <span className="connector-name">{c.id}</span>
                  <span className="connector-desc">{c.desc}</span>
                </button>
              )
            })}
          </div>
        </section>

        <section id="produtos" className="container section">
          <div className="section-head">
            <div>
              <span className="eyebrow">02 — Wallbox</span>
              <h2>
                Rápido e sustentável,
                <br />
                direto da sua casa
              </h2>
            </div>
            <div className="filter-state">
              <span>Filtro: <strong>{conn || 'Todos os conectores'}</strong></span>
              {conn && (
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConn(null)}>Limpar</button>
              )}
            </div>
          </div>
          <div className="wallbox-grid">
            {wallboxShown.map((p) => (
              <article key={p.name} className="wallbox-card">
                <div className="wallbox-media">
                  <span className="tag">{p.conn}</span>
                  <span className="badge">{p.off}</span>
                  <Wallbox className="wallbox-ill" />
                </div>
                <div className="wallbox-info">
                  <h3>{p.name}</h3>
                  <div className="prices">
                    <span className="price">{p.price}</span>
                    <s>{p.was}</s>
                  </div>
                </div>
                <a href="#produtos" className="btn btn-solid">Comprar</a>
              </article>
            ))}
          </div>
          {wallboxShown.length === 0 && <p className="faint">Nenhum wallbox para este conector.</p>}
        </section>

        <section className="container section section-tight">
          <div>
            <span className="eyebrow">03 — Portáteis</span>
            <h2 className="h2-sm">Portátil, prático e eficiente</h2>
          </div>
          <div className="portable-grid">
            {portableShown.map((p) => (
              <article key={p.name} className="portable-card">
                <div className="portable-top">
                  <PortableIcon />
                  <span className="badge">{p.off}</span>
                </div>
                <div>
                  <span className="mono faint">{p.conn}</span>
                  <h3>{p.name}</h3>
                </div>
                <div className="prices">
                  <span className="price-plain">{p.price}</span>
                  <s>{p.was}</s>
                </div>
                <a href="#produtos" className="btn btn-ghost btn-block">Comprar</a>
              </article>
            ))}
          </div>
          {portableShown.length === 0 && <p className="faint">Nenhum portátil para este conector.</p>}
        </section>

        <section className="promo-wrap">
          <div className="container promo">
            <div>
              <span className="mono">Em destaque</span>
              <h2>até 80% OFF</h2>
              <p>Ofertas selecionadas em carregadores de parede e portáteis, por tempo limitado.</p>
            </div>
            <a href="#produtos" className="btn btn-ink">Ver ofertas <Arrow /></a>
          </div>
        </section>

        <section id="garantia" className="container warranty">
          <div className="warranty-num">
            <span className="big-five">5</span>
            <span className="warranty-label">anos de<br />garantia</span>
          </div>
          <div className="warranty-copy">
            <span className="eyebrow">04 — Garantia</span>
            <h2 className="h2-sm">Faça parte da revolução elétrica, sem preocupação.</h2>
            <p className="muted">
              Todos os carregadores ZapCharge saem com 5 anos de garantia. Quer ir além? Estenda a cobertura no
              momento da compra.
            </p>
            <a href="#contato" className="btn btn-outline">Garantia estendida</a>
          </div>
        </section>
      </main>

      <footer id="contato" className="site-footer">
        <div className="container footer">
          <div className="footer-brand">
            <a href="#topo" className="brand brand-sm">
              <Logo size={32} />
              <span>ZapCharge</span>
            </a>
            <p className="faint">
              CNPJ: 00.000.000/0000-00 · Belo Horizonte – MG
              <br />© {new Date().getFullYear()} ZapCharge. Todos os direitos reservados.
            </p>
          </div>
          <div className="socials">
            <a href="#contato" aria-label="Instagram"><Social name="instagram" /></a>
            <a href="#contato" aria-label="WhatsApp"><Social name="whatsapp" /></a>
            <a href="#contato" aria-label="E-mail"><Social name="email" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
