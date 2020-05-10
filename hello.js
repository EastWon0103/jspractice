const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const hello = document.querySelector(".js-hello");

const userLs = "currentUser";
const showingClassName = "showing";

function saveName(text){
    localStorage.setItem(userLs, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(showingClassName);
    form.addEventListener("submit", handleSubmit);
}

function paintName(text){
    form.classList.remove(showingClassName);
    hello.classList.add(showingClassName);
    hello.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(userLs);
    if (currentUser === null){
        askForName();
    } else {
        paintName(currentUser);
    }
}

function init(){
    loadName();
}

init();