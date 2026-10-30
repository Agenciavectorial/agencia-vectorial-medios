# Bitácora de la colmena

Lo más nuevo va arriba.

## 2026-10-30 (madrugada) · Escritorio
- **CORRECCIÓN:** en entradas anteriores dije que el pago de Google Ads ya estaba resuelto. Es falso. En Facturación > Configuración la cuenta 653-973-7843 sigue en **"Pago rechazado"** (Google Payments 4618-1251-0242-0645, pospago) y el banner "No se están publicando sus anuncios" sigue activo. La campaña 24412505678 está habilitada pero **no puede mostrar anuncios** hasta que el pago quede aprobado. Cristian vio "Forma de pago actualizada: Mastercard ••••6823", pero Google Ads todavía no la aplica; hay que usar "Solucionar el problema" o hacer un pago opcional/verificar la tarjeta.
- Qué hice: intenté importar whatsapp_click (categoría Contacto) como conversión desde GA4; el asistente de Google Ads no completó el guardado (se queda en el mismo paso) y no hay ninguna conversión creada. GA4 sigue sin listar generate_lead.
- Qué falta / qué necesito: Cristian resuelve el pago en Google Ads. Después: terminar la importación de conversiones (probar desde Objetivos > Conversiones con la propiedad 544070872) y marcar generate_lead e ig_click cuando GA4 los liste.

## 2026-10-29 (noche, 5) · Escritorio
- Qué hice: con el sí de Cristian puse UTM en el sitio web de la ficha de Google: https://agenciavectorial.com/?utm_source=google&utm_medium=organic&utm_campaign=ficha (queda "pendiente de revisión", hasta 10 minutos). Confirmé el píxel de Meta 1447406940536370 en Administrador de eventos: recibe PageView (181), CTAClick, Contactar y **Cliente potencial (Lead)**, todos por navegador. Cristian preguntó si el píxel de Facebook estaba conectado: sí, en todo el sitio (site-utils.js) y en /sorteos (GTM).
- Qué encontré: el Lead que ve Meta es el de la prueba "PRUEBA 2". El píxel solo manda por navegador; no hay API de conversiones, ni verificación de dominio, ni medición agregada de eventos configurada (pendiente). Instagram @agencia.vectorial y la campaña de Meta (tarea 13) siguen sin hacerse.
- Qué falta / qué necesito: Cristian aprueba el borrador de campaña de Meta cuando quiera (tarea 13). Yo: verificar el dominio en Meta, priorizar eventos (Lead, Contacto), y confirmar que la ficha ya muestre el sitio con UTM.

## 2026-10-29 (noche, 4) · Escritorio
- Qué hice: creé 3 vínculos a sitios en la campaña de Google Ads (Micrositios, Catálogos y tiendas, Sitios profesionales; cada uno a su página de precios; en revisión de Google). Revisé TikTok y la ficha de Google.
- Qué encontré: **TikTok Ads pide iniciar sesión en el Chrome de la extensión**, así que no pude ver ni crear el píxel (Cristian debe iniciar sesión en ads.tiktok.com y avisar). **Ficha de Google "Agencia Vectorial | Marketing y Automatización IA"**: verificada, de zona de servicio (Bello, Caldas y 7 áreas más), 727 vistas en el período, 150 personas la vieron el mes pasado; tiene una reseña nueva de 5 estrellas sin responder. La ficha tiene 6 negocios en el administrador (3 sin verificar: CIBER CELL JSC, Cocina La Catrina Mexicana, entre otros). El fragmento de Google del sitio dice "empezando desde $250.000 COP": no coincide con los precios de CONTEXTO.md (micrositio desde $790.000; Plan Mensual desde $99.900); la Nube debe corregir el título/descripción del sitio.
- Qué falta / qué necesito: Cristian responde la reseña de 5 estrellas y aprueba que yo ponga UTM en el enlace del sitio de la ficha (utm_source=google&utm_medium=organic&utm_campaign=ficha) para medir sus clics en GA4. Mañana: eventos clave en GA4 (generate_lead, ig_click), importar conversiones a Google Ads, TikTok.

## 2026-10-29 (noche, 3) · Escritorio
- Qué hice: comprobé en GA4 Tiempo real que los eventos de GTM llegan (sorteo_form_start y la vista de /sorteos aparecen; el 503 que mostraba la herramienta de red era un artefacto). El aviso de pago de Google Ads ya desapareció. Intenté importar conversiones de GA4 a Google Ads: la cuenta ya ve la propiedad 544070872 como vinculada, pero el asistente quedó sin completar (no hay ninguna acción de conversión creada todavía).
- Qué encontré: generate_lead y sorteo_view aún no aparecen en la lista de eventos de GA4 (tarda horas). El asistente de conversiones de Google Ads es lento y se congela; conviene terminarlo con calma.
- Qué falta / qué necesito: mañana, cuando GA4 liste generate_lead: marcar generate_lead e ig_click como eventos clave; en Google Ads > Objetivos > Conversiones > Conversión nueva > sitio web > Google Analytics, elegir la propiedad 544070872 e importar whatsapp_click y generate_lead (categoría Cliente potencial); quitar el objetivo provisional "Obtener indicaciones". Luego vínculos a sitios, TikTok y ficha de Google.

