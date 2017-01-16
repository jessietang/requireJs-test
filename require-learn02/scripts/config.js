/**
 * Created by jessietang on 1/16/2017.
 */
require.config({
    baseUrl: 'scripts/lib', /* 默认情况下模块所在目录为scripts/lib */
    paths: { /*好像之前一直加载jquery.js， 是因为我把paths写成了path，我的天哇！！！*/
        app: '../app',
        jquery: 'jquery.min',
        bootstrap: 'bootstrap.min'
    },
    shim: {  /*这里说白了就是申明依赖*/
        "jquery": {
            exports: "$"
        },
        "bootstrap": ['jquery']
    },
    map : {
    },
    waitSeconds : 0
});