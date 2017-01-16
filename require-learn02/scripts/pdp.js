/**
 * Created by jessietang on 1/16/2017.
 */
require(['./config'], function(){
    require(['app/global']);
    require(['jquery','bootstrap'], function($,bootstrap){
        $(function(){
            $(document).on('click','.pdp .pro-list .pro-title', function(){
                alert($(this).text());
            });
        });
    });
});