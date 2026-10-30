# Contexto del negocio · Agencia Vectorial

Última revisión: 29 de octubre de 2026 (Nube).

## Datos de contacto (deben ser iguales en todas partes)

| Dato | Valor |
|---|---|
| Nombre | Agencia Vectorial |
| Fundador | Cristian López |
| Sitio | https://agenciavectorial.com |
| WhatsApp / teléfono | +57 324 729 0699 (wa.me/573247290699) |
| Correo | contacto@agenciavectorial.com |
| Ciudad | Medellín, Antioquia. Atiende toda Colombia (todo por WhatsApp y videollamada). |
| Instagram | @agencia.vectorial (https://www.instagram.com/agencia.vectorial/) |
| Correo de la cuenta | agenciavectorialmarketing@gmail.com (solo para identificar cuentas; no publicar) |

## Qué vende

- **Páginas web de pago único:** micrositios, catálogos digitales y tiendas online, sitios profesionales.
  Precios en el sitio: `precios-micrositios.html`, `precios-catalogos-tiendas.html`, `precios-sitios-profesionales.html`.
- **Plan Mensual** (la página pagada por mes): desde $99.900 al mes.
- **Pagos:** 50/50, hasta 4 cuotas o Plan Mensual.
- **Vendedor IA:** asistente de IA que atiende y vende por WhatsApp, Instagram y Facebook.
- **App para barberías** (demo), asistentes de IA dentro de las páginas (ej. Vegan Garden, Marbar, VitalMaster, Eros).
- **Pauta:** paquetes de Meta Ads, Google Ads y ficha de Google (Google Maps). Ver reels Dia20, Dia21 y Dia22.
- **Redes sociales y edición de video.**

Clientes que se muestran: Pupi’s Barbershop, Bi You Joyería, Marbar, Vegan Garden, El Buen Sabor, VitalMaster,
Yaku Makara, Eros, Centinela, Movil Shop, Cibercell, Plásticos Pioneros, Diana Muñoz.

## Reglas de comunicación

- De tú, nunca «vos». La agencia habla en plural («hacemos», «nuestro equipo»). No se dice que Cristian trabaja solo.
- Sin humo: precios a la vista, nada de cifras que el cliente no haya confirmado.
- VitalMaster: sin promesas de salud.

## Campaña activa: sorteos (25 oct → 22 nov 2026)

- 3 sorteos: **3 páginas web** (el prioritario), 5 ediciones de video y 1 mes de redes.
  Todos los participantes reciben un diseño 100 % gratis. Ganadores: **domingo 22 de noviembre**, en vivo.
- Landing: https://agenciavectorial.com/sorteos (`?s=paginas`, `?s=videos`, `?s=redes`).
- Posts: páginas https://www.instagram.com/p/DfCs6vrkdy4/ · videos https://www.instagram.com/p/DfCsvrAkd4N/ · redes https://www.instagram.com/p/DfCsk6-kbng/
- Enlace para anuncios: `https://agenciavectorial.com/sorteos?s=paginas&utm_source=facebook&utm_medium=paid&utm_campaign=sorteos&utm_content=NOMBRE`
- Black Friday: viernes 27 de noviembre (campaña aparte, sin empezar).

## Medición (corregido el 30 oct)

- El sitio carga **`site-utils.js`** en casi todas las páginas públicas, con:
  **píxel de Meta `1447406940536370`**, **Google Analytics 4 `G-MXREGM2TXH`** y **Microsoft Clarity `yfw3d9makv`**.
  (El 29 oct la Nube dijo que no había píxel ni GA4 porque solo miró Tag Manager: estaban en `site-utils.js`.)
- Google Tag Manager `GTM-MHWB25JH` también está, pero solo tiene Clarity.
- Sorteos (`/sorteos`) ahora también carga `site-utils.js`: el registro del diseño gratis manda `Lead` al píxel y
  `generate_lead` a GA4. Toques hacia Instagram: `SorteoInstagram` / `ig_click`.
- Inicio nuevo: evento `elegir_negocio` (qué negocio tocó la persona) y `video_sonido`. El asistente manda
  `ai_chat_open` y `ai_chat_whatsapp`.
- Asistente con IA (David): `/api/chat` responde `ia: false` → **falta `OPENAI_API_KEY` en Cloudflare Pages**.
  Mientras tanto contesta en modo básico con `asistente/conocimiento.js`.
- Registros de la landing de sorteos: Google Sheets por Apps Script (`SORTEOS_SHEETS_URL`, `SORTEOS_CLAVE`). Sin confirmar.

## Inconsistencias conocidas (para unificar)

- Carrusel Dia6 dice «hace 6 años, más de 50 páginas y más de 100 negocios»; el reel Dia25 dice
  «15 páginas, 13 negocios»; Cristian habla de 8 años. Falta el dato real.
- El sitio dice en su ficha técnica (schema) `priceRange` «$150.000 - $1.500.000», pero hay planes de más de $2.000.000.
- La pregunta frecuente del sitio dice «sin mensualidades», pero también se vende el Plan Mensual.
- El sitio se presenta como «Vendedor IA» primero; Instagram como «Páginas web e IA».

## Dónde está todo

- Parrilla y archivos para redes: este repo (`agencia-vectorial-medios`), ver `CALENDARIO.md`.
- Perfil de Instagram y TikTok: `perfil/PERFIL-REDES.md`.
- Código del sitio: `agenciavectorial/agenciavectorial` (rama `main`).
- Fuente de los contenidos: `agenciavectorial/agenciavectorial`, rama `claude/quirky-wozniak-oii0m3`, carpeta `contenido-mes-1/`.
- Marca personal de Cristian (ideas calificadas): página «Mesa de marca Cristian López» en claude.ai (la tiene la Nube).
