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



}(window,document);