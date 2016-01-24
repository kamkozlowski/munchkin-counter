var PlayerList = Backbone.Collection.extend({

    //localStorage: new Backbone.LocalStorage("PlayerLocalStore"),

    model: Player,



    url : '/player',
    parse: function(response){
        delete response._links;
        return response._embedded.players;
    }

});