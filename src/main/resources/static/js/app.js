var App = new ( Backbone.View.extend( {

    events: {
    'click a': function(e){
        e.preventDefault();
        console.log("click");
        console.log(e.target.pathname);
        console.log(e);
        PlayerRouter.navigate(e.target.pathname, {trigger: true});
    }
},
start: function(){
    Backbone.history.start();
}
}) )( {el: document.body} );