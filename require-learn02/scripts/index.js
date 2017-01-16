/**
 * Created by jessietang on 1/16/2017.
 */
require(['./config'], function(){ /* ./config是相对于index.js */
    // 根据config里面的配置，这里的app应该指的是文件夹，so应该是  ../app/global, 也是相对于baseUrl的
    require(['app/global']);


    require([
        'jquery',
        'bootstrap'
    ], function($, bootstrap){
        $('#myCarousel').carousel();
    });
});