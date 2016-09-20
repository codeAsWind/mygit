!function (window,$,document,undefind) {

$.fn.tab = function (attr) {
    var defaul = {
        method: 'click'
    }
$.extend(defaul,attr);
    this.attr(defaul);
    var evt = this.attr('method'),
        $lis = this.find('ul li'),
        $divs = this.find('div>div'),
        timer;

    evt = evt == 'hover' ? 'mouseover' : evt;
        $lis.on(evt,function(){
            var $this = $(this);
            index = $this.index();
            if(evt == 'mouseover'){
            timer = setTimeout(function(){
                mouseon();
            },500);
            $lis.on('mouseout',function (){
                clearInterval(timer);
            });
        }else {
            mouseon();
        }
        function mouseon () {
            $this.addClass('active').siblings('.active').removeClass('active');
            $divs.eq(index).show().siblings().hide();
        };
    });
};
} (window,jQuery,document);
$('#tabWp').tab({method:'hover'});

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

