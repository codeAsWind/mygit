!function (){

String.prototype.isStartWith = function (char){
    if(typeof(char) !== 'string'){
        alert(char + ' is not string')
        return;
    }
    return this.indexOf(char) == 0 ? true : false;
}

String.prototype.isEndWith = function (endchar){
    return this.indexOf(endchar) == this.length -1 ? true : false;
}

Array.prototype.inArr = function (item){
    for (var i = 0; i < this.length; i++){
        if(this[i] === item){
            return true;
        }
    }
}

    var a = 'abcdefghijklmn';


    console.log(a.isStartWith('n'));
    console.log(a.isEndWith('n'));

}();