var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
xhr.send();

var elem = document.getElementById('container_item');

var button = document.getElementsByTagName('button')[0];


if (xhr.status == 200) {
    alert( xhr.status + ': ' + xhr.statusText ); 
} else {
    
    button.onclick = function(){
        elem.style.display = 'block';
    }
    
    xhr.onload = function(){
    
    localStorage.setItem('dataObj', JSON.stringify(JSON.parse(this.response)));
    var parseObj = JSON.parse(localStorage.getItem('dataObj'));
    
    console.log(parseObj);
    
    for(var i = 0; i < elem.children.length; i++){
        elem.children[i].appendChild(document.createElement('img')).src = parseObj.data[i].avatar;
        elem.children[i].appendChild(document.createElement('p')).textContent = 'First Name: ' + parseObj.data[i].first_name;
        elem.children[i].appendChild(document.createElement('p')).textContent = 'Last Name: ' + parseObj.data[i].last_name;
        elem.children[i].appendChild(document.createElement('a')).textContent = 'user ' + (i + 1);
        elem.getElementsByTagName('a')[i].classList.toggle('links');
        }
    
        elem.addEventListener('click', addZ_index);
        function addZ_index(event){
            var target = event.target;
            if(target.tagName === 'A'){
                target.parentElement.classList.toggle('addZindex');
            };
        }
    }
}







