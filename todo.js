const plan = document.querySelector("#txt");
const add = document.querySelector("#click");
let list = document.querySelector("#list");
let done = document.querySelector("#done");

let i=0;
function buttonClick(add){
    const vim = document.createElement("div");
    vim.className = "vim"
    vim.id  = "te"+i;
    i++;

    const checkBox=document.createElement("input");
    const todo = document.createElement("p");
    todo.innerHTML = plan.value;
    checkBox.type="checkbox";
    vim.append(checkBox)
    vim.append(todo)
    
    vim.onclick = onClick
    list.append(vim);
    function onClick(checkBox){
        done.append(vim)
    }
}
