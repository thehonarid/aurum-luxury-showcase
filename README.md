# AURUM Luxury Showcase

Cria um site estático (HTML, CSS e JS simples, sem frameworks pesados) para "AURUM", uma marca-mãe de luxo fictícia com duas divisões: AURUM Motors (automóveis) e AURUM Estates (imobiliário). Todo o texto em português de Portugal.

Estilo: minimalista, elegante, discreto. Fundo preto #0B0C0E, superfícies #1E1E1E, texto osso/cinzento quente #AAA298, acento dourado #B58A53. Títulos em Cinzel, texto em Montserrat (Google Fonts). Botões com cantos retos (2 px no máximo). Muito espaço em branco, fotografia grande, animações suaves de entrada ao fazer scroll (CSS nativo; respeitar prefers-reduced-motion).

Páginas:

1. Entrada: logótipo em texto "AURUM", frase curta e dois grandes cartões lado a lado (Motors | Estates).

2. Motors: grelha de 4 viaturas fictícias (marca, modelo, ano, km, combustível, preço) com filtros por marca e preço; ficha de cada viatura com galeria, especificações e botão "Pedir informações" (abre WhatsApp com mensagem pré-preenchida).

3. Estates: grelha de 3 imóveis fictícios (tipologia, área, localização em Lisboa, preço) com filtros por tipologia e preço; ficha com galeria, características e o mesmo botão de contacto. Marcar cada imóvel com "Exemplo".

4. Contactos: morada, telefone fictício, mapa de exemplo, formulário simples.

Requisitos: mobile-first e muito bom no telemóvel; os dados de viaturas e imóveis vêm de um único ficheiro data.json, para ser fácil trocar de cliente; imagens de placeholder neutras (sem logos de marcas reais nem matrículas); rodapé com aviso de privacidade (RGPD) e livro de reclamações; boa acessibilidade (contraste, alt nas imagens, navegação por teclado).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9bb7ee1e-f919-5d19-bfec-ed3ec6e3d478).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
