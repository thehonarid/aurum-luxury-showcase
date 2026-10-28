import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { imoveis, formatPreco, whatsappLink } from "@/lib/catalog";
import { Gallery, SpecList, WhatsAppButton } from "@/components/site";

export const Route = createFileRoute("/estates/$id")({
  loader: ({ params }) => {
    const i = imoveis.find((x) => x.id === params.id);
    if (!i) throw notFound();
    return i;
  },
  head: ({ loaderData: i }) => ({
    meta: i
      ? [
          { title: `${i.titulo}, ${i.tipologia} — AURUM Estates` },
          { name: "description", content: i.descricao },
          { property: "og:title", content: `${i.titulo} — AURUM Estates` },
          { property: "og:description", content: i.descricao },
        ]
      : [{ title: "Imóvel indisponível — AURUM" }, { name: "robots", content: "noindex" }],
  }),
  component: Ficha,
});

function Ficha() {
  const i = Route.useLoaderData();
  const msg = `Olá, gostaria de receber mais informações sobre o imóvel "${i.titulo}" (${i.tipologia}, ${i.localizacao}), anunciado por ${formatPreco(i.preco)}.`;
  return (
    <article className="container page">
      <Link to="/estates" className="back">← Todos os imóveis</Link>
      <div className="ficha">
        <div className="rel">
          <span className="badge">Exemplo</span>
          <Gallery imagens={i.imagens} />
        </div>
        <div className="ficha-info reveal">
          <p className="eyebrow">{i.localizacao}</p>
          <h1 className="h1">{i.titulo}</h1>
          <p className="price lg">{formatPreco(i.preco)}</p>
          <p className="muted">{i.descricao}</p>
          <SpecList
            items={[
              ["Tipologia", i.tipologia],
              ["Área útil", `${i.area} m²`],
              ["Quartos", i.quartos],
              ["Casas de banho", i.casasBanho],
              ["Estacionamento", i.estacionamento],
              ["Certificado energético", i.certificado],
            ]}
          />
          <ul className="tags" aria-label="Características">
            {i.caracteristicas.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <WhatsAppButton href={whatsappLink(msg)} />
        </div>
      </div>
    </article>
  );
}
