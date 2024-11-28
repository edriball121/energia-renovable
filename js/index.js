//Muestra con datos del CSV
//Nota: Se intento cargar el CSV desde el archivo pero las nuevas politicas de Cors
//No permiten hacer llamados a archivos directamente, se requeriria montar los datos
//En un servidor, pero el alcance de la pagina no lo requiere.
const csvData = `
Pais,Año,Renovables %
Colombia,2000,29.556067
Colombia,2001,30.604485
Colombia,2002,32.692554
Colombia,2003,33.389133
Colombia,2004,34.505455
Colombia,2005,35.05353
Colombia,2006,34.14272
Colombia,2007,35.182762
Colombia,2008,33.94141
Colombia,2009,31.377745
Colombia,2010,30.092037
Colombia,2011,34.515675
Colombia,2012,31.746134
Colombia,2013,29.385107
Colombia,2014,28.364685
Colombia,2015,28.021618
Colombia,2016,27.708813
Colombia,2017,32.82906
Colombia,2018,31.99955
Colombia,2019,29.890343
Colombia,2020,30.772787
Colombia,2021,33.02041
`;

function parseCSV(data) {
  const rows = data.trim().split('\n').map(row => row.split(','));
  return rows;
}

function generateTable() {
  const data = parseCSV(csvData);
  const table = document.getElementById('data-table');

  const headers = data[0];
  const thead = table.querySelector('thead');
  const headerRow = document.createElement('tr');

  headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  const tbody = table.querySelector('tbody');
  data.slice(1).forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
      });
      tbody.appendChild(tr);
  });
}

generateTable();
document.addEventListener("DOMContentLoaded", () => {
  console.log("El sitio está completamente cargado.");
});