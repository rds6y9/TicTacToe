var restart = document.querySelector('#b');
var square = document.querySelectorAll("td");

function clearBoard() {
  console.log("Board was cleared.");
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);

function changeMarker() {
  if(this.textContent === '') {
    this.textContent = 'X';
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click', changeMarker);
}
