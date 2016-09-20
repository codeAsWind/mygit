
function extend(child,parent){
    var NullFn = function () {};
    NullFn.prototype = parent.prototype;
    child.prototype = NullFn.prototype;
    child.prototype.constructor = child;
}


function DiaLog (obj){
    this.title = obj.title || '对话框';
    this.content = obj.content || '';
    this.cancleBtn = obj.cancleBtn || false;
    this.clsBtn = obj.clsBtn || true;
    this.acBtn = obj.acBtn || true;
    this.masker = obj.masker || true;
}

DiaLog.prototype = {
    show: function (){
        var dlgWp = document.getElementById('dlgWp'),
            html,
            divWpStyle,
            closeBtn,
            cancleBtn,
            dlgDiv;
        if(!dlgWp){
            dlgDiv = document.createElement('div');
            dlgDiv.id = 'dlgWp';
            html = [
                '<div id="dlgWpStyle">',
                this.clsBtn ? '<i id="closeBtn">X</i>' : '',
                '<div class="dlg-header">',this.title,'</div>',
                '<div class="content">',this.content,'</div>',
                '<div class="dlg-footer">',
                    this.acBtn ? '<button class="footBtn confirmBtn">确定</button>' : '',
                    this.cancleBtn ? '<button id="cancleBtn" class="footBtn">取消</button>' : '',
                '</div>',
                '</div>',
                this.masker ? '<div class="masker"></div>' : ''
            ];
            dlgDiv.innerHTML = html.join('');
            document.body.appendChild(dlgDiv);
            dlgWp = document.getElementById('dlgWp');
            divWpStyle = document.getElementById('dlgWpStyle');
        }
        dlgWpStyle.style.display = 'block';
        closeBtn = document.getElementById('closeBtn');
        cancleBtn = document.getElementById('cancleBtn');
        closeBtn.onclick = function (){
             dlgWp.style.display = 'none';
        }
        cancleBtn.onclick = function (){
             dlgWp.style.display = 'none';

        }
    }
}

function Cfm (obj) {
    this.title = obj.title || '选择框';
    this.cancleBtn = obj.cancleBtn;
    this.content = obj.content || '点击确认提交，点击取消返回当前面!';
    this.clsBtn = obj.clsBtn || true;
    this.acBtn = obj.acBtn || true;
    this.masker = obj.masker || true;
}

var NulFn = function (){};
extend(Cfm,DiaLog);
