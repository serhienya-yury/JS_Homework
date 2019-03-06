function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
  }
  Animal.prototype = {
    _getFormattedFoodAmount : function() {
        return this._foodAmount + 'гр.';
    },
    dailyNorm : function(amount) {
        if (!arguments.length) return this._foodAmount;
  
        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
  
        this._foodAmount = amount;
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


var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};
console.log(initialObj);


function clone(obj) {
    var new_obj = Array.isArray(obj) ? [] : {};

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



var copyObj = clone(initialObj);
copyObj.object.object2.array2[1].name = 'Vasya';
copyObj.array.push(2);
console.log(copyObj);
