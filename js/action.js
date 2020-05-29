$(document).ready(function(){

    $('li.new').find('.content').blur(function(e){
        var todo = $(e.currentTarget).text();
        // var li = $('<li></li>').text(todo);
        var li = $('.template').find('li').clone();
        
        li.find('.content').text(todo);

        $(e.currentTarget).closest('li').before(li);

        $(e.currentTarget).empty();
    });
});