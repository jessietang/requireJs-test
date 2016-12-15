/**
 * Created by jessietang on 12/14/2016.
 */

require(["jquery","comp1","comp2","bootstrap"], function($){
    $(function(){
        $('.tabNav li').click(function(){
            var _this = $(this);
            _this.addClass('active').siblings().removeClass('active');
            $('.div1').eq(_this.index()).show().siblings('.div1').hide();
        });

        //模态框
        $('#myModal').modal({
            keyboard: true
        });

        $('body').append('<div class="jq-top" style="display:none;cursor:pointer;width:50px;height:50px;text-align:center;line-height:50px;position:fixed;right:0;bottom:0;color:#fff;background-color: red;">top</div>');
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 100){
                $('.jq-top').show();
            }else{
                $('.jq-top').hide();
            }
        });
        $(document).on('click','.jq-top',function(){
            $('html,body').animate({
                "scrollTop": 0
            },300);
        });
    });
});

