# Registros de /sorteos en Google Sheets (5 minutos, una sola vez)

1. Crea una hoja nueva en Google Sheets y llámala **Sorteos · registros**.
2. En la hoja: **Extensiones → Apps Script**. Borra lo que haya y pega esto (cambia la clave por una tuya):

```javascript
const CLAVE = 'cambia-esta-clave';
const COLUMNAS = ['fecha', 'nombre', 'negocio', 'tipo', 'ciudad', 'whatsapp', 'instagram', 'pieza', 'web', 'sorteos',
  'sorteo_pagina', 'pasos', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'fbclid', 'gclid', 'ttclid', 'referrer', 'pagina', 'pais', 'ciudad_ip'];

function doPost(e) {
  const datos = JSON.parse(e.postData.contents || '{}');
  if (CLAVE && datos.clave !== CLAVE) return salida({ ok: false, error: 'clave' });
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS.concat(['estado', 'notas']));
  const f = datos.fila || {};
  hoja.appendRow(COLUMNAS.map(c => c === 'fecha' ? new Date(f.fecha || Date.now()) : (f[c] || '')).concat(['Nuevo', '']));
  return salida({ ok: true });
}

function salida(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Implementar → Nueva implementación → Tipo: Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier persona**.
   - Autoriza los permisos y copia la URL que termina en `/exec`.
4. En **Cloudflare Pages → agenciavectorial → Settings → Environment variables** (Production), agrega:
   - `SORTEOS_SHEETS_URL` = la URL `/exec`.
   - `SORTEOS_CLAVE` = la misma clave del paso 2.
   Guarda y vuelve a desplegar (o espera el próximo despliegue).
5. Prueba: abre `agenciavectorial.com/sorteos`, llena el formulario y mira que aparezca la fila.

## Cómo leer la hoja

- **utm_campaign / utm_content**: de qué campaña y de qué anuncio vino cada persona.
- **sorteo_pagina**: qué sorteo estaba viendo; **sorteos**: en cuáles dice que participó; **pasos**: qué pasos tocó en la página.
- **tipo / web**: si es un negocio y si ya tiene página: con eso filtras a los posibles clientes.
- **estado / notas**: para ti (Nuevo → Contactado → Diseño entregado → Cliente).
