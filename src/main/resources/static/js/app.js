define("app", [ "backbone", "routers/playerRouter" ], function(Backbone, playerRouter){
    "use strict";
    var App = new ( Backbone.View.extend( {
        events: {
        'click a': function(e){
            e.preventDefault();
            console.log("click");
            console.log(e.target.pathname);
            console.log(e);
            playerRouter.navigate(e.target.pathname, {trigger: true});
            console.log
        }

    },
        start: function(){
            console.log("app start")
            Backbone.history.start();
        }
    }) )( {el: document.body} );
    return App;
});