var todoInp = document.getElementById('todoInp');
var showlist =document.getElementById('showlist');

function addtodo (){
    var showlist =document.getElementById('showlist');
    var todoText = todoInp.value 

    var todoLi =document.createElement('li');
    var todoTextNode =document.createTextNode(todoText);
    todoLi.setAttribute ('class', 'todolist');
    todoLi.appendChild(todoTextNode);
    showlist.appendChild(todoLi)


    var deleteBtn= document.createElement('button')
    deleteBtn.setAttribute('onclick','deleteTodo(this)')
    var deleteTextNode= document.createTextNode ('DELETE')
    deleteBtn.appendChild(deleteTextNode)
    todoLi.appendChild (deleteBtn)

    deleteBtn.setAttribute('onclick', 'deleteTodo(this)')
    var editBtn = document.createElement ('button')
    editBtn.setAttribute('onclick', 'deleteTodo(this)')
    
    var editText=document.createTextNode('EDIT')
    editBtn.setAttribute("onclick","editTodo(this)")
    editBtn.appendChild(editText)
    todoLi.appendChild(editBtn)
}

function deleteTodo(element){
    element.parentNode.remove()
}

function editTodo(element){
    element.parentNode.firstChild.nodeValue=prompt('Edit Value',element.parentNode.firstChild.nodeValue,);
    console.log (element.parentNode.childNodes[0])

}

function deleteAll () {
    showlist.InnerHTML=''
}