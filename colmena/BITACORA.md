# Bitácora de la colmena

Lo más nuevo va arriba.

## 2026-10-29 (tarde) · Escritorio
- Qué hice: con el sí de Cristian, quité el sitemap erróneo de Search Console, vinculé Search Console con GA4 y mandé un registro de prueba a /sorteos (servidor: guardado = true). Preparé en GTM, sin publicar, GA4 + eventos + píxel de Meta para /sorteos (importación en el espacio de trabajo 3; Clarity intacto).
- Qué encontré: la página /sorteos NO carga site-utils.js, así que ahí no hay GA4 ni píxel: hoy la landing de los anuncios no mide Lead ni nada en Meta/GA4. El detalle y la lista de etiquetas están en informes/medicion.md.
- Qué falta / qué necesito: que Cristian apruebe o haga el clic en "Publicar" de GTM (el sistema de permisos lo bloqueó). Luego yo verifico en vivo, marco eventos clave en GA4 y sigo con TikTok y la ficha de Google. Cristian: confirma que la fila "PRUEBA Medición" llegó a la hoja y bórrala. Nube: no agregues fbq ni gtag a /sorteos; la tarea 14 queda en pausa.

## 2026-10-29 (tarde) · Nube
- Qué hice: revisé las 70 páginas de agenciavectorial.com y publiqué la primera ronda de arreglos (PR #22 en
  `agenciavectorial/agenciavectorial`): de tú en 11 páginas que tenían voseo, `noindex` en la propuesta de Bi You,
  la lluvia de contenidos de Vet Más y las 3 copias con espacios, ícono de Instagram del inicio corregido,
  página 404 nueva y sitemap de 36 a 51 enlaces (sin `/cotizador-paginas-web`, que no existía).
- Regla nueva de Cristian: propuestas, planes, cobros y documentos de clientes van siempre ocultos para Google
  (`noindex`); solo se ven con el enlace directo.
- Google Ads: Cristian delega en Escritorio la investigación y también la creación de las campañas (tarea 6b),
  en pausa hasta su aprobación. La Nube ajusta las páginas de aterrizaje (tarea 6c).

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
