!function (window,$,document,undefind) {

$.fn.tab = function () {

    this.each(function (){

        var $this = $(this),
            evt = $this.attr('data-hover') || 'click',
            $lis = $this.find('ul li'),
            $divs = $this.find('div>div'),
            timer;
         $lis.on(evt,function (){
            var $this = $(this),
                index = $this.index();
                if(evt == 'mouseover'){
                    timer = setTimeout(function (){
                        doevent();
                    },500);
                    $lis.on('mouseout',function (){
                    clearTimeout(timer);
                    });
                }else {
                    doevent();
                }
            function doevent(){
            $this.addClass('active').siblings('.active').removeClass('active');
            $divs.eq(index).show().siblings().hide();
            }
        });
    });
};
} (window,jQuery,document);



