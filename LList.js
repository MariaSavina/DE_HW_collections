var IList = require('./IList')

var LList=function(capacity){
    IList.call(this, capacity)
    this.size=0
    this.root = null;
    this.Node = function (value) {
      this.value = value;
      this.next = null;
    };
}

LList.prototype = Object.create(IList.prototype)
LList.prototype.constructor=LList

LList.prototype.clear = function () {};
LList.prototype.getSize = function () {}; 
LList.prototype.add = function (value) {}; 
LList.prototype.set = function (value, index) {}; 
LList.prototype.get = function (index) {}; 
LList.prototype.remove = function (value) {}; 
LList.prototype.toArray = function () {}; 
LList.prototype.toString = function () {}; 
LList.prototype.contains = function (value) {}; 
LList.prototype.minValue = function () {}; 
LList.prototype.maxValue = function () {}; 
LList.prototype.minIndex = function () {}; 
LList.prototype.maxIndex = function () {}; 
LList.prototype.reverse = function () {}; 
LList.prototype.halfReverse = function () {}; 
LList.prototype.retainAll = function (array) {}; 
LList.prototype.removeAll = function (array) {}; 
LList.prototype.sort = function () {}; 
LList.prototype.print = function () {};