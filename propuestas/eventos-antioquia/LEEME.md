# Propuesta · Ecosistema digital Eventos Campestres Antioquia

- `index.html`: propuesta mobile-first (22 secciones).
- `Propuesta-Eventos-Antioquia-Agencia-Vectorial.pdf`: PDF vertical en formato celular (430×932), 22 páginas.
- `fotos/`: fotos y piezas reales tomadas de @eventoscant, @eventosverum, @luismiguelplanner y @knonproducciones (vía Apify, 7 nov 2026).

## Datos usados (Instagram, 7 nov 2026)
| Cuenta | Seguidores | Publicaciones | Enlace en biografía |
|---|---|---|---|
| @eventoscant | 10.881 | 326 | wa.me 313 715 9379 |
| @luismiguelplanner | 9.670 | 588 | eventosantioquia.com.co (caída) |
| @eventosverum | 3.204 | 360 | wa.me 318 401 6044 |
| @knonproducciones | 385 | 13 | Facebook (sin biografía) |

## Regenerar el PDF
```bash
cd propuestas/eventos-antioquia && node tools/build-pdf.js
```
El script avisa con `OVERFLOW` si alguna página no cabe en el formato.
