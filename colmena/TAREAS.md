# Tareas de la colmena

Estados: **por hacer** · **haciendo** · **hecho** · **bloqueada** (decir por qué).

| # | Tarea | Responsable | Estado | Notas |
|---|---|---|---|---|
| 1 | Auditoría de medición: GTM, GA4, Search Console, píxel de Meta. Informe en `informes/medicion.md`. | Google | hecho | Informe en `informes/medicion.md` (29 oct). GTM solo tiene Clarity; GA4 y píxel están puestos en `site-utils.js`. |
| 2 | Crear o conectar GA4 en GTM, con los eventos de la landing (`generate_lead`, `ig_click`) como conversiones. | Google | haciendo | Hecho en GTM, **sin publicar**: Google tag GA4 + 8 eventos + píxel base para /sorteos (importado en el espacio de trabajo 3). Falta publicar (lo bloqueó el sistema de permisos; Cristian debe aprobar), probar en vivo y marcar eventos clave en GA4. Ver `informes/medicion.md`. |
| 3 | Píxel de Meta: crear o ubicar el ID y escribirlo en `CONTEXTO.md`. | Google | hecho | ID `1447406940536370` (Agencia Vectorial - Pixel). Ya está instalado en el sitio. |
| 4 | Instalar el píxel en la landing de sorteos (y en el sitio). | Nube | hecho (por GTM) | /sorteos no cargaba `site-utils.js` y no tenía píxel. Se resuelve con GTM al publicar. La Nube no debe agregar `fbq` a /sorteos. |
| 5 | Investigación de mercado y palabras clave para Google Ads con $10.000 COP al día. Informe en `informes/google-ads.md`. | Google | por hacer | Ver guía en el prompt. |
| 6 | Propuesta de campaña de Google Ads (estructura, palabras, negativas, anuncios, extensiones). | Google | por hacer | Textos de anuncios: la Nube los revisa si hace falta. |
| 6b | **Crear las campañas de Google Ads** en la cuenta, en pausa, con la propuesta de la tarea 6. Activarlas solo cuando Cristian diga «sí». | Google | por hacer | Cristian lo delegó el 29 oct. Presupuesto $10.000 COP al día. |
| 6c | Ajustar o crear las páginas de aterrizaje de cada grupo de anuncios de Google Ads. | Nube | bloqueada | Espera el informe `informes/google-ads.md`. |
| 7 | Auditoría SEO con Search Console: páginas indexadas, consultas, errores, sitemap. Informe en `informes/seo.md`. | Google | hecho (parcial) | Indexación revisada el 29 oct: las páginas de venta y de precios están en Google; el informe de Search Console aún lista 16 entradas del blog como "descubiertas sin indexar", pero las que inspeccioné ya aparecen indexadas (el informe va atrasado). Auditoría de las 51 URLs del sitemap en `informes/medicion.md` y bitácora. |
| 8 | Cambios SEO en el código del sitio (títulos, schema, páginas nuevas). | Nube | por hacer | Según auditoría del Escritorio (29 oct): (1) títulos muy largos (muchos de 80 a 109 caracteres; ideal hasta ~60) y descripciones de 190 a 347 caracteres (ideal hasta ~155), sobre todo en /blog/*, /vendedor-ia, /acompanamiento; (2) /sorteos sin H1; (3) /politica-privacidad sin meta description ni canónica; (4) sin schema: /blog/*, /cotizador-servicios, /cotizador-vendedor-ia, /landing-paginas-web, /landing-vendedor-ia; (5) el fragmento de Google de la home dice "desde $250.000 COP": alinear con los precios de CONTEXTO.md; (6) poner el enlace de la ficha de Google (Maps) en el sitio (botón, pie y `sameAs` del schema de la home). |
| 9 | Perfil de Negocio de Google (ficha de Maps): revisar y unificar datos. Informe en `informes/ficha-google.md`. | Google | por hacer | |
| 10 | Consistencia de datos en todas partes: sitio, ficha de Google, Instagram, TikTok, Facebook, WhatsApp Business. | Google | por hacer | Tabla en `informes/consistencia.md`. |
| 11 | Resolver las inconsistencias de `CONTEXTO.md` (años, número de páginas, rango de precios). | Cristian | por hacer | Con el dato real, la Nube corrige sitio y contenidos. |
| 12 | Confirmar si Google Sheets de la landing está conectado. | Google | haciendo | Registro de prueba enviado: el servidor respondió `guardado = true`. Falta que Cristian confirme que la fila "PRUEBA Medición" llegó a la hoja y la borre. |
| 13 | Campaña de Meta para el sorteo de páginas web (Tráfico → luego Clientes potenciales). | Meta | por hacer (relevo a la Nube) | Cristian pidió (29 oct) que la otra IA configure los anuncios de Meta. La Nube prepara el plan, los textos y las piezas; **no tiene acceso a la cuenta**, así que la carga en Administrador de anuncios la hace el Escritorio o Cristian cuando el plan esté en la bitácora. Datos: cuenta AGENCIA VECTORIAL (1530812817803032), píxel 1447406940536370 ya activo (Lead, Contactar, CTAClick), destino `https://agenciavectorial.com/sorteos?s=paginas&utm_source=facebook&utm_medium=paid&utm_campaign=sorteos&utm_content=NOMBRE`. El Escritorio no creó ninguna campaña de Meta. |
| 14 | Mandar `generate_lead` e `ig_click` a GA4 con `gtag('event', ...)` en /sorteos, junto a cada `dataLayer.push`. Después el Escritorio los marca como eventos clave. | Nube | en pausa | Ya no hace falta si se publica el GTM de /sorteos (envía `generate_lead` e `ig_click` a GA4). No tocar el código. |
| 14 | Revisión de las 70 páginas del sitio con Cristian (página «Revisión del sitio Vectorial» en claude.ai). Primera ronda de arreglos publicada. | Nube | haciendo | Falta lo que marque Cristian: menú, copias para borrar y ajustes. |
| 15 | Verificar el enlace de Facebook del sitio (`facebook.com/agenciavectorial`): ¿es la página correcta? | Google | por hacer | Va con la tabla de consistencia. |
| 16 | **SEO: pedir indexación** en Search Console de las páginas nuevas y cambiadas, y reenviar `sitemap.xml` (56 enlaces). Lista abajo. | Google | por hacer | Cristian lo delegó el 30 oct. |
| 17 | Agregar `OPENAI_API_KEY` en Cloudflare Pages (Production) para que el asistente David use ChatGPT. | Cristian | por hacer | Lo hace Cristian o Escritorio con su sesión de Cloudflare. Nunca pegar la clave en el chat ni aquí. |
| 18 | Revisar en GA4 y en Clarity, a la semana, qué negocios tocan más en el selector del inicio (`elegir_negocio`) y cuántos abren el chat. | Google | por hacer | Informe corto en `informes/medicion.md`. |

### Enlaces para pedir indexación (tarea 16)
- https://agenciavectorial.com/ (inicio nuevo, 30 oct)
- https://agenciavectorial.com/blog/caso-vegan-garden
- https://agenciavectorial.com/blog/caso-pasabocas-marbar
- https://agenciavectorial.com/blog/caso-el-buen-sabor
- https://agenciavectorial.com/paginas-web-medellin
- https://agenciavectorial.com/blog/cuanto-cuesta-pagina-web-medellin
- https://agenciavectorial.com/blog
- https://agenciavectorial.com/sorteos
- Revisar en «Páginas» que las propuestas, planes y cobros de clientes **no** aparezcan indexados (llevan noindex).
| 19 | **Auditoría de las campañas de Meta que ya existen**: qué funciona, qué no, qué pausar y qué ajustar. Informe en `informes/meta-ads.md`. | Meta | por hacer | Cristian se lo delegó el 30 oct. |
| 20 | Remarketing de quienes visitaron o se registraron en /sorteos, con la oferta de $99.900 al mes. | Meta | por hacer | Después del 22 de noviembre o antes si Cristian lo pide. |
