var obj = {
    name_one: 'Vasya',
    name_two: 'Piotr',
    name_three: 'Fedya',
    name_four: 'Piotr'
  }

function return_newObj (obj) {

    var newObj = {};
    var arr = [];

    for(var key in obj){
        arr.push(obj[key]);
        var num = obj[key].length;
        key = key + '_length';
        newObj[key] = num;
    }

    var allValue = []; 

    for (var i = 0; i < arr.length; i++) { 
      allValue[arr[i]] = (allValue[arr[i]] || 0) + 1;

      var dublicateValues = {};
      
      for(var key in allValue){
        if(allValue[key] > 1){
          dublicateValues[key] = allValue[key] + ' раз(а)';
        }
      }
    } 

newObj['Дублирующиеся значения'] = dublicateValues;
  return newObj;
}
console.log(return_newObj(obj));























