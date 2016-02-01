var PlayerRouter = new (Backbone.Router.extend({
    routes: {
        "":"player",
        "player(/:id)": "player",
        "playerTable(/:page)(/:size)": "playerGrid"
    },
    initialize: function () {
        console.log('initialize');
        this.playerList = new PlayerList();
    },
    start: function () {
        console.log('start');

    },
    player: function (id) {
        console.log('player function');
        this.playerList.fetch();
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
    playerGrid : function(page,size){
        if(page==null){
            page=0;
        }
        if(size==null){
            size=10;
        }
        console.log("routing to player gird");
        console.log("page: " + page + " size: " + size);
        var self = this;
        this.playerList.fetch({
            data: {page: page, size: size},
            //reset: true,
            success: function () {
                console.log('aa');
                var playerGridView = new PlayerGridView({collection: self.playerList});
                playerGridView.render();
                $('#content').html(playerGridView.el);
            }
        });



    }
}));