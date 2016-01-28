var PlayerEditView = Backbone.View.extend({
    events: {
        "click .save-player" : "save",
        "click .cancel-player" : "cancel",
        "click .remove-player" : "remove",
        "click .add-level" : "addLevel",
        "click .remove-level" : "removeLevel",
        "click .add-bonus" : "addBonus",
        "click .remove-bonus" : "removeBonus",
    },
    template: _.template($( "script.playerEditTemplate" ).html()),

    initialize: function() {
        this.model.on('change', this.render, this);
    },

    render: function(){
        console.log('rendering player view item');
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        console.log('end of rendering player view item');
        return this;
    },

    save: function(){
        console.log('Save button');
        var playerName = $('#formPlayerName').val();
        this.model.set('name',playerName);
        var playerSex = $('#formPlayerSex').val();
        this.model.set('sex',playerSex);
        this.model.save();
        console.log(this.model.toJSON());
        PlayerRouter.navigate('player', {trigger: true});
    },
    addLevel : function(e){
        this.model.increaseAttribute('level');
    },
    removeLevel : function(e){
        this.model.decreaseAttribute('level');
    },
    addBonus : function(e){
        this.model.increaseAttribute('bonus');
    },
    removeBonus : function(e){
        this.model.decreaseAttribute('bonus');
    },
    cancel: function(){
        console.log('Cancel button');
        this.model.fetch();
        PlayerRouter.navigate('player', {trigger: true});
    },

    remove: function(){
        console.log('Remove button');
        this.model.destroy();
        PlayerRouter.navigate('player', {trigger: true});
    }


});