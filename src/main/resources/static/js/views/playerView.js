define([ "routers/playerRouter", "backbone", "mustache", "jquery", "stache!playerView", "notify"], function(PlayerRouter, Backbone, Mustache, $, template){
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

    render: function(){
        console.log('Rendering player view item');
        var attributes = this.model.toJSON();
        console.log(attributes);
        this.$el.html(template(attributes));
        console.log('end of rendering player view item');
        return this;
    },
    addLevel : function(e){
        this.model.increaseAttribute('level');
        this.model.updateAttackValue();
        this.model.save({},this.notifyResults());
    },
    removeLevel : function(e){
        this.model.decreaseAttribute('level');
        this.model.updateAttackValue();
        this.model.save({},this.notifyResults());
    },
    addBonus : function(e){
        this.model.increaseAttribute('bonus');
        this.model.updateAttackValue();
        this.model.save({},this.notifyResults());
    },
    removeBonus : function(e){
        this.model.decreaseAttribute('bonus');
        this.model.updateAttackValue();
        this.model.save({},this.notifyResults());
    },
    removePlayer : function(e){
        this.trigger('removeClicked');
        this.model.destroy({},this.notifyResults());
    },
    hide : function(){
        this.$el.remove();
    },
    editPlayer: function(){
        console.log('edit player');
        console.log(PlayerRouter);
        require("routers/playerRouter").navigate('player/' + this.model.get('id'), {trigger: true});
    },

    notifyResults: function(){
        return {
            success: function(){
                $.notify({
                    message: "Entity updated",
                    icon: "glyphicon glyphicon-ok"
                },{
                    type: "info",
                });
            },
            error: function(model,xhr, options){
                var errors = JSON.parse(xhr.responseText).errors;
                $.notify({
                    message:  "Error: " + errors,
                    icon: "glyphicon glyphicon-warning-sign"
                },{
                    type: "danger",
                });
            }
        };
    }
});

    return PlayerView;
});