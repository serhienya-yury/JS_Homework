// --------------------------1----------------
{
let userName = prompt('enter your name');

const person = {
    userName, 
    sayHi(){
        console.log(`Hi ${this.userName}`)
    }
}
person.sayHi();
}

// ----------------2--------------------


{
function func ({a: x, b: y}, z = 1) {
    console.log((x**y)*z);
}

func({a: 2, b: 3}, 2);
}

// ------------------3------------------

{
    const someArr = ['piotr' , 25];
    function getName(name, age){
        console.log(`Hello, I'm ${name} and I'm ${age} years old`);
    }    
    getName(...someArr);
}

// -----------------------4----------------

{
    function func(...arr) {
        for(let i of arr){
            console.log(i);
        }    
    }
    func(7,2,4,5,8);
}

// ----------------------5---------------------

{
    function countLetters (text){
        text = text.toLowerCase().split('');

        let vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
        counter = 0;

        text.forEach(item => vowelLetters.includes(item) && counter++);
        // console.log(counter);
        return counter;
        }

        countLetters('Шла Саша по шоссе И сосала сУшку');

}
// -------------------------------6-----------------------
{
    const arr = [
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]

    function filterArr(arr){

        const userAge = arr.filter(value => value.age < 40);
        const userName = arr.find(value => value.name.includes('Fedor'));

        const objNames = {
            'Пользователи младше 40:': userAge,
                'Пользователь с именем Федор:': userName
        }
        
         return objNames;
    }
    console.log(filterArr(arr));
}

//---------------------------------7----------------------
{
    function transformArr(arr){

        const newArr = arr.map ((value, i) => ({[`user ${i+1}`]: value}));
        return newArr;
    }

    transformArr(['vasia','piotr','dima']);
}
// ------------------------------8--------------------------
{
    let arr = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]
    
    function arrReduce(arr) {

        const newObj = arr.reduce((prev, current) => Object.assign(prev, current));
        return newObj;
    }

    arrReduce(arr);
}
// ------------------------------9------------------

// function Animal(name) {
//     this._foodAmount = 50;
//     this.name = name;
//   }
  
//   Animal.prototype = {

//     _getFormattedFoodAmount : function() {
//         return this._foodAmount + 'гр.';
//     },

//     dailyNorm : function(amount) {
//         if (!arguments.length) return this._foodAmount;
  
//         if (amount < 50 || amount > 500) {
//             return 'Недопустимое количество корма.';
//         }
  
//         this._foodAmount = amount;
//     },

//     feed : function() {
//         return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
//     }
//   }
  
//   function Cat() {
//     Animal.apply(this, arguments);
//   }
  
//   Cat.prototype = Object.create(Animal.prototype);
//   Cat.prototype.constructor = Cat;
  
//   Cat.prototype.feed = function () {
//     var result = Animal.prototype.feed.apply(this, arguments);
//         return result + ' Кот доволен ^_^';
//   }
  

{  
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }
  
        _getFormattedFoodAmount() {
            return `${this._foodAmount} гр.`;
        }
  
        dailyNorm(amount) {
            if (!arguments.length) return this._foodAmount;
  
            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }
            this._foodAmount = amount;
        };
  
        feed() {
            return `Насыпаем в миску ${this._getFormattedFoodAmount()} корма.`;
        };
    }
  
    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
  
        feed() {
            return (`${super.feed()} Кот доволен ^_^`);
        }
    }
    var barsik = new Cat('Барсик');
    console.log(barsik.name);
    console.log(barsik.dailyNorm(600));
    console.log(barsik.feed());
  
}  

