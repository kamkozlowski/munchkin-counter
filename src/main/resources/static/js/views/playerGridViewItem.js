define([ "backbone", "mustache" ], function(Backbone, Mustache) {
    "use strict";

var PlayerGridViewItem = Backbone.View.extend({
    template: $( "script.playerGridViewItemTemplate" ).html(),

    render: function(){
        console.log('Rendering player view item');
        var attributes = this.model.toJSON();
        this.$el.html(Mustache.to_html(this.template,attributes));
        console.log('end of rendering player view item');
        return this;
    }
});

    return PlayerGridViewItem;
});

