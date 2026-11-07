# Propuesta · Ecosistema digital Eventos Antioquia

- `index.html` — propuesta (mobile-first). Ábrela en el navegador o publícala.
- `Propuesta-Eventos-Antioquia-Agencia-Vectorial.pdf` — PDF vertical en formato celular (430×932), 21 páginas.
- `fotos/` — imágenes de ambientación (Unsplash) que **hay que cambiar por fotos reales** de las marcas antes de enviar.

## Cambiar fotos por las reales de Instagram
Guarda la foto real con **el mismo nombre de archivo** en `fotos/` (jpg, ~1200 px de ancho):

| Archivo | Dónde aparece | Qué foto poner |
|---|---|---|
| portada.jpg | Portada | Mejor foto de un evento campestre (vertical u horizontal) |
| campestre-ceremonia / -mesa / -kiosko / -pareja | Marca, Hub, landing | Salones de Copacabana, montajes, parejas (@EventosCant) |
| verum-plato / -buffet / -montaje / -mesa | Verum | Platos, buffet, montajes (@EventosVerum) |
| planner-salida / -velo / -ramo / -anillos | Luis Miguel Ríos | Bodas planeadas por él (@luismiguelPlanner) |
| knon-luces / -pista / -tarima / -confeti | K-non y cierre | Miniteca, luces, pista (@knonproducciones) |
| empresarial.jpg | (reserva) | Evento empresarial |

## Regenerar el PDF
```bash
cd propuestas/eventos-antioquia && node tools/build-pdf.js
```
El script avisa con `OVERFLOW` si alguna página no cabe en el formato.
