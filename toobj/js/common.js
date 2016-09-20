    window.onload = function (){

    var dlg1 = new DiaLog({
        title : '我的对话框',
        content : '对话框在此',
        clsBtn : true,
        acBtn : true,
        masker: true,
        cancleBtn: false
    });

    var cfm1 = new Cfm({
        title:"请选择确定或取消",
        content:"确定吗？",
        clsBtn : true,
        acBtn : true,
        masker: true,
        cancleBtn: true
    });


    var showBtn = document.getElementById('show'),
        mesBtn = document.getElementById('mes');
        showBtn.onclick = function (){
            console.log(dlg1)
            dlg1.show();

        }
        mesBtn.onclick = function (){
            cfm1.show();
        }
    }