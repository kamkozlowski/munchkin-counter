define([ "routers/playerRouter", "backbone", "mustache"], function(PlayerRouter, Backbone, Mustache){
    "use strict";

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
        console.log("Initialize player view");
        console.log(PlayerRouter);
        this.listenTo(this.model,'change', this.render);
        this.listenTo(this.model,'destroy', this.hide);
    },
        template: $( "script.playerViewTemplate" ).html(),


    render: function(){
        console.log('Rendering player view item');
        var attributes = this.model.toJSON();
        console.log(attributes);
        this.$el.html(Mustache.to_html(this.template,attributes));
        console.log('end of rendering player view item');
        return this;
    },
    addLevel : function(e){
        this.model.increaseAttribute('level');
        this.model.updateAttackValue();
        this.model.save();
    },
    removeLevel : function(e){
        this.model.decreaseAttribute('level');
        this.model.updateAttackValue();
        this.model.save();
    },
    addBonus : function(e){
        this.model.increaseAttribute('bonus');
        this.model.updateAttackValue();
        this.model.save();
    },
    removeBonus : function(e){
        this.model.decreaseAttribute('bonus');
        this.model.updateAttackValue();
        this.model.save();
    },
    removePlayer : function(e){
        this.trigger('removeClicked');
        this.model.destroy();
    },
    hide : function(){
        this.$el.remove();
    },
    editPlayer: function(){
        console.log('edit player');
        console.log(PlayerRouter);
        require("routers/playerRouter").navigate('player/' + this.model.get('id'), {trigger: true});
        //exports.getRouter().navigate('player/' + this.model.get('id'), {trigger: true});
        //PlayerRouter.navigate('player/' + this.model.get('id'), {trigger: true});
    }
});

    return PlayerView;
});