import { createFileRoute, Link } from "@tanstack/react-router";
import { viaturas, imoveis, formatPreco, formatNum } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURUM — Automóveis e imóveis de exceção em Lisboa" },
      { name: "description", content: "AURUM reúne duas divisões: Motors, automóveis de coleção e alta performance, e Estates, imóveis singulares em Lisboa." },
      { property: "og:title", content: "AURUM — Motors & Estates" },
      { property: "og:description", content: "Automóveis de coleção e imóveis singulares em Lisboa, com acompanhamento pessoal." },
    ],
  }),
  component: Index,
});

const numeros = [
  { v: viaturas.length + imoveis.length, l: "Peças em carteira" },
  { v: 2, l: "Divisões especializadas" },
  { v: "1:1", l: "Um consultor por cliente" },
  { v: "48 h", l: "Resposta a cada pedido" },
];

const passos = [
  { n: "01", t: "Conversa inicial", d: "Ouvimos o que procura: utilização, orçamento e prazos. Sem compromisso." },
  { n: "02", t: "Seleção criteriosa", d: "Apresentamos apenas opções verificadas, com histórico, documentação e avaliação independente." },
  { n: "03", t: "Visita privada", d: "Agendamos o test drive ou a visita ao imóvel à sua medida, com total reserva." },
  { n: "04", t: "Entrega sem fricção", d: "Tratamos da negociação, financiamento e burocracia até à entrega das chaves." },
];

function Index() {
  const destaques = [
    ...viaturas.slice(0, 2).map((v) => ({ key: v.id, to: "/motors/$id" as const, id: v.id, img: v.imagens[0]!, tag: "Motors", t: `${v.marca} ${v.modelo}`, s: `${v.ano} · ${formatNum(v.km)} km`, p: v.preco })),
    ...imoveis.slice(0, 2).map((i) => ({ key: i.id, to: "/estates/$id" as const, id: i.id, img: i.imagens[0]!, tag: "Estates", t: i.titulo, s: `${i.tipologia} · ${i.area} m²`, p: i.preco })),
  ];

  return (
    <>
      <section className="h3">
        <div className="container h3-grid">
          <div className="h3-txt">
            <p className="eyebrow anim-fade" style={{ animationDelay: ".1s" }}>Motors & Estates · Lisboa</p>
            <h1 className="h3-title">
              <span className="line"><span style={{ animationDelay: ".2s" }}>Viver bem</span></span>
              <span className="line"><span style={{ animationDelay: ".35s" }}>é uma questão</span></span>
              <span className="line"><span className="gold" style={{ animationDelay: ".5s" }}>de escolha.</span></span>
            </h1>
            <p className="h3-lead anim-fade" style={{ animationDelay: ".8s" }}>
              Selecionamos automóveis e imóveis que poucos têm, e acompanhamos cada cliente do primeiro contacto à entrega das chaves.
            </p>
            <div className="h3-ctas anim-fade" style={{ animationDelay: "1s" }}>
              <Link to="/motors" className="btn btn-gold">Ver viaturas</Link>
              <Link to="/estates" className="btn btn-line">Ver imóveis</Link>
            </div>
          </div>
          <div className="h3-media">
            <img className="h3-a" src="/images/car-1.jpg" alt="Coupé escuro em estúdio com luz dourada" width={1600} height={1000} />
            <img className="h3-b" src="/images/estate-1.jpg" alt="Sala com vista sobre o Tejo ao anoitecer" width={1600} height={1000} />
          </div>
        </div>
      </section>

      <section className="container stats">
        {numeros.map((n, i) => (
          <div key={n.l} className="stat reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="stat-v">{n.v}</span>
            <span className="stat-l">{n.l}</span>
          </div>
        ))}
      </section>

      <section className="container zig">
        <header className="sec-head reveal">
          <p className="eyebrow">As divisões</p>
          <h2 className="h2">Duas casas, o mesmo critério.</h2>
        </header>
        <Link to="/motors" className="zig-row">
          <div className="zig-img reveal-img"><img src="/images/car-2.jpg" alt="Desportivo em estúdio escuro" width={1600} height={1000} /></div>
          <div className="zig-txt reveal">
            <span className="zig-n">01 — AURUM Motors</span>
            <span className="zig-t">Automóveis de coleção</span>
            <span className="muted">Desportivos, grand tourers e clássicos com histórico completo. Cada viatura é inspecionada, documentada e entregue pronta a conduzir.</span>
            <ul className="zig-list"><li>Inspeção técnica independente</li><li>Garantia e histórico de manutenção</li><li>Retoma e financiamento à medida</li></ul>
            <span className="zig-cta">Explorar viaturas <span className="arrow">→</span></span>
          </div>
        </Link>
        <Link to="/estates" className="zig-row inv">
          <div className="zig-img reveal-img"><img src="/images/estate-3.jpg" alt="Interior luminoso de apartamento" width={1600} height={1000} /></div>
          <div className="zig-txt reveal">
            <span className="zig-n">02 — AURUM Estates</span>
            <span className="zig-t">Imóveis singulares</span>
            <span className="muted">Apartamentos e moradias nas zonas mais procuradas de Lisboa, muitos apresentados apenas fora do mercado.</span>
            <ul className="zig-list"><li>Imóveis off-market</li><li>Avaliação e due diligence</li><li>Apoio jurídico e fiscal</li></ul>
            <span className="zig-cta">Explorar imóveis <span className="arrow">→</span></span>
          </div>
        </Link>
      </section>

      <section className="container destaques">
        <header className="sec-head reveal">
          <p className="eyebrow">Em destaque</p>
          <h2 className="h2">Disponível agora.</h2>
        </header>
        <ul className="grid g4">
          {destaques.map((d) => (
            <li key={d.key} className="reveal">
              <Link to={d.to} params={{ id: d.id }} className="card">
                <img src={d.img.src} alt={d.img.alt} width={1600} height={1000} loading="lazy" />
                <div className="card-body">
                  <p className="eyebrow">{d.tag}</p>
                  <h3 className="card-title">{d.t}</h3>
                  <p className="muted small">{d.s}</p>
                  <p className="price">{formatPreco(d.p)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="metodo">
        <div className="container">
          <header className="sec-head reveal">
            <p className="eyebrow">Como trabalhamos</p>
            <h2 className="h2">Um processo simples, do início ao fim.</h2>
          </header>
          <ol className="passos">
            {passos.map((p) => (
              <li key={p.n} className="passo reveal">
                <span className="passo-n">{p.n}</span>
                <h3 className="passo-t">{p.t}</h3>
                <p className="muted small">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container cta reveal">
        <h2 className="h2">Procura algo que não está no site?</h2>
        <p className="muted">Grande parte da nossa carteira é apresentada apenas em privado. Diga-nos o que procura.</p>
        <Link to="/contactos" className="btn btn-gold">Falar com um consultor</Link>
      </section>
    </>
  );
}
