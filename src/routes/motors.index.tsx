import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { viaturas, formatPreco, formatNum } from "@/lib/catalog";

export const Route = createFileRoute("/motors/")({
  head: () => ({
    meta: [
      { title: "AURUM Motors — Viaturas" },
      { name: "description", content: "Seleção de automóveis de exceção da AURUM Motors." },
      { property: "og:title", content: "AURUM Motors — Viaturas" },
      { property: "og:description", content: "Seleção de automóveis de exceção." },
    ],
  }),
  component: Motors,
});

const precos = [
  { v: "", l: "Qualquer preço" },
  { v: "150000", l: "Até 150 000 €" },
  { v: "250000", l: "Até 250 000 €" },
  { v: "400000", l: "Até 400 000 €" },
];

function Motors() {
  const [marca, setMarca] = useState("");
  const [max, setMax] = useState("");
  const marcas = [...new Set(viaturas.map((v) => v.marca))].sort();
  const lista = useMemo(
    () => viaturas.filter((v) => (!marca || v.marca === marca) && (!max || v.preco <= Number(max))),
    [marca, max],
  );

  return (
    <section className="container page">
      <header className="page-head reveal">
        <p className="eyebrow">AURUM Motors</p>
        <h1 className="h1">Viaturas</h1>
      </header>
      <form className="filtros" aria-label="Filtrar viaturas" onSubmit={(e) => e.preventDefault()}>
        <label className="field">
          <span>Marca</span>
          <select value={marca} onChange={(e) => setMarca(e.target.value)}>
            <option value="">Todas</option>
            {marcas.map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Preço</span>
          <select value={max} onChange={(e) => setMax(e.target.value)}>
            {precos.map((p) => <option key={p.v} value={p.v}>{p.l}</option>)}
          </select>
        </label>
      </form>
      <p className="muted small" aria-live="polite">{lista.length} {lista.length === 1 ? "viatura" : "viaturas"}</p>
      <ul className="grid">
        {lista.map((v) => (
          <li key={v.id} className="reveal">
            <Link to="/motors/$id" params={{ id: v.id }} className="card">
              <img src={v.imagens[0].src} alt={v.imagens[0].alt} width={1600} height={1000} loading="lazy" />
              <div className="card-body">
                <p className="eyebrow">{v.marca}</p>
                <h2 className="card-title">{v.modelo}</h2>
                <p className="muted small">{v.ano} · {formatNum(v.km)} km · {v.combustivel}</p>
                <p className="price">{formatPreco(v.preco)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {lista.length === 0 && <p className="muted">Nenhuma viatura corresponde aos filtros.</p>}
    </section>
  );
}
