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

function Index() {
  return (
    <section className="container entrada">
      <div className="entrada-intro reveal">
        <h1 className="display">AURUM</h1>
        <p className="lead">O raro, escolhido com discrição.</p>
      </div>
      <div className="divisoes">
        <Link to="/motors" className="divisao reveal">
          <img src="/images/car-1.jpg" alt="Coupé escuro em estúdio com luz dourada" width={1600} height={1000} />
          <span className="divisao-texto">
            <span className="eyebrow">Divisão</span>
            <span className="divisao-titulo">AURUM Motors</span>
            <span className="muted">Automóveis de coleção e alta performance</span>
          </span>
        </Link>
        <Link to="/estates" className="divisao reveal">
          <img src="/images/estate-1.jpg" alt="Sala ampla com vista sobre o Tejo ao anoitecer" width={1600} height={1000} />
          <span className="divisao-texto">
            <span className="eyebrow">Divisão</span>
            <span className="divisao-titulo">AURUM Estates</span>
            <span className="muted">Imóveis singulares em Lisboa</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
