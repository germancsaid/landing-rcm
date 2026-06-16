/* ========================================================================
   RCM — Google Apps Script (Web App) para la landing de validación.
   Recibe POST de la landing y los guarda en dos hojas:
     - "Leads"   → registros de formulario y elección de plan
     - "Eventos" → analítica (page_view, scroll_depth, cta_click, etc.)
   Si las hojas no existen, las crea con sus encabezados.
   ======================================================================== */

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);
  var type = data.type || data.event || "";

  // Los leads y elección de plan son la conversión core.
  var esLead = type === "lead" || type === "plan_select";

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

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}
