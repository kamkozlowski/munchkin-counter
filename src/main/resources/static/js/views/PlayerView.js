var PlayerView = Backbone.View.extend({
    events: {
        "click .add-level": "addLevel",
        "click .remove-level": "removeLevel",
        "click .add-bonus": "addBonus",
        "click .remove-bonus": "removeBonus",
        'click .remove-player': 'remove',
        'click .edit-player': 'editPlayer'
    },
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.hide, this);
    },
        template: $( "script.playerViewTemplate" ).html(),


    render: function(){
        console.log('Rendering player view item');
        var attributes = this.model.toJSON();
        this.$el.html(Mustache.to_html(this.template,attributes));
        console.log('end of rendering player view item');
        return this;
    },
    addLevel : function(e){
        this.model.increaseAttribute('level');
        this.model.save();
    },
    removeLevel : function(e){
        this.model.decreaseAttribute('level');
        this.model.save();
    },
    addBonus : function(e){
        this.model.increaseAttribute('bonus');
        this.model.save();
    },
    removeBonus : function(e){
        this.model.decreaseAttribute('bonus');
        this.model.save();
    },
    remove : function(e){
        this.trigger('removeClicked');
        this.model.destroy();
    },
    hide : function(){
        this.$el.remove();
    },
    editPlayer: function(){
        console.log('edit player');
        PlayerRouter.navigate('player/' + this.model.get('id'), {trigger: true});
    }
});