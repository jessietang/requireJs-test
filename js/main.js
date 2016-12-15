/**
 * Created by jessietang on 12/14/2016.
 */
require.config({
    /*通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，
     就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库*/
    /*注意配置模块的路径时没有.js后缀*/
    baseUrl: "js/lib",
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore",
        "comp1": "../components/comp1",/*这个路径是相对于baseUrl来的*/
        "comp2": "../components/comp2",
        "bootstrap": "bootstrap.min",
        "backbone":"backbone-min.js"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "underscore":{
            exports: "_"
        },
        "bootstrap":["jquery"], /*bootstrap.js依赖于jquery  这里是简写写法，
        等价于 "bootstrap":{deps:["jquery"]}*/
        "backbone":{
            deps: ['underscore','jquery'],
            exports:'Backbone' /*外部调用还是用backbone这个名字，而不是用Backbone名字*/
        }
    }
});