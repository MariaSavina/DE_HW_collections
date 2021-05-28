var ITree = require('./Itree')

var BStree=function() {
    this.root=null;
    this.Node=function(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
    this.insertNode=function(node){
        if(node.value<this.value){
            if(this.left === null){
                this.left = node
            }
            else{
                this.left.insertNode(node)
            }
        }
        else{
            if(this.right === null){
                this.right = node
            }
            else{
                this.right.insertNode(node)
            }
        }
    }
}

BStree.prototype=Object.create(ITree.prototype)
BStree.prototype.constructor=BStree  

BStree.prototype.init = function(array){
    if(!array){
        return
    }
    
    for(var i=0; i<array.length; i++){
        this.insert(array[i])
    }
};

BStree.prototype.clear = function(){}; 

BStree.prototype.size = function(){}; 

BStree.prototype.insert = function(value){
    var newNode=new this.Node(value)
    if(this.root==null){
        this.root=newNode
    }
    else{
        this.insertNode(newNode)
    }
}; 

BStree.prototype.print = function(node, callback){}; 
BStree.prototype.toArray = function(){}; 
BStree.prototype.search = function(value){}; 
BStree.prototype.width = function(){}; 
BStree.prototype.height = function(){}; 
BStree.prototype.nodes = function(){}; 
BStree.prototype.leaves = function(){}; 
BStree.prototype.reverse = function(){}; 
BStree.prototype.minNode = function(){}; 
BStree.prototype.maxNode = function(){};
BStree.prototype.remove = function(value){}; 

let tree = new BStree().init([1,7,3,8,-2])

console.log(tree)