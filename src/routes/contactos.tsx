import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { empresa } from "@/lib/catalog";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — AURUM" },
      { name: "description", content: "Morada, telefone e formulário de contacto da AURUM em Lisboa." },
      { property: "og:title", content: "Contactos — AURUM" },
      { property: "og:description", content: "Fale connosco em Lisboa." },
    ],
  }),
  component: Contactos,
});

function Contactos() {
  const [enviado, setEnviado] = useState(false);
  return (
    <section className="container page">
      <header className="page-head reveal">
        <p className="eyebrow">Contactos</p>
        <h1 className="h1">Fale connosco</h1>
      </header>
      <div className="contactos">
        <div className="reveal">
          <address className="contact-block">
            <p className="eyebrow">Morada</p>
            <p>{empresa.morada}</p>
            <p className="eyebrow">Telefone</p>
            <p><a href={`tel:${empresa.telefone.replace(/\s/g, "")}`}>{empresa.telefone}</a></p>
            <p className="eyebrow">Email</p>
            <p><a href={`mailto:${empresa.email}`}>{empresa.email}</a></p>
            <p className="eyebrow">Horário</p>
            <p className="muted">{empresa.horario}</p>
          </address>
          <iframe
            className="mapa"
            title="Mapa de exemplo: Avenida da Liberdade, Lisboa"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-9.1520%2C38.7155%2C-9.1390%2C38.7235&layer=mapnik"
            loading="lazy"
          />
        </div>
        <form
          className="form reveal"
          onSubmit={(e) => {
            e.preventDefault();
            setEnviado(true);
          }}
        >
          <label className="field"><span>Nome</span><input name="nome" required autoComplete="name" /></label>
          <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
          <label className="field"><span>Telefone (opcional)</span><input name="tel" type="tel" autoComplete="tel" /></label>
          <label className="field">
            <span>Assunto</span>
            <select name="assunto"><option>AURUM Motors</option><option>AURUM Estates</option><option>Outro</option></select>
          </label>
          <label className="field"><span>Mensagem</span><textarea name="mensagem" rows={5} required /></label>
          <label className="check">
            <input type="checkbox" required />
            <span className="small muted">Aceito que os meus dados sejam usados apenas para responder a este pedido, conforme o aviso de privacidade (RGPD).</span>
          </label>
          <button className="btn btn-gold" type="submit">Enviar</button>
          <p role="status" className="small">{enviado ? "Obrigado. A sua mensagem foi registada (demonstração — nada foi enviado)." : ""}</p>
        </form>
      </div>
    </section>
  );
}
