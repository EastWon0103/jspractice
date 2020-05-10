const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";


/*
해결 사항
1. del button 안보임
2. 값이 없어도 생성됨
3. 삭제가 안됨
4. 아마 로컬스토리지에 저장도 안될 껄??
*/
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "👎";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    console.log(text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();