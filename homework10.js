// ----------------------------1-------------------------
function isPalindrome (str) {
    var reverseStr = str.split('').reverse().join('').toUpperCase(); 
    return str.toUpperCase() == reverseStr;
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

// ----------------------------2-------------------------

function isAnagram (strFirst, strSecond) {
    return strSecond == strFirst.split('').reverse().join('');
}
console.log(isAnagram('кот', 'ток'));
console.log(isAnagram('кот', 'атк'));
console.log(isAnagram('кот', 'отко'));

// ----------------------------3-------------------------

function divideArr (arr, numderOfElementsInArray) {
    var newArray = [];
    while(arr.length !== 0){
        var elem = arr.splice(0, numderOfElementsInArray);
        newArray.push(elem);
    }
    return newArray;    
}
console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5], 3));

// ----------------------------4-------------------------

var str = 'test text eu';

function countOfSymbols (str) {
    
    var count = 0;

    for(var i = 0; i < str.length; i++){
      if(str[i].toLowerCase() == 'a' 
            || str[i].toLowerCase() == 'i' 
            || str[i].toLowerCase() == 'o' 
            ||str[i].toLowerCase() == 'e' 
            ||str[i].toLowerCase() == 'u'){
        count++;
      }
    }
   return count;
  }
console.log(countOfSymbols(str));  

