require.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        'backbone':{
            deps:['jquery', 'underscore' +
            ''],
            exports:'Backbone'
        }
    },
    paths: {
        "backbone": "../lib/backbone/backbone",
        jquery: "../lib/jquery/jquery",
        bootstrap: "../lib/bootstrap/js/bootstrap",
        "underscore": "../lib/underscore/underscore",
        "mustache": "../lib/mustache/mustache",
    }
});

require(["app", "bootstrap"], function (app,bootstrap) {
    app.start();
});