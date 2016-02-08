define([ "backbone", "mustache", 'stache!playerGridViewItem' ], function(Backbone, Mustache, template) {
    "use strict";

var PlayerGridViewItem = Backbone.View.extend({

    render: function(){
        console.log('Rendering player view item');
        var attributes = this.model.toJSON();
        this.$el.html(template(attributes));
        console.log('end of rendering player view item');
        return this;
    }
});

    return PlayerGridViewItem;
});

