$(document).ready(function(){
    var source = $("#todo-list-item-template").html();
    var todoTemplate = Handlebars.compile(source);

    //create
    // $('li.new').find('.content').blur(function(e){
    //     var todo = $(e.currentTarget).text();
    //     todo = todo.trim();

    //     if (todo.length>0) {
    //         todo = {
    //             is_complete:false,
    //             content: todo,
    //         };
    //         var li = todoTemplate(todo);
    //         $(e.currentTarget).closest('li').before(li);
    //     }
    //     $(e.currentTarget).empty();
    // });

    //update
    $('#todo-list')
        .on('dblclick', '.content', function(e){
            $(this).prop('contenteditable', true).focus();
        })
        // create and update
        .on('blur', '.content', function(e){
            var isNew = $(this).closest('li').is('.new');
            if (isNew) {
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
            }

            else {
                $(this).prop('contenteditable', false);
            }
        })
        // delete 
        .on('click', '.delete', function(e){
            var result = confirm('do you want to delete?');
            if (result) {
                $(this).closest('li').remove();
            }
        })
        // complete 
        .on('click', '.checkbox', function(e){
            $(this).closest('li').toggleClass('complete');
        });

    $('#todo-list').find('ul').sortable({
        items: 'li:not(.new)',
    });
});