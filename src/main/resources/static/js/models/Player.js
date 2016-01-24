var Player = Backbone.Model.extend({
    defaults: {
        id: undefined,
        name: 'Player',
        sex: 'Male',
        level: 1,
        bonus: 0,
        attack: 1
    },

    initialize: function(){
        console.log('player init');

        this.on('change:level',this.updateAttackValue, this);
        this.on('change:bonus',this.updateAttackValue, this);
    },
    increaseAttribute : function(attrName){
        var value = this.get(attrName);
        this.set(attrName,value + 1);
    },
    decreaseAttribute : function(attrName){
        var value = this.get(attrName);
        this.set(attrName,value - 1);
    },
    updateAttackValue : function(){
        console.log('update attack value');
        this.set('attack', this.get('level') + this.get('bonus'));
    }
});