import data from "@/data/data.json";

export type Imagem = { src: string; alt: string };
export type Viatura = (typeof data.viaturas)[number];
export type Imovel = (typeof data.imoveis)[number];

export const empresa = data.empresa;
export const viaturas: Viatura[] = data.viaturas;
export const imoveis: Imovel[] = data.imoveis;

const eur = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("pt-PT");

export const formatPreco = (v: number) => eur.format(v);
export const formatNum = (v: number) => num.format(v);

export function whatsappLink(mensagem: string) {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
