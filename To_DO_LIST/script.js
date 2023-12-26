document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("You have to add some task to be productive :) BEST OF LUCK")
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id = "taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class = "delete">
        <i class ="far fa-trash-alt"></i>
        </button>
        </div>`;

        var current_task = document.querySelectorAll(".delete");
        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}