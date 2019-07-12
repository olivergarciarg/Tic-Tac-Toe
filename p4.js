var restart = document.querySelector('#restart');

var squares = document.querySelectorAll('td')

squares.forEach(function(square){
  square.addEventListener('click',function(){
    this.textContent = "X";
  })
  square.addEventListener('dblclick',function(){
    this.textContent = "O";
  })
})

function clearBoard(){
  squares.forEach(function(square){
    square.textContent = "";
  })
}

restart.addEventListener('click',clearBoard)
