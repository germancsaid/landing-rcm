# PITCH PLAN (exposición de mercado)

Estructura definida: 8 slides. No es pitch de inversión — el CTA final es visitar la landing.

1. [El Problema](01-problema.md)
2. [Solución](02-solucion.md)
3. [Propuesta de valor](03-propuesta-valor.md)
4. [Tamaño de mercado y competencia](04-mercado-competencia.md)
5. [Modelo de negocio inicial](05-modelo-negocio.md)
6. [Métricas a la fecha](06-metricas.md)
7. [Equipo](07-equipo.md)
8. [Call to action](08-cta.md)


## Contexto
### TRACKTOR
Control operativo en origen para el agro

#### EL DOLOR
Productores agropecuarios grandes de Santa Cruz con 2+ máquinas no pueden auditar en el momento las horas trabajadas ni el diésel despachado. Dependen de que el operador fotografíe el horómetro, la bomba, su libreta diaria y las mande por WhatsApp, Una contador o administrador transcriba a Hojas de Calculo al cierre de mes, pagos inflados y fuga de combustible que nadie detecta a tiempo.

#### EVIDENCIA
80% de los productores entrevistados validó este dolor.
El flujo es 100% manual: foto de notas, horómetro, bomba por WhatsApp, transcrita a Excel varios dias después. Eso genera horas fantasma imposibles de auditar (fuga estimada del 3% en sueldos variables, $2 USD/hora) y fuga de diésel que nadie detecta a tiempo (estimada en 7% de industria maquinas logisticas).
Existe costo hundido: el productor paga personal administrativo solo para esta tarea.

#### PORQUE IMPORTA
El problema es de todos los días, 11 meses al año y/o en cada ciclo de siembra y cosecha. La espera al cierre de mes le impide al productor reaccionar a tiempo ante desvíos de trabajo o combustible.

**Costo real: las ~4,200 empresas grandes de Santa Cruz (6% de los 70,000 productores de CAO, 2025) pierden un estimado de ~$21.7M USD/año — cerca de $5,164 USD por propiedad.**

Cálculo por propiedad/año:

- **Fuga de diésel: ~$3,920** — 700 ha × 80 L/ha (MDRyT) = 56,000 litros ≈ $56,000 de gasto anual en diésel, × 7% de desvío.
- **Fraude/error en nómina: ~$465** — 4 operadores × 8 h/día × 22 días/mes × 11 meses = 7,744 h/año × $2/hora = $15,488, × 3% de error.
- **Tiempo administrativo: ~$779** — contador/administrador (5,500 Bs/mes ≈ $519) dedicando 3 días al mes (de 22 días hábiles) solo a transcribir estos datos, × 11 meses.

**Total: ~$5,164/año por propiedad × 4,200 empresas grandes = ~$21.7M USD/año.**

Por qué las grandes: son las que cultivan el 94% de la superficie mecanizada de Santa Cruz — 4,200 × 700 ha = 2.94M ha, contra los 3.14M ha cultivados reales del departamento (ANAPO/CAO, 2025/26). El promedio de 700 ha por propiedad se sostiene exactamente en este segmento. Nuestro primer cliente, Círculo H, con 13 máquinas, es una de ellas.

Supuestos: 700 ha y 4 máquinas/4 operadores promedio por propiedad grande, jornada de 8 h × 22 días × 11 meses, diésel a 10.6 Bs/litro (≈$1 USD), tipo de cambio 10.6 Bs/USD. A validar con clientes: hectáreas reales y % de fuga de diésel (7%, proxy de flotas LatAm sin monitoreo).

