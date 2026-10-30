# Tareas de la colmena

Estados: **por hacer** · **haciendo** · **hecho** · **bloqueada** (decir por qué).

| # | Tarea | Responsable | Estado | Notas |
|---|---|---|---|---|
| 1 | Auditoría de medición: GTM, GA4, Search Console, píxel de Meta. Informe en `informes/medicion.md`. | Escritorio | hecho | Informe en `informes/medicion.md` (29 oct). GTM solo tiene Clarity; GA4 y píxel están puestos en `site-utils.js`. |
| 2 | Crear o conectar GA4 en GTM, con los eventos de la landing (`generate_lead`, `ig_click`) como conversiones. | Escritorio | haciendo | Hecho en GTM, **sin publicar**: Google tag GA4 + 8 eventos + píxel base para /sorteos (importado en el espacio de trabajo 3). Falta publicar (lo bloqueó el sistema de permisos; Cristian debe aprobar), probar en vivo y marcar eventos clave en GA4. Ver `informes/medicion.md`. |
| 3 | Píxel de Meta: crear o ubicar el ID y escribirlo en `CONTEXTO.md`. | Escritorio | hecho | ID `1447406940536370` (Agencia Vectorial - Pixel). Ya está instalado en el sitio. |
| 4 | Instalar el píxel en la landing de sorteos (y en el sitio). | Nube | hecho (por GTM) | /sorteos no cargaba `site-utils.js` y no tenía píxel. Se resuelve con GTM al publicar. La Nube no debe agregar `fbq` a /sorteos. |
| 5 | Investigación de mercado y palabras clave para Google Ads con $10.000 COP al día. Informe en `informes/google-ads.md`. | Escritorio | por hacer | Ver guía en el prompt. |
| 6 | Propuesta de campaña de Google Ads (estructura, palabras, negativas, anuncios, extensiones). | Escritorio | por hacer | Textos de anuncios: la Nube los revisa si hace falta. |
| 6b | **Crear las campañas de Google Ads** en la cuenta, en pausa, con la propuesta de la tarea 6. Activarlas solo cuando Cristian diga «sí». | Escritorio | por hacer | Cristian lo delegó el 29 oct. Presupuesto $10.000 COP al día. |
| 6c | Ajustar o crear las páginas de aterrizaje de cada grupo de anuncios de Google Ads. | Nube | bloqueada | Espera el informe `informes/google-ads.md`. |
| 7 | Auditoría SEO con Search Console: páginas indexadas, consultas, errores, sitemap. Informe en `informes/seo.md`. | Escritorio | por hacer | |
| 8 | Cambios SEO en el código del sitio (títulos, schema, páginas nuevas). | Nube | por hacer | Según el informe de la tarea 7. |
| 9 | Perfil de Negocio de Google (ficha de Maps): revisar y unificar datos. Informe en `informes/ficha-google.md`. | Escritorio | por hacer | |
| 10 | Consistencia de datos en todas partes: sitio, ficha de Google, Instagram, TikTok, Facebook, WhatsApp Business. | Escritorio | por hacer | Tabla en `informes/consistencia.md`. |
| 11 | Resolver las inconsistencias de `CONTEXTO.md` (años, número de páginas, rango de precios). | Cristian | por hacer | Con el dato real, la Nube corrige sitio y contenidos. |
| 12 | Confirmar si Google Sheets de la landing está conectado. | Escritorio | haciendo | Registro de prueba enviado: el servidor respondió `guardado = true`. Falta que Cristian confirme que la fila "PRUEBA Medición" llegó a la hoja y la borre. |
| 13 | Campaña de Meta para el sorteo de páginas web (Tráfico → luego Clientes potenciales). | Escritorio | por hacer | Plan en la bitácora del 29 oct. Aprobación de Cristian. |
| 14 | Mandar `generate_lead` e `ig_click` a GA4 con `gtag('event', ...)` en /sorteos, junto a cada `dataLayer.push`. Después el Escritorio los marca como eventos clave. | Nube | en pausa | Ya no hace falta si se publica el GTM de /sorteos (envía `generate_lead` e `ig_click` a GA4). No tocar el código. |
| 14 | Revisión de las 70 páginas del sitio con Cristian (página «Revisión del sitio Vectorial» en claude.ai). Primera ronda de arreglos publicada. | Nube | haciendo | Falta lo que marque Cristian: menú, copias para borrar y ajustes. |
| 15 | Verificar el enlace de Facebook del sitio (`facebook.com/agenciavectorial`): ¿es la página correcta? | Escritorio | por hacer | Va con la tabla de consistencia. |
