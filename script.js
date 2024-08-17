let addTask = document.getElementById('add-task');
let AddBtn = document.getElementById('AddBtn');
let newTask = document.getElementById('newTask');
let add;
let mood = 'ADD';
let x;
if(localStorage.Task != null){
    add = JSON.parse(localStorage.Task);
}
else{
    add = [];
}
AddBtn.onclick = function(){
    let newTask = addTask.value;
    if(mood == 'ADD'){
        add.push(newTask);
        addTask.value = '';
    }
    else{
        add[x] = newTask;
        mood = 'ADD';
        AddBtn.innerHTML = "Add";
        addTask.value = '';
    }
    localStorage.setItem('Task', JSON.stringify(add));
    // console.log(add);
    task();
    // clear();
}
function task(){      
    let show = '';
    for(let i = 0; i < add.length; i++){
        show += `
        <div id = "task">
            <h3> ${add[i]} </h3> 
            <i class="fa" id="check"> &#xf00c; </i>
            <button id="EdtieBtn" onclick = 'edite(${i})'> Edite</button> 
            <button id="DeleteBtn" onclick = 'deleteTask(${i})'> Delete</button> 
            <button id="DoneBtn" onclick = 'done(${i})'> Done</button>
        </div>
        `;
    }
    document.getElementById('newTask').innerHTML = show;
}
task();
function deleteTask(i){
    add.splice(i, 1);
    localStorage.Task = JSON.stringify(add);
    task();
}
function edite(i){
    addTask.value = add[i];
    AddBtn.innerHTML = "Edite";
    mood = 'EDITE';
    x = i;
}
let check = document.getElementById('check');
function done(i){
    console.log(i)
    check.style.visibility.valueOf(i) = 'hidden';
}