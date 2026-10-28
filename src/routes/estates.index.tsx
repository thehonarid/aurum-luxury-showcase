import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { imoveis, formatPreco } from "@/lib/catalog";

export const Route = createFileRoute("/estates/")({
  head: () => ({
    meta: [
      { title: "AURUM Estates — Imóveis em Lisboa" },
      { name: "description", content: "Imóveis singulares em Lisboa pela AURUM Estates." },
      { property: "og:title", content: "AURUM Estates — Imóveis em Lisboa" },
      { property: "og:description", content: "Imóveis singulares em Lisboa." },
    ],
  }),
  component: Estates,
});

const precos = [
  { v: "", l: "Qualquer preço" },
  { v: "3000000", l: "Até 3 000 000 €" },
  { v: "4000000", l: "Até 4 000 000 €" },
  { v: "5000000", l: "Até 5 000 000 €" },
];

function Estates() {
  const [tip, setTip] = useState("");
  const [max, setMax] = useState("");
  const tipologias = [...new Set(imoveis.map((i) => i.tipologia))].sort();
  const lista = useMemo(
    () => imoveis.filter((i) => (!tip || i.tipologia === tip) && (!max || i.preco <= Number(max))),
    [tip, max],
  );

  return (
    <section className="container page">
      <header className="page-head reveal">
        <p className="eyebrow">AURUM Estates</p>
        <h1 className="h1">Imóveis</h1>
      </header>
      <form className="filtros" aria-label="Filtrar imóveis" onSubmit={(e) => e.preventDefault()}>
        <label className="field">
          <span>Tipologia</span>
          <select value={tip} onChange={(e) => setTip(e.target.value)}>
            <option value="">Todas</option>
            {tipologias.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Preço</span>
          <select value={max} onChange={(e) => setMax(e.target.value)}>
            {precos.map((p) => <option key={p.v} value={p.v}>{p.l}</option>)}
          </select>
        </label>
      </form>
      <p className="muted small" aria-live="polite">{lista.length} {lista.length === 1 ? "imóvel" : "imóveis"}</p>
      <ul className="grid">
        {lista.map((i) => (
          <li key={i.id} className="reveal">
            <Link to="/estates/$id" params={{ id: i.id }} className="card">
              <img src={i.imagens[0]!.src} alt={i.imagens[0]!.alt} width={1600} height={1000} loading="lazy" />
              <div className="card-body">
                <span className="badge">Exemplo</span>
                <p className="eyebrow">{i.tipologia} · {i.area} m²</p>
                <h2 className="card-title">{i.titulo}</h2>
                <p className="muted small">{i.localizacao}</p>
                <p className="price">{formatPreco(i.preco)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {lista.length === 0 && <p className="muted">Nenhum imóvel corresponde aos filtros.</p>}
    </section>
  );
}