Fuentes:
- [CAO — 70,000 productores, 24% medianos y 6% grandes (2025)](https://cao.org.bo/2025/03/13/la-cao-posesiona-a-su-nueva-directiva-gestion-2025-2027/)
- [MDRyT — 80 litros/ha en labor agrícola (2017)](https://www.dgsc.gob.bo/datos/AGROPECUARIOS/informe%20MDRYT%20120%20litros%20x%20ha.pdf)
- [ANAPO/CAO — 3.14M ha cultivados en Santa Cruz, campaña verano 2025/26](https://agrosinergia.com.bo/area-cultivada-registro-crecimiento-de-4-y-3-7-en-produccion-de-bolivia-santa-cruz-concentra-71-25-del-total/)

#### SOLUCIÓN ACTUAL
Foto del horómetro y de la bomba de diésel por WhatsApp, transcrita a mano en Excel al cierre de mes. Insuficiente porque no hay evidencia verificable cualquier foto se puede reenviar, editar o mandar tarde, el desfase al cierre de mes e informes llegan cuando ya no hay nada que corregir, y depende enteramente de que una persona no se equivoque transcribiendo.

#### SEGMENTO
- El que paga: Productor agropecuario grande de Santa Cruz, empresa de agricultura y ganadería, con 2 o más máquinas propias que usan diésel. Ingresos ≥ 200,000 USD al año. Divide su tiempo entre oficina en Santa Cruz y visitas semanales al campo. El paga y decide.
- El que usa: Operador/tractorista que trabaja en la propiedad, a cargo de la maquinaria a diario operando o durante los ciclos de siembra y cosecha. Rota turnos de hasta 23 horas en ventanas críticas de clima. Cobra un sueldo de $2 USD por hora trabajada. El reporta su trabajo.

#### PRODUCTO
**En una frase:** TrackTor es la plataforma offline-first de captura de datos, asistida por IA, donde el operador registra por formulario —sin necesidad de conexión— operaciones, combustible, servicios y mantenimientos de cada máquina asignada por operador, con la opción de dictar por voz cuando hay internet disponible, y reportería automática para el dueño.

**Cómo ataca el dolor, punto por punto:**

- **Contra las horas fantasma:** el registro queda asignado a máquina y operador en el momento exacto, con horómetro validado contra el registro anterior. No hay forma de inflar horas sin que el sistema lo marque.
- **Contra la fuga de diésel:** cada despacho de combustible se registra en origen y se cruza con las horas trabajadas. El desvío se detecta el mismo día, no 30 días después.
- **Contra el cuello de botella administrativo:** se elimina el flujo de libretas, foto-por-WhatsApp y transcripción a Excel. El operador registra su jornada en segundos por formulario, sin necesidad de conexión (y puede dictarla por voz cuando hay internet); el dueño ve el consolidado y las alertas de mantenimiento sin esperar el cierre de mes.

**Diferencial frente al status quo:** cada registro va respaldado por una foto de constancia tomada dentro de la misma app no de la galería, no reenviada, con GPS y hora sellados. Eso convierte el dato más manipulable del campo en el más confiable. Ni el Excel manual ni la competencia que solo dicta por WhatsApp pueden garantizar que el dato es real.

#### PRICING
Free: 2 maquinas, 2 operadores, No fotos, No dictado por voz (IA), 30 dias historial
Pro: $59 USD/mes, 10 maquinas, 10 operadores, Fotos, Dictado por voz (IA), 1 año historial
Max: $99 USD/mes, Máquinas ilimitadas, Operadores ilimitados, Fotos, Dictado por voz (IA), historial completo

#### TAM
**$7M USD/año** — las ~5,915 empresas grandes de toda Bolivia × $1,188 USD/año (plan Max), capturar el 30% del valor del dolor.

Cálculo: CAO reporta 4,200 empresas grandes en Santa Cruz (6% de 70,000 productores, 2025). Extrapolado a Bolivia usando que Santa Cruz concentra el 71% de la producción agrícola nacional (Agrosinergia / IBCE, 2023): 4,200 ÷ 0.71 ≈ 5,915 empresas grandes en todo el país. Todas en plan Max ($99/mes = $1,188/año), consistente con su escala de flota (Círculo H, nuestro primer cliente, tiene 13 máquinas).

Relación con el dolor: cobramos ~$7M para resolver un problema que le cuesta al segmento ~$21.7M/año en Santa Cruz — capturamos ~32% del valor que generamos.

Fuentes:
- [CAO — 70,000 productores, 6% grandes (2025)](https://cao.org.bo/2025/03/13/la-cao-posesiona-a-su-nueva-directiva-gestion-2025-2027/)
- [Agrosinergia / IBCE — Santa Cruz 71% de la producción agrícola nacional (2023)](https://agrosinergia.com.bo/area-cultivada-registro-crecimiento-de-4-y-3-7-en-produccion-de-bolivia-santa-cruz-concentra-71-25-del-total/)


#### SAM
**$5M USD/año** — las 4,200 empresas grandes de Santa Cruz × $1,188 USD/año (plan Max).

La porción del TAM a la que llegamos hoy con nuestro modelo y geografía: Santa Cruz, donde ya operamos y tenemos a nuestro primer cliente. Son las que cultivan el 94% de la superficie mecanizada del departamento (4,200 × 700 ha ≈ 2.94M ha, contra 3.14M ha cultivados reales).

Fuentes:
- [CAO — 70,000 productores, 6% grandes (2025)](https://cao.org.bo/2025/03/13/la-cao-posesiona-a-su-nueva-directiva-gestion-2025-2027/)
- [ANAPO/CAO — 3.14M ha cultivados en Santa Cruz, 2025/26](https://agrosinergia.com.bo/area-cultivada-registro-crecimiento-de-4-y-3-7-en-produccion-de-bolivia-santa-cruz-concentra-71-25-del-total/)

#### SOM
**$35,640 USD/año** — 30 clientes grandes en plan Max ($1,188/año), meta al cierre del próximo trimestre.

Lo que capturamos de forma realista en el corto plazo: 30 de las 4,200 empresas grandes de Santa Cruz (0.7% del SAM), convirtiendo los 26 leads en lista de espera y activando los 3 canales de venta (WhatsApp, ferias agropecuarias, alianzas con proveedores). Ya tenemos el primer cliente pagando en Max.

#### TRACCION
2 usuarios
99$ ingresos en 1 semana de lanzamiento

#### HITOS
- Lanzamiento de TrackTor 15 de julio de 2026.
- Primer cliente pagando, el mismo día del lanzamiento  Círculo H, plan Max ($99 USD/mes), 13 máquinas, 7 usuarios.
- Segundo predio en conversión plan Freemium, 2 máquinas, 2 operadores.
- 26 leads en lista de espera desde la landing, pendientes de contactar.

#### ROAD MAP
ahora
Convertir los 26 leads en espera y activar los 3 canales de venta (WhatsApp, ferias, alianzas con proveedores) hasta llegar a 15 clientes pagando, con al menos el 30% en plan Max.

proximo
Escalar a 50 clientes aprovechando la cartera de Juan Camilo, con el objetivo de que el ARR cruce los $30,000 USD.

despues
150 clientes en Santa Cruz (~3.6% del SAM de 4,200 empresas grandes)

#### EQUIPO

- **Juan Camilo** — CEO: experto en implementar tecnología al agro con 15 años de experiencia, posicionado en el segmento como referente tecnológico.
- **Iblin** — CMO: Experta en Marketing y Apertura de Mercados: 10 años de experiencia.
- **Germán** — CTO: Arquitecto de Sistemas: experto en arquitectura de sistemas con 7 años de experiencia implementando SAP en industrias y creación de productos de software