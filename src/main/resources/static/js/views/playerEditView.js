define([ "backbone", "mustache", "../routers/playerRouter" ], function(Backbone, Mustache, PlayerRouter) {
    "use strict";

    var PlayerEditView = Backbone.View.extend({
        events: {
            "click .save-player": "save",
            "click .cancel-player": "cancel",
            "click .remove-player": "removePlayer",
            "click .add-level": "addLevel",
            "click .remove-level": "removeLevel",
            "click .add-bonus": "addBonus",
            "click .remove-bonus": "removeBonus",
        },
        template: $("script.playerEditTemplate").html(),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log('rendering player view item');
            var attributes = this.model.toJSON();
            this.$el.html(Mustache.to_html(this.template, attributes));
            console.log('end of rendering player view item');
            return this;
        },

        save: function () {
            console.log('Save button');
            var playerName = $('#formPlayerName').val();
            this.model.set('name', playerName);
            var playerSex = $('#formPlayerSex').val();
            var sex;
            if (playerSex == "Male") {
                sex = true;
            }
            else {
                sex = false;
            }
            this.model.set('sex', sex);
            this.model.save();
            console.log(this.model.toJSON());
            require("routers/playerRouter").navigate('player', {trigger: true});
        },
        addLevel: function (e) {
            this.model.increaseAttribute('level');
            this.model.updateAttackValue();
        },
        removeLevel: function (e) {
            this.model.decreaseAttribute('level');
            this.model.updateAttackValue();
        },
        addBonus: function (e) {
            this.model.increaseAttribute('bonus');
            this.model.updateAttackValue();
        },
        removeBonus: function (e) {
            this.model.decreaseAttribute('bonus');
            this.model.updateAttackValue();
        },
        cancel: function () {
            console.log('Cancel button');
            this.model.fetch();
            require("routers/playerRouter").navigate('player', {trigger: true});
        },

        removePlayer: function () {
            console.log('Remove button');
            this.model.destroy();
            require("routers/playerRouter").navigate('player', {trigger: true});
        }


    });

    return PlayerEditView;
});