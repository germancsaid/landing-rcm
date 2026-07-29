# Slide 8 — Call to action

## Guion (presupuesto: 35 palabras)

TrackTor convierte el dato más manipulable del campo boliviano en el más confiable. Así se está digitalizando el agro en Santa Cruz — entrá a tracktor.lat y conocé cómo. Estamos abriendo cupos para nuevos productores.

## Imagen sugerida

**Fondo negro** (pedido en la segunda ronda de revisión, para toda la presentación).

Slide de cierre con el logo de TrackTor grande, el dominio "tracktor.lat" en tipografía enorme (lo más legible de toda la presentación — es lo único que la audiencia tiene que recordar al salir), y un **QR obligatorio** (ya no opcional — pedido explícito de la segunda ronda) que apunte directo a la landing.

## Nota
Coherente con la landing ya corregida (sin testimonios falsos, con tracción real) — quien entre después del pitch va a encontrar exactamente la misma historia que escuchó en el escenario.

## Segunda ronda de revisión — lo que revisé en el sitio real

**Botón "Solicitar demo":** revisé `app.js`. No manda directo a una hoja de cálculo — abre un modal con 3 pasos reales (datos de contacto → elegir plan → confirmación con "te contactamos en 3 días hábiles"), se ve como un flujo de producto de verdad. Lo que sí es cierto: por debajo, los leads se guardan en un Google Sheet vía Apps Script (es un "fake door test" — el comentario en el código literalmente lo dice así). Si el revisor vio la hoja de cálculo, probablemente fue mirando el backend/los datos capturados, no la experiencia del botón en sí. Preguntá: ¿el problema es la experiencia visual (que no lo es, ya es un modal pulido) o que no hay una reserva de horario real tipo Calendly? Son arreglos distintos.

**Imágenes "estiradas":** revisé el CSS (`styles.css`). Las screenshots de la app usan `width: 100%` sin forzar altura, y las imágenes de fondo (hero, cierre) usan `background-size: cover` — ambas técnicas preservan la proporción, no deberían estirarse. No encontré el bug en el código. Puede ser algo que solo se ve en cierto tamaño de pantalla, o una imagen específica con una proporción distinta a la que espera su contenedor. Si me pasás una captura de dónde se ve estirado, lo reviso puntual.

**Links a tiendas de apps:** no aplica todavía — la app no está publicada. Cuando esté en App Store / Play Store, agregamos los links acá.

## ⚠️ Todavía pendiente
Los revisores pidieron cerrar con una anécdota real (storytelling) — te pregunté por una historia concreta tuya, de Juan Camilo, o de un cliente, y todavía no me la diste. No inventé nada en su lugar. Cuando la tengas, la sumamos acá o al cierre verbal del pitch (no necesariamente tiene que estar escrita en la slide).
