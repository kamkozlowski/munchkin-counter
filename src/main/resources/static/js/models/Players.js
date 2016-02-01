var PlayerList = Backbone.Collection.extend({

    //localStorage: new Backbone.LocalStorage("PlayerLocalStore"),

    model: Player,

    url : '/player',
    parse: function(response){
        delete response._links;
        this.size = response.page.size;
        console.log("collection size: " + this.size);
        this.totalElements = response.page.totalElements;
        this.number = response.page.number;
        this.totalPages = response.page.totalPages;
        return response._embedded.players;
    }

});