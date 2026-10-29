# Bitácora de la colmena

Lo más nuevo va arriba.

## 2026-10-29 · Escritorio
- Qué hice: leí la colmena y revisé GTM, GA4, píxel de Meta, Search Console y Drive con las sesiones de Cristian. Informe completo en colmena/informes/medicion.md. No cambié nada en ninguna plataforma.
- Qué encontré: CONTEXTO.md estaba desactualizado. El sitio ya carga GA4 (G-MXREGM2TXH, propiedad 544070872) y el píxel de Meta (1447406940536370) directo desde site-utils.js. GTM-MHWB25JH sí tiene solo Clarity. El píxel recibe PageView, CTAClick y Contactar, pero ningún Lead ni SorteoInstagram. En GA4 hay 0 eventos clave: generate_lead e ig_click se empujan al dataLayer y sin etiquetas en GTM no llegan. Search Console está verificado y el sitemap está correcto (36 páginas), con un envío sobrante con error. Google Sheets de los sorteos: sin confirmar.
- Qué falta / qué necesito: el sí de Cristian para (1) hacer que los eventos lleguen a GA4 sin duplicar (la Nube agrega gtag('event', ...) en /sorteos y yo marco los eventos clave), (2) vincular Search Console con GA4, (3) quitar el sitemap erróneo, (4) un registro de prueba en el formulario para confirmar Sheets y Lead de Meta. Aviso: el almacenamiento de Google está al 95 %. Siguen los bloques B a E.

## 2026-10-29 · Nube
- Qué hice: conecté los 3 posts de los sorteos a la landing (cada botón abre el post exacto). Creé esta carpeta.
- Qué encontré: GTM `GTM-MHWB25JH` solo tiene Microsoft Clarity; no hay GA4 ni píxel de Meta, así que la
  landing no está midiendo registros en ningún lado fuera de Clarity.
- Plan de pauta propuesto a Cristian para Meta: campaña de Tráfico (optimizar por visitas a la página de
  destino), destino `sorteos?s=paginas` con UTM, 2 o 3 anuncios (reel Dia4, carrusel L9, historia), Colombia
  25 a 55 años, $20.000 a $30.000 COP al día por 7 días. Con píxel y 30 a 50 registros, pasar a Clientes potenciales.
- Qué falta: ID del píxel, ID de GA4 (si existe) y confirmar Google Sheets.