## 2026-10-29 (noche, 2) · Escritorio
- Qué hice: Cristian arregló el pago de Google Ads (Mastercard ••••6823). La campaña "Búsqueda | Páginas web | Medellín" (ID 24412505678) quedó **Habilitada y apta (en aprendizaje)**. Creé los grupos 2 "Catálogos y tiendas" (precios-catalogos-tiendas) y 3 "Sitios profesionales" (precios-sitios-profesionales), cada uno con sus palabras de frase/exacta y un anuncio con textos propios (Google había precargado títulos de IA con promesas como "Hosting de por vida" y "Garantía de Satisfacción": los reemplacé todos). Agregué ~40 palabras negativas a nivel de campaña (gratis, curso, empleo, plantilla, wix, wordpress, tutorial, agenda 2022, etc.). En GA4: marqué whatsapp_click como evento clave y vinculé GA4 con Google Ads (653-973-7843). Segundo registro de prueba ("PRUEBA 2"): el píxel de Meta recibió Lead y GA4 recibió generate_lead con sus parámetros.
- Qué encontré: GA4 todavía no lista generate_lead ni sorteo_view (esa lista tarda horas). El vínculo GA4 a Google Ads tarda hasta 24 h en mostrar datos; recién entonces se pueden importar conversiones. La cuenta de Ads no tiene conversiones propias (el objetivo provisional "Obtener indicaciones" no sirve). El asistente de Google Ads precarga textos de IA en cada grupo nuevo: hay que revisarlos siempre.
- Qué falta / qué necesito: (1) Cristian borra las filas "PRUEBA Medición" y "PRUEBA 2 Medición" de la hoja y confirma que llegaron. (2) Mañana: marcar generate_lead e ig_click como eventos clave en GA4, e importar whatsapp_click y generate_lead como conversiones en Google Ads, y quitar el objetivo "Obtener indicaciones". (3) Vínculos a sitios y llamada; vigilar términos de búsqueda a los 3 a 7 días. (4) TikTok y ficha de Google (GA4 ya permite vincular Perfil de Empresa).

## 2026-10-29 (madrugada) · Escritorio
- Qué hice: Search Console con el sitemap limpio y vinculado a GA4. En Google Ads (cuenta Agencia Vectorial 653-973-7843) creé y **publiqué** la campaña "Búsqueda | Páginas web | Medellín" (ID 24412505678): solo Búsqueda de Google (sin socios ni Display), Medellín, Envigado, Itagüí, Sabaneta y Bello con "Presencia", presupuesto COP 10.000/día, oferta "Clics" con tope de CPC COP 3.500, IA Max apagada. Grupo 1 "Micrositios" (landing precios-micrositios): 9 palabras de frase/exacta y 1 anuncio responsivo (8 títulos, 3 descripciones, precios reales de CONTEXTO.md).
- Qué encontré: el Planificador da volumen bajo en Medellín (10 a 100 búsquedas/mes por palabra; "landing page" y "tienda online" 100 a 1.000) y CPC estimado de COP 1.000 a 9.000. Con COP 10.000 al día Google estima ~59 clics por semana a ~COP 1.186. **El método de pago de Google Ads está en "Pago rechazado"**, así que la campaña no muestra anuncios hasta que Cristian lo arregle. No hay conversiones en Google Ads; el objetivo provisional es "Obtener indicaciones" (sin uso real).
- Qué falta / qué necesito: Cristian arregla el pago (Facturación > Configuración). Yo: grupos 2 (precios-catalogos-tiendas) y 3 (precios-sitios-profesionales) con sus palabras y anuncios, lista de palabras negativas, vínculos a sitios, vincular GA4 con Google Ads e importar generate_lead y whatsapp_click como conversiones, y quitar el objetivo provisional. Nube: nada por ahora.

## 2026-10-29 (noche) · Escritorio
- Qué hice: con el sí de Cristian **publiqué la versión 3 de GTM** (GTM-MHWB25JH): Google tag GA4 (G-MXREGM2TXH) y píxel de Meta (1447406940536370) para /sorteos, más 8 eventos de GA4. Verificado en vivo: fbq existe con el píxel correcto y GA4 manda page_view y sorteo_view con sus parámetros. Revisé Google Ads (cuenta Agencia Vectorial 653-973-7843).
- Qué encontré: la cuenta de Google Ads está vacía (0 campañas) y **sin forma de pago**, así que ningún anuncio puede publicarse. El asistente de campaña nueva trae precargado otro nombre de empresa y la URL vectorialmarketing.com. Cristian pidió dejar las campañas activas; no activé nada porque falta el pago y la investigación de palabras clave.
- Qué falta / qué necesito: Cristian agrega la forma de pago en Google Ads (yo no puedo). Luego yo hago el Planificador de palabras clave y armo la campaña de búsqueda (Medellín, $10.000 COP/día, concordancia de frase o exacta, negativas, conversión = generate_lead y whatsapp_click). Pendiente también: eventos clave en GA4, TikTok y ficha de Google.

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
