var PlayerGridView = Backbone.View.extend({
    template: $( "script.playerGridViewTemplate" ).html(),

    initialize: function(){
    },

    events:{
        "change #formPageSize" : "pageSizeChanged",
        "click .previous-page" : "previousPage",
        "click .next-page" : "nextPage"
    },
    rowViews: [],
    render: function(){
        this.rowViews = [];
        console.log('Rendering player grid view');
        //var attributes = this.collection.toJSON();
        console.log("Page size: " + this.collection.size);
        console.log(this.collection.attr)
        console.log("Total pages: " + this.collection.totalPages);
        console.log("Page number: " + this.collection.number);
        var lastPage = false;
        if(this.collection.totalPages==(this.collection.number+1)||this.collection.totalPages==0){ // move check to model
            lastPage = true;
        }
        var firstPage = false;
        if(this.collection.number==0){  // move check to model
            firstPage = true;
        }
        this.$el.html(Mustache.to_html(this.template,
            {
                pageSize: this.collection.size,
                lastPage: lastPage,
                firstPage: firstPage,
                totalElements: this.collection.totalElements
            }));
        this.addAll();
        this.$el.find('#formPageSize').val(this.collection.size);
        console.log('end of rendering player grid view item');
        return this;
    },

    addAll: function(){
        console.log('addAll');
       // this.$el.empty();
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(playerGridItem){
        console.log('addOne');
        console.log(playerGridItem.attributes);
        var playerGridViewItem = new PlayerGridViewItem({model: playerGridItem, tagName: 'tr'});
        this.rowViews.push(playerGridViewItem);
        console.log('player grid view item created');
        this.$el.find('tbody').append(playerGridViewItem.render().el);
        console.log('adding one finished');
    },

    pageSizeChanged: function(event){
        console.log("Page size changed: " + $('#formPageSize').val() );
        PlayerRouter.navigate('playerTable/0/' + $('#formPageSize').val(), {trigger: true});
    },

    previousPage: function(){
        console.log("previous page");
        console.log(this.collection.number);
        var pageNumber = this.collection.number;
        pageNumber--;
        PlayerRouter.navigate('playerTable/'+pageNumber+'/' + $('#formPageSize').val(), {trigger: true});

    },

    nextPage: function(){
        console.log("next page");
        console.log(this.collection.number);
        var pageNumber = this.collection.number;
        pageNumber++;
        PlayerRouter.navigate('playerTable/'+pageNumber+'/' + $('#formPageSize').val(), {trigger: true});
    },

    close: function(){
        this.rowViews.forEach(function(entry) {
            console.log("removing row view")
            entry.remove();
        });
        console.log("rows removed");
        this.rowViews = [];
        this.remove();
        console.log("removing finished");
    }

});