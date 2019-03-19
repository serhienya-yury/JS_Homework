var buttonCreate = document.getElementById('buttonAppearOfChessBoard');
var container = document.getElementById('container');
var containerChild_p = container.getElementsByTagName('p');
var containerInput =  container.getElementsByTagName('input');


x.onblur = function() {
  if (isNaN(this.value) || this.value > 10) { 
    this.classList.add("error");
    x.focus();
  } else {
    this.classList.remove("error");
  }
};
y.onblur = function() {
  if (isNaN(this.value) || this.value > 10) { 
    this.classList.add("error");
    y.focus();
  } else {
    this.classList.remove("error");
    buttonCreate.disabled = false;
  }
};





buttonCreate.addEventListener('click', appearChessBoard);

function appearChessBoard() {
  var chessBoard = document.getElementById('chessBoard');

  if(chessBoard.style.display == 'none'){
      chessBoard.style.display = 'block'; 
  }else{
      chessBoard.style.display = 'none';   
  }
}



// function isNumeric(x) {
//     return !isNaN(parseFloat(x)) && isFinite(x);
// }


// for(var i = 0; i < containerInput.length; i++){
//     var value = containerInput[i];
//     value.onblur = function(){
//         if(!isNumeric(this.value) || this.value > 10){
//             this.classList.add('error');
//             value.focus();
//         }else{
//             this.classList.remove('error');
//         }
//           buttonCreate.disabled = false;
//     }
// }
    


// var elem = document.querySelectorAll('#chessBoard > div:nth-of-type(2n+1) > div:nth-of-type(2n+2)');
// console.log(elem);

// chessBoard.onclick = function (event){
//     var target = event.target;
//     while(target != this) return;
    
//      elem.style.backgroundColor = 'red'; 
    
// }








// -----------------------2---------------------------


var tr_addRow = document.getElementById('addRow');
var table = document.getElementsByTagName('tbody')[0];



tr_addRow.addEventListener('click', addRow);

function addRow(){
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>'
    table.insertBefore(newRow, table.children[0]);
}


