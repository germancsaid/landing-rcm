# RCM — Landing de validación (Fake Door Test)

Landing estática y liviana para validar mercado **antes** de seguir construyendo
producto. No es el lanzamiento ni una versión del app.

## Estructura

- `index.html` — copy y secciones del brief (hero, problema, CTA, modal de flujo).
- `styles.css` — sistema de diseño extraído del app Flutter (paleta, Montserrat/Inter, tarjetas redondeadas, degradado premium navy).
- `app.js` — flujo `form → pricing → confirmación` + instrumentación de analítica.

## Flujo

1. Visitante lee propuesta de valor y problema.
2. CTA → formulario de 4 campos (Nombre, Empresa, Ubicación, N° de maquinarias).
3. Enviar → pantalla de pricing (2 planes, **ninguno destacado**).
4. Elige plan → confirmación "estás en fase de piloto/preventa, te contactamos en 3 días". No hay checkout real.

## Eventos instrumentados (ver consola)

`page_view` (con `unique`), `scroll_depth` (25/50/75/100), `cta_click`,
`form_open`, `form_submit`, `form_validation_error`, `pricing_view`,
`plan_select` (con el id del plan), `confirm_view`.

Los eventos se loguean en consola y se envían a `dataLayer`/`gtag` si existen.

## Conectar la captura de datos

Abre `app.js` y completa estas constantes (no se necesita base de datos):

```js
var FORM_ENDPOINT = "";      // Google Apps Script (doPost) / Formspree / Airtable
var ANALYTICS_ENDPOINT = ""; // opcional: hoja aparte para eventos
```

Opción rápida: un **Google Apps Script** publicado como Web App que recibe el
POST y agrega una fila al Sheet. Los leads llegan con todos los campos para
filtrar manualmente el perfil calificado después.

## Probar localmente

```bash
cd landing-rcm
python3 -m http.server 8080
# abrir http://localhost:8080
```
