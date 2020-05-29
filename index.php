<?php include('header.php') ?>


<div id="panel">
    <h1>Todo List</h1>
    <div id="todo-list">
        <ul>
            <li class="">
                <div class="checkbox"></div>
                <div class="content">Lorem, ipsum dolor.</div>
                <div class="actions">
                    <div class="delete">x</div>
                </div>
            </li>
            <li class="">
                <div class="checkbox"></div>
                <div class="content">Lorem, ipsum dolor.</div>
                <div class="actions">
                    <div class="delete">x</div>
                </div>
            </li>
            <li class="complete">
                <div class="checkbox"></div>
                <div class="content">Lorem, ipsum dolor.</div>
                <div class="actions">
                    <div class="delete">x</div>
                </div>
            </li>
            <li class='new'>
                <div class="checkbox"></div>
                <div class="content" contenteditable="true"></div>
            </li>
        </ul>
    </div>

</div>

<div class="template hide">
    <li>
        <div class="checkbox"></div>
        <div class="content"></div>
        <div class="actions">
            <div class="delete">x</div>
        </div>
    </li>
</div>





<?php include('footer.php') ?>