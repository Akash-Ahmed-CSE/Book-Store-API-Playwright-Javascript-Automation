const xlsx = require('xlsx');

function readUsersFromExcel(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);
  return data; // [{ username: 'B123', password: 'Test123#' }, ...]
}

module.exports = { readUsersFromExcel };
