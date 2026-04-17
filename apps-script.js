// Shift4 Field Research — Google Sheets Apps Script
// Paste this into Extensions → Apps Script in a blank Google Sheet, then Deploy → New deployment → Web app.
// "Execute as: Me" and "Who has access: Anyone" (the URL itself is the secret).
//
// Sheet columns (A-T): Timestamp | Restaurant | Type | Year Est | Locations | Address
// | POS System | Satisfaction | Years on POS | Contract Ends
// | Pain Points | Integrations | Monthly Volume | Wish List
// | Mgr Name | Mgr Title | Mgr Phone | Mgr Email | Best Follow-up | My Notes

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Auto-write a header row on first use
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp','Restaurant','Type','Year Est','Locations','Address',
      'POS System','Satisfaction','Years on POS','Contract Ends',
      'Pain Points','Integrations','Monthly Volume','Wish List',
      'Mgr Name','Mgr Title','Mgr Phone','Mgr Email','Best Follow-up','My Notes'
    ]);
    sheet.getRange(1, 1, 1, 20).setFontWeight('bold').setBackground('#0A2540').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    e.parameter.timestamp || new Date().toISOString(),
    e.parameter.rest_name || '',
    e.parameter.rest_type || '',
    e.parameter.year_established || '',
    e.parameter.num_locations || '',
    e.parameter.address || '',
    e.parameter.pos_system || '',
    e.parameter.satisfaction || '',
    e.parameter.years_on_pos || '',
    e.parameter.contract_end || '',
    e.parameter.pain_points || '',
    e.parameter.integrations || '',
    e.parameter.monthly_volume || '',
    e.parameter.wish_list || '',
    e.parameter.mgr_name || '',
    e.parameter.mgr_title || '',
    e.parameter.mgr_phone || '',
    e.parameter.mgr_email || '',
    e.parameter.best_followup || '',
    e.parameter.my_notes || ''
  ]);

  return ContentService.createTextOutput('OK');
}
