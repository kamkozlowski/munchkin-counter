require.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        'backbone':{
            deps:['jquery'],
            exports:'Backbone'
        }
    },
    paths: {
        "backbone": "../lib/backbone/backbone",
        jquery: "../lib/jquery/jquery",
        bootstrap: "../lib/bootstrap/js/bootstrap",
        bootstrap: "../lib/underscore/underscore",
        "mustache": "../lib/mustache/mustache",
    }
});

require(["app", "bootstrap"], function (app,bootstrap) {
    app.start();
});