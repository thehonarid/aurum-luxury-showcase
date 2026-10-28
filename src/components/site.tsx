import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { empresa, type Imagem } from "@/lib/catalog";

const nav = [
  { to: "/motors", label: "Motors" },
  { to: "/estates", label: "Estates" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#conteudo" className="skip-link">Saltar para o conteúdo</a>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="AURUM — página de entrada">AURUM</Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
        <nav id="menu" aria-label="Principal" className={open ? "nav open" : "nav"}>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link" activeProps={{ "aria-current": "page" }} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="logo">AURUM</p>
          <p className="muted small">{empresa.morada}</p>
          <p className="muted small">{empresa.telefone} · {empresa.email}</p>
        </div>
        <div className="small">
          <h2 className="eyebrow">Privacidade</h2>
          <p className="muted">
            Os dados pessoais enviados através deste site são tratados apenas para responder ao seu pedido, nos termos do
            Regulamento Geral sobre a Proteção de Dados (RGPD). Pode pedir o acesso, retificação ou eliminação dos seus dados a
            qualquer momento através de {empresa.email}. Este site não utiliza cookies de rastreio.
          </p>
        </div>
        <div className="small">
          <h2 className="eyebrow">Legal</h2>
          <a className="footer-link" href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">
            Livro de Reclamações Eletrónico
          </a>
          <p className="muted">Site de demonstração. Marcas, viaturas e imóveis fictícios.</p>
        </div>
      </div>
      <p className="container muted small copyright">© {new Date().getFullYear()} AURUM. Todos os direitos reservados.</p>
    </footer>
  );
}

export function Gallery({ imagens }: { imagens: Imagem[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="gallery">
      <img src={imagens[i]!.src} alt={imagens[i]!.alt} width={1600} height={1000} className="gallery-main" />
      {imagens.length > 1 && (
        <div className="gallery-thumbs" role="group" aria-label="Escolher imagem">
          {imagens.map((img, idx) => (
            <button
              key={idx}
              className="thumb"
              aria-pressed={idx === i}
              aria-label={`Ver imagem ${idx + 1}: ${img.alt}`}
              onClick={() => setI(idx)}
            >
              <img src={img.src} alt="" width={160} height={100} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function SpecList({ items }: { items: [string, string | number][] }) {
  return (
    <dl className="specs">
      {items.map(([k, v]) => (
        <div key={k} className="spec">
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function WhatsAppButton({ href }: { href: string }) {
  return (
    <a className="btn btn-gold" href={href} target="_blank" rel="noopener noreferrer">
      Pedir informações
      <span className="sr-only"> (abre o WhatsApp numa nova janela)</span>
    </a>
  );
}
