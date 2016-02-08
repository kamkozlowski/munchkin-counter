require.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        'backbone':{
            deps:['jquery', 'underscore' +
            ''],
            exports:'Backbone'
        },
        "bootstrap-notify" : { "deps" : ['bootstrap'] }
    },
    stache: {
        extension: '.mustache',
        path: 'templates/'
    },
    paths: {
        "backbone": "../lib/backbone/backbone",
        jquery: "../lib/jquery/jquery",
        bootstrap: "../lib/bootstrap/js/bootstrap",
        "underscore": "../lib/underscore/underscore",
        "mustache": "../lib/mustache/mustache",
        "notify": "../lib/notify/bootstrap-notify",
        stache: 'stache',
        text: 'text'
    }
});

require(["app", "bootstrap"], function (app,bootstrap) {
    app.start();
});