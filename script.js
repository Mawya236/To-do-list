let AddTask = document.getElementById("AddTask");
let AddBtn = document.getElementById("AddBtn");
let NewTask = document.getElementById("NewTask");
let edite = document.getElementById("edite");
let EditeInput = document.getElementById("EditeInput");
let updatebtn = document.getElementById("updatebtn");
let add = [];
//ADD TASK
AddBtn.addEventListener('click', function(){
    let arrTask = AddTask.value;
    if(!arrTask){
        alert("Please fill out the Task");
    }
    else{
        add.push(arrTask);
        AddTask.value = "";
        display();
        localStorage.setItem("Tasks", JSON.stringify(arrTask));
    }
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
    localStorage.getItem("Tasks");
};
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
    display();
}
//DELETE TASK
function DeleteTask(i){
    add.splice(i, 1);
    display();
}
//DONE TASK
function DoneTask(i){
    document.getElementsByTagName("h3")[i].style.color = 'rgb(83, 223, 83)'
}

