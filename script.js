const task = document.getElementById('taskInput');
const list = document.getElementById('taskList');

function addTask(){
    if (task.value === ""){
       window.alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    task.value = '';
    saveData();
}

list.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("completed");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('task',list.innerHTML);
}

function show(){
    list.innerHTML = localStorage.getItem('task');
}

show();