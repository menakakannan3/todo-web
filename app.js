var input = document.getElementById("input")
var list = document.getElementById("list")
var dropp = document.getElementById("dropp")
var todos =[];
window.onload =()=>{
    todos = JSON.parse(localStorage.getItem('todos'))|| []
    todos.forEach(todo => addtodo (todo))
}
function adding(){
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos))
    addtodo(input.value)
   input.value=''
}

function addtodo(todo){
    var lii = document.createElement('li')
   // lii.innerHTML = todo + ' <button style="color:blue; blackground-color:red;" id="dropp"onclick="deleting(event)">Delete</button>' ;
  lii.innerHTML = todo + ' <span  style=";  right:50px; transform: translateY(0%)"; id="remove" onclick="deleting(event)" class="material-symbols-outlined">delete</span>' ;
    list.appendChild(lii);

    lii.addEventListener('click',(event)=>{
        lii.style.textDecoration='line-through'
        deleting(todo)
        event.target.parentElement.remove()
    })

}

function deleting(todo){
    var index = todos.indexOf(todo)
    if (index >-1){
        todos.splice(index,1);
    }
   localStorage.setItem('todos', JSON.stringify(todos))
   
}