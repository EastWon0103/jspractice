const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const hello = document.querySelector(".js-hello");

const userLs = "currentUser";
const showingClassName = "showing";

function paintName(text){
    form.classsList.remove(showingClassName);
    hello.classList.add(showingClassName);
    hello.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(userLs);
    if (currentUser === null){
        
    } else {
       paintName(currentUser);
    }
}

function init(){

}

init();