import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURUM — Motors & Estates" },
      { name: "description", content: "AURUM: automóveis e imobiliário de exceção em Lisboa." },
      { property: "og:title", content: "AURUM — Motors & Estates" },
      { property: "og:description", content: "Automóveis e imobiliário de exceção em Lisboa." },
    ],
  }),
  component: Index,
});

const divisoes = [
  { to: "/motors", n: "01", t: "Motors", d: "Automóveis de coleção e alta performance, selecionados um a um.", img: "/images/car-1.jpg", alt: "Coupé escuro em estúdio com luz dourada" },
  { to: "/estates", n: "02", t: "Estates", d: "Imóveis singulares em Lisboa, apresentados com total discrição.", img: "/images/estate-1.jpg", alt: "Sala ampla com vista sobre o Tejo ao anoitecer" },
] as const;

function Index() {
  return (
    <>
      <section className="hero2">
        <div className="container hero2-grid">
          <p className="eyebrow hero2-ano">Lisboa · Desde 2026</p>
          <h1 className="hero2-title">AURUM</h1>
          <div className="hero2-foot">
            <p className="hero2-lead">O raro, escolhido com discrição.</p>
            <a href="#divisoes" className="hero2-scroll">Descobrir ↓</a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>Motors ◆ Estates ◆ Coleção ◆ Discrição ◆ Lisboa ◆ Motors ◆ Estates ◆ Coleção ◆ Discrição ◆ Lisboa ◆ </span>
          ))}
        </div>
      </div>

      <section id="divisoes" className="container zig">
        {divisoes.map((d, i) => (
          <Link key={d.to} to={d.to} className={i % 2 ? "zig-row inv" : "zig-row"}>
            <div className="zig-img reveal">
              <img src={d.img} alt={d.alt} width={1600} height={1000} />
            </div>
            <div className="zig-txt reveal">
              <span className="zig-n">{d.n}</span>
              <span className="eyebrow">AURUM</span>
              <span className="zig-t">{d.t}</span>
              <span className="muted">{d.d}</span>
              <span className="zig-cta">Explorar coleção <span className="arrow">→</span></span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
