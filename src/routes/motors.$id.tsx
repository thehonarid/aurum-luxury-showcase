import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { viaturas, formatPreco, formatNum, whatsappLink } from "@/lib/catalog";
import { Gallery, SpecList, WhatsAppButton } from "@/components/site";

export const Route = createFileRoute("/motors/$id")({
  loader: ({ params }) => {
    const v = viaturas.find((x) => x.id === params.id);
    if (!v) throw notFound();
    return v;
  },
  head: ({ loaderData: v }) => ({
    meta: v
      ? [
          { title: `${v.marca} ${v.modelo} ${v.ano} — AURUM Motors` },
          { name: "description", content: v.descricao },
          { property: "og:title", content: `${v.marca} ${v.modelo} — AURUM Motors` },
          { property: "og:description", content: v.descricao },
        ]
      : [{ title: "Viatura indisponível — AURUM" }, { name: "robots", content: "noindex" }],
  }),
  component: Ficha,
});

function Ficha() {
  const v = Route.useLoaderData();
  const msg = `Olá, gostaria de receber mais informações sobre a viatura ${v.marca} ${v.modelo} (${v.ano}), anunciada por ${formatPreco(v.preco)}.`;
  return (
    <article className="container page">
      <Link to="/motors" className="back">← Todas as viaturas</Link>
      <div className="ficha">
        <Gallery imagens={v.imagens} />
        <div className="ficha-info reveal">
          <p className="eyebrow">{v.marca}</p>
          <h1 className="h1">{v.modelo}</h1>
          <p className="price lg">{formatPreco(v.preco)}</p>
          <p className="muted">{v.descricao}</p>
          <SpecList
            items={[
              ["Ano", v.ano],
              ["Quilómetros", `${formatNum(v.km)} km`],
              ["Combustível", v.combustivel],
              ["Potência", v.potencia],
              ["Caixa", v.caixa],
              ["Cor", v.cor],
              ["Lugares", v.lugares],
            ]}
          />
          <WhatsAppButton href={whatsappLink(msg)} />
        </div>
      </div>
    </article>
  );
}
