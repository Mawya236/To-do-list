let AddTask = document.getElementById("AddTask");
let AddBtn = document.getElementById("AddBtn");
let NewTask = document.getElementById("NewTask");
let editebtn = document.getElementById("editebtn");
let add = [];
let Btnremove;
//ADD TASK
AddBtn.addEventListener("click", function(){
    let arrTask = AddTask.value;
    if(!arrTask){
        alert("Please fill out the Task");
        return;
    }
    else{
        add.push(arrTask);
    }
    AddTask.value = "";
    display();
});
function display(){
    let task;
    let head;
    let text;
    let btnEdite;
    let textedite;
    let btnDelete;
    let textdelete;
    let btnDone;
    let textdone;
    add.filter((item, index) => {
        task = document.createElement("div");
        task.classList.add("task");
        head = document.createElement("h3");
        head.classList.add("head");
        task.appendChild(head);
        text = document.createTextNode(`${add[index]}`);
        head.appendChild(text);
        btnEdite = document.createElement("button");
        btnEdite.classList.add("btnEdite");
        textedite = document.createTextNode("Edite");
        btnEdite.appendChild(textedite);
        task.appendChild(btnEdite);
        btnDelete = document.createElement("button");
        btnDelete.classList.add("btnDelete");
        textdelete =document.createTextNode("Delete");
        btnDelete.appendChild(textdelete);
        task.appendChild(btnDelete);
        btnDone = document.createElement("button");
        btnDone.classList.add("btnDone");
        textdone = document.createTextNode("done");
        btnDone.appendChild(textdone);
        task.appendChild(btnDone);
        btnEdite.addEventListener("click", function(){
            EditeTask(`${index}`);
        })
        btnDone.addEventListener("click", function(){
            head.style.color = "rgb(83, 223, 83)";
        })
    });
    NewTask.appendChild(task);
    //DELETE TASK
    btnDelete.addEventListener("click", function(){
        deleteTask();
    })
    function deleteTask(){
        while(task.hasChildNodes()){
            task.removeChild(task.firstChild);
        }
        task.classList.remove("task");
    }
    //EDITE TASK
    function EditeTask(index){
        document.querySelector(".edite").style.display = "block";
        document.querySelector(".EditeInput").value = add[index];
        editebtn.addEventListener("click", function(){
            document.querySelector(".edite").style.display = "none";
            add[index] = document.querySelector(".EditeInput").value;
            let a = task.children[0];
            let s = document.createTextNode(add[index]);
            a.replaceChild(s, a.childNodes[0]);
        });
    }
};
