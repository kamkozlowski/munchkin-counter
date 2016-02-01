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
            this.loadView(new PlayerListView({collection: this.playerList}));
            this.view.render();
            $('#content').html(this.view.el);
        }
        else {
            this.loadView(new PlayerEditView({model: this.playerList.get(id)}));
            this.view.render();
            $('#content').html(this.view.el);
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
            success: function () {
                self.loadView(new PlayerGridView({collection: self.playerList}));
                self.view.render();
                $('#content').html(self.view.el);
            }
        });
    },
    loadView : function(view) {
        this.view && (this.view.close ? this.view.close() : this.view.remove());
        this.view = view;
    }

}));