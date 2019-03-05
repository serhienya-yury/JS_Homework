function Animal(name) {
    this.foodAmount = 50;
    this.name = name;
}
Animal.prototype = {
    _getFormattedFoodAmount : function() {
        return this.foodAmount + 'гр.';
    },
    dailyNorm : function(amount) {
        if (!arguments.length) return this.foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this.foodAmount = amount;
    },
    feed : function() {
        return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
    }
}

function Cat() {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    var result = Animal.prototype.feed.apply(this, arguments);
        return result + ' Кот доволен ^_^';
}


 
var barsik = new Cat('Барсик');
console.log(barsik.name);
console.log(barsik.dailyNorm(100));
console.log(barsik.feed());


// ----------------------------------2------------------------


var obj = {
    name: 'kot',
    age: 11,
    food: {
        milk: true,
        meat: 'yes',
        beer: {
            white: true,
            black: false
        }
    },
    arr : [1, 2, 3, [1.1, 2.1, [3.2], 3.1], 4]
}

function clone(obj) {
    obj = obj || this;
    var new_obj  = {};

    for( var key in obj ) {
      if ( obj.hasOwnProperty(key) ) {
        if( obj[key] !== null && typeof(obj[key]) === "object" ) {
          new_obj[key] = clone( obj[key] );
        }
        else {
          new_obj[key] = obj[key];
        }
      }
    }

    return new_obj;
  };

  var qwe = clone(obj);
  qwe.age = 25;
  qwe.food.meat = 'qwert';
  console.log(qwe);
