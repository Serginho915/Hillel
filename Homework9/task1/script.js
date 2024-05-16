const getTable = (table, rows = 10, cols = 10, currentRow = 1) => {
  if (currentRow > rows) return;
  const row = document.createElement('tr');

  for (let i = 1; i <= cols; i++) {
    const col = document.createElement('td');
    col.textContent = currentRow * i;
    row.appendChild(col);
  }
  
  table.appendChild(row);
  getTable(table, rows, cols, currentRow + 1);
}

const table = document.getElementById('table');
getTable(table, 10, 10);

table.style.borderCollapse = 'collapse';
table.style.border = '1px solid #999';
table.style.textAlign = 'center'

const cells = document.querySelectorAll('td');
cells.forEach(cell => {
  cell.style.border = '1px solid #999';
  cell.style.padding = '10px 15px'
});
