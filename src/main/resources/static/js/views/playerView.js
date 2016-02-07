define([ "routers/playerRouter", "backbone", "mustache"], function(PlayerRouter, Backbone, Mustache){
    "use strict";
var self;
var PlayerView = Backbone.View.extend({
    events: {
        "click .add-level": "addLevel",
        "click .remove-level": "removeLevel",
        "click .add-bonus": "addBonus",
        "click .remove-bonus": "removeBonus",
        'click .remove-player': 'removePlayer',
        'click .edit-player': 'editPlayer'
    },
    initialize: function () {
        self = this;
        console.log("Initialize player view");
        console.log(PlayerRouter);
        self.listenTo(self.model,'change', self.render);
        self.listenTo(self.model,'destroy', self.hide);
    },
        template: $( "script.playerViewTemplate" ).html(),


    render: function(){
        console.log('Rendering player view item');
        var attributes = self.model.toJSON();
        self.$el.html(Mustache.to_html(self.template,attributes));
        console.log('end of rendering player view item');
        return self;
    },
    addLevel : function(e){
        self.model.increaseAttribute('level');
        self.model.updateAttackValue();
        self.model.save();
    },
    removeLevel : function(e){
        self.model.decreaseAttribute('level');
        self.model.updateAttackValue();
        self.model.save();
    },
    addBonus : function(e){
        self.model.increaseAttribute('bonus');
        self.model.updateAttackValue();
        self.model.save();
    },
    removeBonus : function(e){
        self.model.decreaseAttribute('bonus');
        self.model.updateAttackValue();
        self.model.save();
    },
    removePlayer : function(e){
        self.trigger('removeClicked');
        self.model.destroy();
    },
    hide : function(){
        self.$el.remove();
    },
    editPlayer: function(){
        console.log('edit player');
        console.log(PlayerRouter);
        require("routers/playerRouter").navigate('player/' + self.model.get('id'), {trigger: true});
        //exports.getRouter().navigate('player/' + self.model.get('id'), {trigger: true});
        //PlayerRouter.navigate('player/' + self.model.get('id'), {trigger: true});
    }
});

    return PlayerView;
});