var PlayerListView = Backbone.View.extend({
    events: {
        'click .add-player' : 'addPlayer',
        'click .remove-players' : 'removePlayers'
    },
    initialize : function(){
        this.listenTo(this.collection,'add', this.addOne);
        this.listenTo(this.collection,'reset', this.addAll);
    },
    playerViews: [],
    render: function() {
        console.log('Render player list');
        this.$el.append("<h1>Dashboard</h1>");
        var buttonsHtml = $('script.playerListViewTemplate').html();
        this.$el.append(buttonsHtml);
        this.addAll();
    },
    addAll: function(){
        this.playerViews.forEach(function(entry) {
            console.log("removing views")
            entry.remove();
        });
        this.playerViews = [];
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(item){
        console.log('Adding item');
        var playerView = new PlayerView({model: item});
        this.playerViews.push(playerView);
        this.$el.append(playerView.render().el);
    },
    addPlayer: function(){
        console.log('Adding player');
        var player = new Player();

        this.collection.add(player);
        player.save();
    },
    removePlayers : function(){
        var model;
        while (model = this.collection.first()) {
            model.destroy();
        }
        this.playerViews.forEach(function(entry) {
            console.log("removing views")
            entry.remove();
        });
        this.playerViews = [];
    },
    close: function(){
        this.playerViews.forEach(function(entry) {
            console.log("removing views")
            entry.remove();
        });
        this.playerViews = [];
        this.remove();
    }


});