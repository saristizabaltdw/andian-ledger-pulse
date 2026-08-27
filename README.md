# Andián Ops Hub

Crea un panel administrativo web (dashboard interno) para Andián, un grupo de

restaurantes/bistró con varias sucursales (Andián y Gelú). Es una herramienta

interna de operaciones/finanzas para revisar cierres de caja diarios y

mensuales, no un sitio público.

ESTRUCTURA: Sidebar fijo a la izquierda, fondo azul marino oscuro (#1B2A4A),

con el texto "ANDIÁN" en fuente serif elegante y debajo "Panel de operaciones"

en mayúsculas pequeñas, imitando el estilo de wordmark de su logo real

(Andián Bistro & Café). Cuatro secciones de navegación con íconos: Dashboard,

Reporte diario, Reporte mensual, Conciliación.

Arriba, una barra superior blanca con el título de la sección activa a la

izquierda, y a la derecha un selector de sucursal (dropdown) con estas 7

opciones: Andián Atrio, Andián Malta, Andián La Gran Vía, Gelú EDC, Gelú

Metrocentro, Gelú Ramblas, Eventos.

PALETA: fondo general crema (#F7F6F3), tarjetas blancas con borde sutil

(#E7E3DC), acento principal azul marino (#1B2A4A), verde (#0F6E5C) para

estados "automático"/"resuelto", ámbar (#B4530A) para "pendiente", rojo

(#A32B2B) para alertas de severidad alta. Tipografía serif elegante (tipo

Georgia o Playfair Display) para títulos, sans-serif para el resto, números

en formato tabular. Bordes rectos o con radio muy pequeño (no burbujas

redondeadas), estética de software financiero/ledger, no una app consumer.

SECCIÓN 1 - DASHBOARD:

4 tarjetas KPI arriba: "Ventas de hoy" ($7,795.92, sub: Andián Atrio · 17 jul),

"Ventas del mes" ($164,230, sub: Todas las sucursales), "Diferencias abiertas"

(2, sub: Requieren revisión), "Sucursales al día" (5/7, sub: Corte recibido hoy).

Debajo, una gráfica de línea "Tendencia de ventas — julio" con estos puntos

(día: total): 1:6938, 3:7215, 5:6710, 7:7490, 9:7050, 11:7680, 13:7320,

15:7560, 17:7796. Al lado, una gráfica de dona "Medios de pago — hoy" con

Tarjeta 5200, Efectivo 854, Delivery/Casa 1398. Abajo, una gráfica de barras

"Ventas por sucursal — hoy": Atrio 7796, Malta 5210, La Gran Vía 6340, Gelú

EDC 2180, Gelú Metro 3120, Gelú Ramblas 2940, Eventos 1560.

SECCIÓN 2 - REPORTE DIARIO:

Se muestra como un recibo/ticket de caja centrado, fondo blanco, fuente

monoespaciada, bordes punteados entre secciones. Encabezado: "CORTE DE CAJA -

Andián Atrio - 17-07-2026". Sección "Ventas según Reporte Z": Ventas gravadas

$7,201.71, Ventas exentas $153.77, Propina $440.44, Venta total del día

$7,795.92 — todas con una etiqueta verde pequeña "Automático". Sección "Ventas

de la casa": Pedidos Ya $1,055.40, Uber Eats $74.95, Cuenta de la casa

$268.03 — etiqueta verde "Automático". Sección "Medios de pago (Simphony)":

Efectivo $853.51, Tarjeta $5,199.56 — etiqueta verde "Automático". Sección

"Pendiente de banco/físico" en ámbar: Tarjeta BAC, Tarjeta Davivienda, Tarjeta

Serfinsa, Tarjeta Cuscatlán, Cheques/Transferencias, cada una con una nota

pequeña en cursiva explicando qué falta. Al final: "Firma cajero: ____  Firma

jefe de turno: ____".

SECCIÓN 3 - REPORTE MENSUAL:

Una tabla con columnas: Día, Gravada, Exenta, Propina, Total, Efectivo,

Tarjeta. Filas de ejemplo: 01/07 (5133.66, 0, 263.58, 5397.24, 518.98,

3018.04), 02/07 (5176.02, 13.27, 312.95, 5502.24, 938.60, 3600.62), 03/07

(5320.10, 8.40, 298.11, 5626.61, 610.22, 3455.30), 17/07 (7201.71, 153.77,

440.44, 7795.92, 853.51, 5199.56). Footer: "Mostrando 4 de 31 días · Andián

Atrio · Julio 2026".

SECCIÓN 4 - CONCILIACIÓN:

Tarjetas apiladas, una por alerta. Alerta 1: "Diferencia en tarjeta", severidad

alta (etiqueta roja), Andián Atrio, 17-07-2026, monto $283.42, detalle "El

total según Simphony ($5,199.56) no coincide con el corte físico de banco

($5,482.98)", estado Pendiente, con botones "Marcar como resuelto" y "Escalar

al jefe de sucursal". Alerta 2: "Diferencia en efectivo", severidad media

(ámbar), mismo día/sucursal, monto $27.33, detalle sobre el efectivo contado

vs. Simphony, Pendiente, mismos botones. Alerta 3: "Sobrante en tarjeta",

severidad baja (verde), Andián Malta, 16-07-2026, monto $0.15, detalle

"Sobrante de $0.15 en tarjeta por mal cobro", estado Resuelto (sin botones,

con etiqueta verde "Resuelto").

Usa datos de ejemplo tal cual los describí (no los inventes distintos), ya

que corresponden a un caso real que el equipo va a reconocer en la reunión.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b493a0e3-3064-4782-b4a2-8fd14d5e07e6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
