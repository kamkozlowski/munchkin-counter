var PlayerRouter = new (Backbone.Router.extend({
    routes: {
        "":"player",
        "player(/:id)": "player",
        "playerTable": "playerGrid"
    },
    initialize: function () {
        console.log('initialize');
        this.playerList = new PlayerList();
        this.playerList.fetch();

    },
    start: function () {
        console.log('start');

    },
    player: function (id) {
        console.log('player function');
        if (id == null) {
            this.playerListView = new PlayerListView({collection: this.playerList});
            this.playerListView.render();
            $('#content').html(this.playerListView.el);
        }
        else {
            var playerEditView = new PlayerEditView({model: this.playerList.get(id)});
            playerEditView.render();
            $('#content').html(playerEditView.el);
        }
    },
    playerGrid : function(){
        console.log("player gird");
        var playerGridView = new PlayerGridView({collection: this.playerList});
        playerGridView.render();
        $('#content').html(playerGridView.el);
    }
}));