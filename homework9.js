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
