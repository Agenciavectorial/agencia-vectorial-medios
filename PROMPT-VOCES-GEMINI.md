# Prompt: regrabar las voces con Gemini (para la IA que tiene Gemini funcionando)

Copia todo lo que está debajo de la línea y pégalo en la otra IA.

---

Vas a regrabar con Gemini las voces de 6 videos de Agencia Vectorial para que suenen igual que el resto de los
videos de la cuenta. Hoy esos 6 usan una voz de respaldo (edge-tts) o les falta una frase. No cambies nada de
diseño ni de montaje: solo las voces.

## Dónde está todo

- Repositorio privado `agenciavectorial/agenciavectorial`, rama **`claude/quirky-wozniak-oii0m3`**, carpeta `contenido-mes-1/`.
  Si ya lo tienes clonado: `git fetch origin claude/quirky-wozniak-oii0m3 && git checkout claude/quirky-wozniak-oii0m3 && git pull`.
- Lee primero `contenido-mes-1/PROMPT-PARA-CONTINUAR.md` (reglas de voz y de marca) y `contenido-mes-1/fuente/guiones.mjs`.
- Requisitos: Node 18+, Playwright con Chromium, ffmpeg, Python con numpy y la clave en `GEMINI_API_KEY`
  (nunca la muestres ni la pegues en el chat).

## Reglas de voz (no las cambies)

- Siempre de **tú**, nunca «vos» ni voseo. Acento paisa natural (lo pone la voz, no el texto).
- Habla la agencia en plural. Sin afirmaciones de salud (VitalMaster).
- Gremios generales: Marbar → comida; El Buen Sabor → supermercados.
- Reparto que ya usa la cuenta (en `LOCUTORES`): venta = Fenrir, urbano = Sadachbia, guía = Puck,
  casual = Zubenelgenubi, marca = Achird, mujer y mujerV = Laomedeia.

## 1. Videos con IA y Vegan Garden: pasar de edge-tts a Gemini

En `fuente/guiones.mjs`, cambia solo el `locutor` de estas tres entradas (los textos y los tiempos se quedan igual):

| Guion | Hoy | Cambiar a | Por qué |
|---|---|---|---|
| `x06-pagina-por-dentro-vegangarden` | `edgeH` | `casual` | Comida, igual que el reel de Marbar (d17) |
| `x07-ia-restaurantes` | `edgeH` | `casual` | Restaurantes |
| `x08-ia-paginas-inteligentes` | `edgeM` | `marca` | Habla la agencia de sus páginas |

## 2. Reels de los 3 sorteos: volver a poner la frase de la fecha

Los sorteos se relanzaron: arrancan el **25 de octubre** y los ganadores se anuncian el **domingo 22 de noviembre**.
En la voz se quitó la frase de la fecha vieja porque no había Gemini. En `fuente/guiones.mjs` cambia estas líneas:

- `R02`, frase en 14.4 s: `'Participa desde hoy.'` → `'Participa desde hoy. El veintidós de noviembre anunciamos a los tres ganadores.'`
- `S2`, frase en 17.4 s: `'¡Participa ya!'` → `'El veintidós de noviembre anunciamos a los cinco ganadores. ¡Participa ya!'`
- `S3`, frase en 18.8 s: `'¡Participa ya!'` → `'El veintidós de noviembre anunciamos al ganador. ¡Participa ya!'`

## 3. Generar y mezclar

Desde la raíz del repositorio:

```bash
# los sorteos llevan subtítulos: primero se rehace el video limpio (si no, los subtítulos quedan dobles)
node contenido-mes-1/fuente/neon-reel.mjs R02 S2 S3
# voces de Gemini + música, en los 6 videos
node contenido-mes-1/fuente/voces.mjs R02 S2 S3 x06 x07 x08
```

- `voces.mjs` imprime para cada video hasta dónde llega la voz. Si dice «voz al 1xx %» o «la voz termina después
  del video», acorta un poco esa frase (sin cambiar su sentido) y vuelve a correr solo ese video.
- En `x07` y `x08` las frases están atadas al inicio de cada cliente (`inicios()` en `reels.mjs`). No cambies esos tiempos.

## 4. Verificar antes de entregar

1. Revisa que cada voz diga exactamente el guion: `python contenido-mes-1/fuente/revisar-voz.py <id>` para cada uno
   de los 6. Si alguna lee instrucciones o se salta palabras, vuelve a generarla.
2. Revisa que cada MP4 tenga audio (`ffprobe`) y escucha el inicio y el final de cada uno.
3. Verifica que la voz sea la misma en todo el video y que suene como los demás videos de la cuenta.

## 5. Entregar

1. Copia los videos terminados al repositorio de publicación `agenciavectorial/agencia-vectorial-medios`,
   rama `claude/quirky-wozniak-oii0m3`:

| Video generado (en `contenido-mes-1/`) | Destino en `agencia-vectorial-medios` |
|---|---|
| `anuncios/neon/S3-sorteo-redes.mp4` | `2026-10-26_1900_Dia2_reel-del-sorteo-de-1-mes-de-redes/video.mp4` |
| `anuncios/neon/S2-sorteo-videos.mp4` | `2026-10-27_1100_Dia3_reel-del-sorteo-de-5-ediciones-de-video/video.mp4` |
| `anuncios/neon/R02-reel.mp4` | `2026-10-28_1800_Dia4_reel-del-sorteo-de-3-paginas-web/video.mp4` |
| `reels/x06-pagina-por-dentro-vegangarden.mp4` | `videos-ia/vegan-garden-por-dentro/video.mp4` |
| `reels/x07-ia-restaurantes.mp4` | `videos-ia/IA1-restaurantes-con-ia/video.mp4` |
| `reels/x08-ia-paginas-inteligentes.mp4` | `videos-ia/IA2-paginas-inteligentes/video.mp4` |

2. Haz commit y push en los dos repositorios, en la rama `claude/quirky-wozniak-oii0m3`. No crees pull requests.
3. Dale al cliente un resumen corto en español, de tú: qué voces quedaron y si alguna frase cambió.
