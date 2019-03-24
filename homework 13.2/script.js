var table = document.getElementsByTagName('tbody')[0];
table.addEventListener('click', addFocusInput);

function addFocusInput (e){
  var target = e.target;

  if(target.tagName == "TD" && !target.hasAttribute('colspan')){

      target.innerHTML = '<input type="text" value="">';
      target.getElementsByTagName("input")[0].focus();
  }

    target.getElementsByTagName('input').onblur = function () {

      var input = target.getElementsByTagName('input')[0];
      var text = input.value;

      target.innerHTML = text;
      input.parentNode.removeChild(input);
    }
}

var tr_addRow = document.getElementById('addRow').addEventListener('click', addRow);

function addRow () {
    var newRow = document.createElement('tr');

    newRow.innerHTML = '<td></td><td></td><td></td>';
    table.insertBefore(newRow, table.children[0]);
}