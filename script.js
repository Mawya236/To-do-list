let AddTask = document.getElementById("AddTask");
let AddBtn = document.getElementById("AddBtn");
let NewTask = document.getElementById("NewTask");
let edite = document.getElementById("edite");
let EditeInput = document.getElementById("EditeInput");
let updatebtn = document.getElementById("updatebtn");
let add = [];
if(localStorage.getItem('Tasks')){
    add = JSON.parse(localStorage.getItem("Tasks"))
}
getData();
//ADD TASK
AddBtn.addEventListener('click', function(){
    let arrTask = AddTask.value;
    if(!arrTask){
        alert("Please fill out the Task");
    }
    else{
        add.push(arrTask);
        AddTask.value = "";
    }
    // localStorage.setItem("Tasks", JSON.stringify(add));
    saveData(add);
    display();
});
let editebtn;
function display(){
    let show = "";
    for(let i = 0; i < add.length; i++){
        show += `
            <li> <h3>${add[i]}</h3>
                <button onclick = "EditeTask(${i})"> Edite </button>
                <button onclick = "DeleteTask(${i})"> Delete </button>
                <button onclick = "DoneTask(${i})"> Done </button>
            </li>`
    }
    NewTask.innerHTML = show;
};
// display();
function saveData(add){
        window.localStorage.setItem("Tasks", JSON.stringify(add));
}
function getData(){
    let store = window.localStorage.getItem("Tasks");
    if(store){
        let tasks = JSON.parse(store);
        display(tasks);
    }
}
//EDITE TASK
function EditeTask(i){
    edite.style.display = 'block';
    EditeInput.value = add[i];
    updatebtn.onclick = () => UpdateTask(i);
}
//UPDATE TASK
function UpdateTask(i){
    add[i] = EditeInput.value;
    edite.style.display = 'none';
    saveData(add)
    display();
}
//DELETE TASK
function DeleteTask(i){
    add.splice(i, 1);
    saveData(add)
    display();
}
//DONE TASK
function DoneTask(i){
    document.getElementsByTagName("h3")[i].style.color = 'rgb(83, 223, 83)'
}

