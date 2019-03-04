// ----------------------№1----------------------
function Animal(name) {

    var self = this;
    var foodAmount = 50;

    this.name = name;
    this._getFormattedFoodAmount = function() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        foodAmount = amount;
    };

    this.feed = function() {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}

function Cat() {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;
    this.feed = function () {
        return animalFeed() + ' Кот доволен ^_^';
    }
}


var barsik = new Cat('Барсик');
console.log(barsik.dailyNorm(100));
console.log(barsik.feed());


// ----------------------№2----------------------
function Cat(name) {
    var foodAmount = 50;
  
    function getFormattedFoodAmount() {
        return foodAmount + 'гр.';
    }
  
    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;
  
        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
  
        foodAmount = amount;
    };
  
    this.name = name;
  
    this.feed = function() {
        console.log('Насыпаем в миску ' + getFormattedFoodAmount() + ' корма.');
        return this;
    };
    this.stroke = function () {
      console.log("Гладим кота.");
      return this;
    }
  }
  
  var barsik = new Cat('Барсик');
  
  barsik.feed().stroke().stroke().feed().stroke();
  