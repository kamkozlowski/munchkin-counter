var PlayerGridView = Backbone.View.extend({
    template: $( "script.playerGridViewTemplate" ).html(),

    initialize: function(){
      //this.collection.on('reset', this.render, this);
    },

    render: function(){
        console.log('Rendering player grid view');
        var attributes = this.collection.toJSON();
        console.log(attributes);
        //console.log(this.collection.attr)
        this.$el.html(Mustache.to_html(this.template,attributes));
        this.addAll();
        console.log('end of rendering player grid view item');
        return this;
    },

    addAll: function(){
        console.log('addAll');
       // this.$el.empty();
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(playerGridItem){
        console.log('addOne');
        console.log(playerGridItem.attributes);
        var playerGridViewItem = new PlayerGridViewItem({model: playerGridItem, tagName: 'tr'});
        console.log('player grid view item created');
        this.$el.find('tbody').append(playerGridViewItem.render().el);
        console.log('adding one finished');
    }
});