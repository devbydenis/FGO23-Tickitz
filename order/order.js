function createSeatLayout(colStart, colEnd, id) {
  document.getElementById(id)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  // const cols = 14;

  // Loop untuk membuat baris
  for (let i = 0; i < rows.length; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'seat-row';

      // perulangan buat bikin kursi dalam satu baris
      // <div>
      //      <input type="checkbox" id="A1" />
      //      <label for="A1">A1</label>
      // </div>
      for (let j = colStart; j <= colEnd; j++) {
          const seatDiv = document.createElement('div');
          seatDiv.className = 'seat';

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `${rows[i]}${j}`;

          const label = document.createElement('label');
          // label.textContent = `${rows[i]}${j}`;
          label.setAttribute("for", `${rows[i]}${j}`)

          seatDiv.appendChild(checkbox);
          seatDiv.appendChild(label);
          rowDiv.appendChild(seatDiv);
      }

      document.getElementById(id).appendChild(rowDiv);
  }
}

createSeatLayout(1, 7, 'left-seats')
createSeatLayout(8, 14, 'right-seats')
