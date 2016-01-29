var PlayerList = Backbone.Collection.extend({

    //localStorage: new Backbone.LocalStorage("PlayerLocalStore"),

    model: Player,



    url : '/player',
    parse: function(response){
        delete response._links;
        this.size = response.page.size;
        /*
        this.totalElements = response.page.totalElements;
        this.totalPages = response.page.totalPages;
        this.number = response.page.number;
        */
        return response._embedded.players;
    }

});