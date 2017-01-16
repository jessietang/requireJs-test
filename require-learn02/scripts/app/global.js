/**
 * Created by jessietang on 1/16/2017.
 */

define(function(require){
    require([
        'jquery',
        'bootstrap'
    ], function($){
        var $document = $(document);

        $document.on('click', '.header-link', function(e){
            var e = e || window.event;
            e.preventDefault();
            alert('i am header link');
        });
    })
});