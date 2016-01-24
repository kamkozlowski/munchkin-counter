var MunchkinApp = new (Backbone.Router.extend({
    routes: { "" : "index", "edit/:id": "editPlayer"},
    initialize: function(){
        console.log('initialize');
        this.playerList = new PlayerList();
        this.playerList.fetch();


    },
    start: function(){
        console.log('start');
        Backbone.history.start();
    },
    index: function(){
        console.log('index');

        this.playerListView = new PlayerListView({collection : this.playerList});
        this.playerListView.render();
        $('#players').html(this.playerListView.el);

    },
    editPlayer: function(id){
        console.log('edit player1');
        var playerEditView = new PlayerEditView({model : this.playerList.get(id)});
        playerEditView.render();
        $('#players').html(playerEditView.el);
    }
}));