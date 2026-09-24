# Melodia — Landing page

Landing page responsiva para o **Melodia**, um aplicativo fictício de streaming e descoberta musical. O projeto foi desenvolvido para o Check-point 05 de Front-end Design.

## Links

- **Site publicado:** https://jmfeliciano2.github.io/melodia-landing-page/
- **Repositório:** https://github.com/Jmfeliciano2/melodia-landing-page

## Sobre o projeto

A página apresenta o Melodia a pessoas que gostam de música e querem descobrir artistas novos. A identidade visual combina fundo escuro, verde-lima, tipografia expressiva e imagens ligadas à experiência musical.

### Recursos apresentados

- **Som em cada detalhe:** destaque para uma experiência sonora envolvente.
- **Playlists com a sua cara:** seleções organizadas para diferentes momentos.
- **Novos artistas:** espaço para descobrir músicas além das já conhecidas.
- **Depoimentos:** navegação entre três relatos de ouvintes.
- **Formulário de novidades:** demonstração de inscrição por e-mail.

Os cartões da seção “Recursos” são clicáveis e levam às explicações completas em `recursos.html`.

## Tecnologias

- HTML5 semântico
- CSS3, Flexbox, Grid e media queries
- Tailwind CSS carregado via CDN
- Lucide para ícones
- Google Fonts: DM Sans e Space Grotesk
- JavaScript para menu móvel, navegação dos depoimentos e interação do player demonstrativo

## Estrutura de arquivos

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Landing page principal |
| `style.css` | Estilos, identidade visual e layouts responsivos |
| `script.js` | Interações da página principal |
| `recursos.html` | Detalhes dos recursos; destino dos cartões clicáveis |
| `privacidade.html` | Aviso sobre privacidade e limites da demonstração |

## Como executar

Abra `index.html` no navegador. A página usa fontes, ícones, imagens e Tailwind por CDN, então esses elementos dependem de conexão com a internet.

## Publicar no GitHub Pages

1. Envie os arquivos deste projeto para a raiz do repositório GitHub.
2. Abra **Settings → Pages** no repositório.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main`, a pasta `/ (root)` e salve.
5. Aguarde a publicação e use o endereço mostrado nessa tela.

## Interações demonstrativas e limitações

- O CTA “Ouvir agora” leva à seção de recursos.
- O player da capa é apenas uma demonstração visual: não reproduz áudio.
- O formulário valida o campo no navegador e exibe uma mensagem, mas não envia nem armazena e-mails. Para uma campanha real, é necessário conectá-lo a um serviço de mailing e definir o tratamento dos dados.
- Os depoimentos e nomes são conteúdo fictício de demonstração.

## Integrantes

-Pedro Viana 572971
-Lucas Kobayashi 569905
-Jhonathan Dourado 569568
-João Matheus 569850

## Roteiro para apresentação técnica

1. Apresente o objetivo da landing page e o público-alvo.
2. Mostre a estrutura semântica no `index.html`: navegação, hero, recursos, depoimentos, formulário e rodapé.
3. Explique no `style.css` como Grid, Flexbox e media queries adaptam a página a diferentes telas.
4. Demonstre no `script.js` o menu móvel e a troca de depoimentos; explique também os limites do player e do formulário demonstrativo.
5. Clique nos cartões de recursos para abrir `recursos.html` e finalize mostrando a estrutura de arquivos e a publicação pelo GitHub Pages.

