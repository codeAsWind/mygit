!function (window,document,undefined){

MyTools = {};

//start dom tools
MyTools.domId = function (Id){
    return document.getElementById(Id);
};

MyTools.domCls = function (clsName,context){
    var context = context || document.body,
        elms = context.getElementsByTagName('*'),
        classArr = [],
        resluArr = [];
        for(var i = 0; i < elms.length; i++){
            classArr = elms[i].className.split(' ');
        if(MyTools.isInArr(classArr,clsName)){
            resluArr.push(elms[i]);
        }
        }
        return resluArr;
}

//end dom tools

// start data tools

MyTools.dateArr = function (date){
    var y,M,d,h,m,s;
    y = date.getFullYear();
    M = date.getMonth() -1;
    d = date.getDate();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    return [y,M,d,h,m,s];
}

MyTools.fmtDate = function (date,onlyYmd){
    var y,M,d,h,m,s;
    y = date.getFullYear();
    M = MyTools.add0(date.getMonth() -1);
    d = MyTools.add0(date.getDate());
    h = MyTools.add0(date.getHours());
    m = MyTools.add0(date.getMinutes());
    s = MyTools.add0(date.getSeconds());

    if(onlyYmd){
    return y + '年' + M + '月' + d + '日';

    }else {
    return y + '年' + M + '月' + d + '日 ' + h +':' + ':' + m + ':' + s;
    }
}
MyTools.add0 = function (num){
    return num = num < 10 ? "0"+ num : num;
}

//end date tools

//start string tools

MyTools.isStartWith = function (str,char){
    if(str.indexof(char) == 0){
        return true
    }
    return false;
}

//end string tools

//start Array tools

MyTools.isInArr = function (arr,memb){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == memb){
            return true;
        }
    }
    return false;
}


////////////////////////////////////////////////
var array = ['1','2','2','3','4','4','5','a','b','a'];

/*    function noRepeatArray(Array){
        var array1 = [];
        for (var i = 0; i < Array.length;i++){
            if(!indexof(Array[i],array1)){
                array1.push(Array[i]);
            }
           }

        return array1;
    }
    function indexof(a,array2){
        for(var i = 0;i < array2.length;i++){
            if(a === array2[i]){
                return true;
            }
        }
    }

var newArray = noRepeatArray(array);
console.log(newArray);*/

/*function objNoRepeat (Array) {
    var obj = {},i = 0,len = Array.length,x;
    for (; i < len; i++){
        obj[Array[i]] = Array[i];
    }
        Array.length = 0;

        for( x in obj){
            Array.push(obj[x]);
        }
        return Array;
}

var array2 = objNoRepeat(array);
console.log(array2);*/

/*Array.prototype.noRp = function (){
    var arr1 = [];
    this.sort();
    arr1.push(this[0]);
    for (var i= 1; i < this.length; i++){
        if(this[i] !== arr1[arr1.length -1]){
            arr1.push(this[i]);
        }
    }
    return arr1;
}
var a = ['a','b','c','d','a'];*/

/*Array.prototype.noRepeat2 = function (){
    var arr1 = [],len = this.length;

    for (var i = 0 ;i < len; i++){

        if(!indexof(this[i],arr1)){
            arr1.push(this[i])
        }
    }
    function indexof(a,array2){
        for(var i = 0;i < array2.length;i++){
            if(a === array2[i]){
                return true;
            }
        }
    }
    return arr1;
}

var a = ['a','b','c','d','a'];
console.log(a.noRepeat2());*/

/*function noRepeat (arr) {
    var array1 = [],i = 0,len = arr.length;
    for (; i < len; i++){
        if(!indexOf(arr[i],array1)){
            array1.push(arr[i]);
        }
    }
    return array1;
}
function indexOf(a,arr1){
    for(var i = 0; i < arr1.length;i++){
        if(a === arr1[i]){
            return true;
        }
    }
}*/

/*function noRepeat (arr){
    var obj = {},i = 0,len = arr.length,key;
    for (;i < len; i++){
        obj[arr[i]] = arr[i];
    }
    arr.length = 0;
    for(key in obj){
        arr.push(obj[key]);
    }
    return arr;
}*/

Array.prototype.noRepeat = function (){
    var array1 = [],i = 0, len = this.length;
    for (; i < len; i++){
        if(array1.indexof(this[i]) < 0){
            array1.push(this[i]);
        }
    }
}

var newArray = noRepeat(array);
console.log(newArray)


}(window,document);