/* ========================================================================
   RCM — Google Apps Script (Web App) para la landing de validación.
   Recibe POST de la landing y los guarda en hojas:
     - "Leads"      → formulario enviado y elección de plan (conversión core)
     - "Visitantes" → un registro por page_view (aunque no dejen el formulario)
     - "Eventos"    → analítica de funnel (scroll_depth, cta_click, etc.)
     - "Resumen"    → métricas en vivo: visitantes, leads y % de conversión
   doGet devuelve esas mismas métricas en JSON (para chequeo rápido).
   Si las hojas no existen, las crea con sus encabezados.
   ======================================================================== */

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);
  var type = data.type || data.event || "";

  // Conversión core = SOLO los registros explícitos (data.type), no los eventos
  // de analítica. Así el beacon de analítica `plan_select` no duplica en Leads.
  var esLead = data.type === "lead" || data.type === "plan_select";
  var esPageView = data.event === "page_view";

  if (esLead) {
    var leads = getOrCreateSheet(ss, "Leads", [
      "ts", "type", "sid", "nombre", "empresa", "ubicacion", "maquinarias", "telefono", "plan"
    ]);
    leads.appendRow([
      data.ts || new Date().toISOString(),
      type,
      data.sid || "",
      data.nombre || "",
      data.empresa || "",
      data.ubicacion || "",
      data.maquinarias || "",
      data.telefono || "",
      data.plan || ""
    ]);
  } else if (esPageView) {
    // Cada visitante queda registrado, deje o no el formulario.
    var visitantes = getOrCreateSheet(ss, "Visitantes", [
      "ts", "sid", "unico", "referrer", "utm_source", "utm_medium",
      "utm_campaign", "userAgent", "idioma", "pantalla", "viewport", "path"
    ]);
    visitantes.appendRow([
      data.ts || new Date().toISOString(),
      data.sid || "",
      data.unique === undefined ? "" : data.unique,
      data.referrer || "",
      data.utm_source || "",
      data.utm_medium || "",
      data.utm_campaign || "",
      data.userAgent || "",
      data.language || "",
      data.screen || "",
      data.viewport || "",
      data.path || ""
    ]);
  } else {
    var eventos = getOrCreateSheet(ss, "Eventos", [
      "ts", "event", "sid", "depth", "source", "plan", "unique", "referrer"
    ]);
    eventos.appendRow([
      data.ts || new Date().toISOString(),
      data.event || type,
      data.sid || "",
      data.depth || "",
      data.source || "",
      data.plan || "",
      data.unique === undefined ? "" : data.unique,
      data.referrer || ""
    ]);
  }

  ensureResumen(ss);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* Chequeo rápido: abre la URL de la Web App en el navegador y verás el conteo. */
function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var m = computeMetrics(ss);
  return ContentService
    .createTextOutput(JSON.stringify(m))
    .setMimeType(ContentService.MimeType.JSON);
}

/* Conteos de visitantes / leads / conversión. */
function computeMetrics(ss) {
  var visitas = countRows(ss, "Visitantes");
  var visitantesUnicos = countDistinct(ss, "Visitantes", 2);   // columna "sid"
  var leads = countValueInColumn(ss, "Leads", 2, "lead");      // columna "type"
  var planSelects = countValueInColumn(ss, "Leads", 2, "plan_select");
  var conversion = visitantesUnicos > 0 ? leads / visitantesUnicos : 0;
  return {
    visitas: visitas,
    visitantesUnicos: visitantesUnicos,
    leads: leads,
    planSelects: planSelects,
    conversionPct: Math.round(conversion * 1000) / 10 // 1 decimal
  };
}

/* Hoja "Resumen" con las métricas (se rellena en cada POST). */
function ensureResumen(ss) {
  var sheet = ss.getSheetByName("Resumen");
  if (!sheet) {
    sheet = ss.insertSheet("Resumen", 0); // primera pestaña
    sheet.getRange("A1").setValue("RCM — Resumen de validación").setFontWeight("bold");
  }
  var m = computeMetrics(ss);
  var rows = [
    ["Métrica", "Valor"],
    ["Visitas (page views)", m.visitas],
    ["Visitantes únicos", m.visitantesUnicos],
    ["Leads (formulario)", m.leads],
    ["Selección de plan", m.planSelects],
    ["Conversión a lead", m.conversionPct + "%"],
    ["Actualizado", new Date().toISOString()]
  ];
  sheet.getRange(2, 1, rows.length, 2).setValues(rows);
  sheet.getRange("A2:A8").setFontWeight("bold");
}

/* ---- Helpers ---- */
function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function countRows(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) return 0;
  return Math.max(0, sheet.getLastRow() - 1); // menos el encabezado
}

function countDistinct(ss, name, col) {
  var sheet = ss.getSheetByName(name);
  if (!sheet || sheet.getLastRow() < 2) return 0;
  var values = sheet.getRange(2, col, sheet.getLastRow() - 1, 1).getValues();
  var set = {};
  for (var i = 0; i < values.length; i++) {
    var v = values[i][0];
    if (v) set[v] = true;
  }
  return Object.keys(set).length;
}

function countValueInColumn(ss, name, col, value) {
  var sheet = ss.getSheetByName(name);
  if (!sheet || sheet.getLastRow() < 2) return 0;
  var values = sheet.getRange(2, col, sheet.getLastRow() - 1, 1).getValues();
  var n = 0;
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === value) n++;
  }
  return n;
}
