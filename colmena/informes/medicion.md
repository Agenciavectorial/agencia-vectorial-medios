# Informe de medición · 29 oct 2026 (Escritorio)

Cubre las tareas 1, 2, 3 y 12 de TAREAS.md. Todo se revisó en vivo con las sesiones de Cristian. No se cambió nada en ninguna plataforma.

## Resumen en 5 líneas

1. La medición ya existe y no estaba escrita en CONTEXTO.md. El sitio carga GA4 (G-MXREGM2TXH) y el píxel de Meta (1447406940536370) directo desde site-utils.js, no desde GTM.
2. GTM-MHWB25JH solo tiene Clarity: 1 etiqueta, 0 activadores, 0 variables propias, 0 cambios pendientes.
3. Los eventos generate_lead e ig_click casi seguro no llegan a GA4: se empujan al dataLayer como objetos con "event", y solo GTM los lee, pero GTM no tiene ningún activador. GA4 muestra 0 eventos clave.
4. El píxel de Meta recibe PageView, CTAClick y Contactar, pero ningún Lead ni SorteoInstagram todavía.
5. Search Console está verificado y el sitemap está bien. Google Sheets de los sorteos: sin confirmar.

## 1. Google Tag Manager · GTM-MHWB25JH

- Cuenta Agencia Vectorial (6364065349), contenedor 257236546, espacio de trabajo 3.
- Etiquetas (1): Microsoft Clarity - Official, activador All Pages, modificada hace 2 meses.
- Activadores: ninguno. Variables definidas por el usuario: ninguna.
- Variables integradas activas: Analytics Client ID, Analytics Session ID, Event, Page Hostname, Page Path, Page URL, Referrer.
- El contenedor publicado (gtm.js) confirma lo mismo: solo Clarity (proyecto yfw3d9makv).

## 2. Google Analytics 4

- Cuenta Agencia Vectorial (399928924), propiedad Agencia Vectorial (544070872).
- Flujo web: https://www.agenciavectorial.com/ · ID de flujo 15191119758 · ID de medición G-MXREGM2TXH (coincide con el del código del sitio).
- Estado: recibió tráfico en las últimas 48 horas. Últimos 7 días: 28 usuarios activos, 165 eventos, 39 vistas, 0 eventos clave.
- Search Console no está vinculado a la propiedad; GA4 lo recomienda.
- Cómo llega GA4: site-utils.js ejecuta gtag('config') y manda whatsapp_click y cta_click con gtag. Eso funciona sin GTM.
- Problema: generate_lead, ig_click y los demás eventos de la landing de sorteos usan dataLayer.push con "event". gtag.js no procesa esos objetos; solo GTM. Como GTM no tiene etiquetas de GA4, esos eventos no llegan. (Inferido del código; no pude abrir la lista de eventos de GA4 porque los enlaces profundos rebotaban al inicio.)
- No conviene añadir una etiqueta de configuración de GA4 en GTM mientras site-utils.js siga haciendo gtag('config'): contaría cada visita dos veces.

## 3. Píxel de Meta

- Nombre: Agencia Vectorial - Pixel · ID 1447406940536370 · portafolio comercial 508210938702182.
- Conectado a 5 sitios web (agenciavectorial.com y 4 más).
- Eventos del 1 al 28 oct: CTAClick 134, PageView 119, Contactar 3. Todos por navegador.
- No hay Lead ni SorteoInstagram. Falta probar que el formulario dispare Lead (con "Probar eventos").
- Aviso de Meta: desde el 12 nov 2026 los píxeles medirán conversiones en dispositivos de clientes de forma automática. Se puede desactivar.

## 4. Search Console

- Propiedad de dominio sc-domain:agenciavectorial.com: verificada.
- Sitemap https://agenciavectorial.com/sitemap.xml: enviado 2 jul 2026, leído 28 oct 2026, estado Correcto, 36 páginas descubiertas.
- Sobra un envío: https://www.agenciavectorial.com/ aparece como sitemap con 1 error. Conviene quitarlo (no lo borré).
- Ojo: el sitemap y el canonical de /sorteos usan agenciavectorial.com (sin www), pero el flujo de GA4 está registrado con www. Hay que confirmar a cuál redirige el sitio.

## 5. Registros de la landing en Google Sheets (tarea 12)

- El formulario envía por POST a /api/sorteo (función de Cloudflare Pages).
- Sin confirmar si SORTEOS_SHEETS_URL y SORTEOS_CLAVE están puestas. No mandé un registro de prueba porque crearía un dato real; falta el sí de Cristian.
- En Drive, la búsqueda "sorteo" no mostró una hoja de registros (puede tener otro nombre).
- Aviso aparte: el almacenamiento de Google de la cuenta está al 95 % (14,27 de 15 GB). Si se llena, las hojas y el Apps Script pueden fallar.

## Qué propongo aprobar (nada se hizo todavía)

1. Eventos a GA4 sin duplicar (recomendado): la Nube agrega gtag('event', 'generate_lead') y gtag('event', 'ig_click') junto a cada dataLayer.push en /sorteos. Después el Escritorio marca generate_lead y whatsapp_click como eventos clave en GA4. Alternativa: mover GA4 a GTM (etiqueta de Google y 2 etiquetas de evento) y que la Nube quite gtag('config') de site-utils.js.
2. Vincular Search Console con GA4 (1 minuto).
3. Quitar de Sitemaps el envío erróneo https://www.agenciavectorial.com/.
4. Hacer un registro de prueba marcado como PRUEBA en el formulario, para confirmar Sheets y el evento Lead de Meta.
5. Corregir CONTEXTO.md: la Nube ya no tiene que instalar el píxel, ya está.
