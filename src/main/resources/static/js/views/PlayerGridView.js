var PlayerGridView = Backbone.View.extend({
    template: $( "script.playerGridViewTemplate" ).html(),

    render: function(){
        console.log('Rendering player grid view');
        var attributes = this.collection.toJSON();
        console.log(attributes);
        this.$el.html(Mustache.to_html(this.template,attributes));
        console.log('end of rendering player grid view item');
        return this;
    },
});