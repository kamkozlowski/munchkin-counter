define([ "exports", "views/playerGridView", "../models/playerList", "../views/playerListView", "../views/playerEditView", "backbone", "jquery" ], function(exports, PlayerGridView, PlayerList, PlayerListView, PlayerEditView, Backbone, $){
    "use strict";

    console.log("playerRouter module loading");

    var self;
    var PlayerRouter = Backbone.Router.extend({
        routes: {
            "":"player",
            "player(/:id)": "player",
            "playerTable(/:page)(/:size)": "playerGrid"
        },
        initialize: function () {
            console.log('initialize');
            self = this;
            this.playerList = new PlayerList();
        },
        start: function () {
            console.log('start');
        },
        player: function (id) {
            console.log('player function');
            //var self = this;
            console.log(this.playerList);
            this.playerList.fetch({
                data: { size: 999 }, // Maximum size of page
                success: function(){
                    if (id == null) {
                        console.log("id is null. loading player list");
                        self.loadView(new PlayerListView({collection: self.playerList}));
                        self.view.render();
                        $('#content').html(self.view.el);
                    }
                    else {
                        console.log("id is not null. loading player list");
                        self.loadView(new PlayerEditView({model: self.playerList.get(id)}));
                        self.view.render();
                        $('#content').html(self.view.el);
                    }
                }
            });

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
            self.view && (self.view.close ? self.view.close() : self.view.remove());
            self.view = view;
        }
    });

    var playerRouter = new PlayerRouter();
    // Circular dependency
    exports.playerRouter = function(){
        return playerRouter;
    };
    return playerRouter;

});