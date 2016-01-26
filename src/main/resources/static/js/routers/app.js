var MunchkinApp = new (Backbone.Router.extend({
    routes: {
        "player(/:id)": "player"
    },
    initialize: function () {
        console.log('initialize');
        this.playerList = new PlayerList();
        this.playerList.fetch();

    },
    start: function () {
        console.log('start');
        Backbone.history.start();
    },
    player: function (id) {
        console.log('player function');
        if (id == null) {
            this.playerListView = new PlayerListView({collection: this.playerList});
            this.playerListView.render();
            $('#players').html(this.playerListView.el);
        }
        else {
            var playerEditView = new PlayerEditView({model: this.playerList.get(id)});
            playerEditView.render();
            $('#players').html(playerEditView.el);
        }
    },
}));