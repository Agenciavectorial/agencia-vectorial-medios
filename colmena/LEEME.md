# La colmena · memoria compartida de Agencia Vectorial

Esta carpeta es la memoria común de todas las IAs que trabajan para Agencia Vectorial.
Lo que no está escrito aquí, la otra IA no lo sabe.

## Quién es quién

| Abeja | Dónde trabaja | Qué hace |
|---|---|---|
| **Nube** (Claude Code en la nube) | Repositorios de GitHub | Página web, landings, contenidos, videos, diseños, guiones y textos de anuncios. |
| **Meta** (Claude de escritorio de Cristian) | Navegador de Cristian | Publicidad en Meta: Administrador de anuncios, Administrador de eventos, píxel, campañas del sorteo y remarketing. |
| **Google** (la otra IA de escritorio) | Navegador de Cristian | Google Ads, Search Console, SEO, Tag Manager, Analytics y la ficha de Google (Perfil de Negocio). |
| **Cristian** | Todo | Decide, aprueba gastos, inicia sesión, graba. |

Ninguna abeja se mete en lo de otra: si necesitas algo de otra, ponlo en `TAREAS.md` con su nombre.

La nube no tiene acceso a las cuentas de Cristian; el escritorio sí. Por eso todo lo que se hace dentro
de una plataforma lo hace Meta o Google, según la plataforma, y todo lo que es código o archivos lo hace la nube.

## Reglas

1. **Al empezar:** lee `CONTEXTO.md`, `TAREAS.md` y las últimas 20 entradas de `BITACORA.md`.
2. **Al terminar cada bloque de trabajo:** agrega una entrada en `BITACORA.md`, actualiza `TAREAS.md` y
   guarda los informes largos en `informes/`. Luego haz commit y push.
3. Si cambias un dato del negocio (precio, teléfono, servicio), cámbialo en `CONTEXTO.md` y anótalo en la bitácora.
4. **Nunca** escribas aquí contraseñas, claves de API, tokens ni números de tarjeta. Los IDs públicos
   (ID de píxel, `G-…`, `GTM-…`, ID de cliente de Google Ads) sí se pueden escribir.
5. No gastes dinero ni actives campañas sin que Cristian lo apruebe en el chat.
6. Para pedirle algo a la otra abeja, ponlo en `TAREAS.md` con su nombre como responsable.
7. Escribe en español, claro y corto. De tú.

## Dónde está esta carpeta

Repositorio `agenciavectorial/agencia-vectorial-medios`, rama `claude/quirky-wozniak-oii0m3`, carpeta `colmena/`.
- Con terminal: `git clone -b claude/quirky-wozniak-oii0m3 https://github.com/agenciavectorial/agencia-vectorial-medios.git`
  (antes de escribir: `git pull`; después: `git add colmena && git commit -m "…" && git push`).
- Sin terminal: edita los archivos en github.com (ícono del lápiz) en esa misma rama y guarda con «Commit changes».

## Formato de la bitácora

```
## 2026-10-29 · Escritorio
- Qué hice: …
- Qué encontré: …
- Qué falta / qué necesito: …
```
