$(document).ready(function(){
    var source = $("#todo-list-item-template").html();
    var todoTemplate = Handlebars.compile(source);

    $('li.new').find('.content').blur(function(e){
        var todo = $(e.currentTarget).text();
        todo = todo.trim();

        if (todo.length>0) {
            todo = {
                is_complete:false,
                content: todo,
            };
            var li = todoTemplate(todo);
            $(e.currentTarget).closest('li').before(li);
        }
        $(e.currentTarget).empty();
    });
});