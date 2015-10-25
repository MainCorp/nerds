var link = document.querySelector(".location-btn");
var appearance = document.querySelector(".write-us");
var windowClose = document.querySelector(".btn-close");
var form = appearance.querySelector("form");
var login = document.querySelector("[name=login]");
var mail = document.querySelector("[name=mail]");
var text = document.querySelector("[name=text]");

/* появление окна write-us */

link.addEventListener("click", function(event){
    event.preventDefault();
    appearance.classList.add("write-us-show");
});

/* закрытие окна write-us */

windowClose.addEventListener("click", function(event){
    event.preventDefault();
    appearance.classList.remove("write-us-show");
});

/* появление анимации при ошибки ввода */

form.addEventListener("submit", function(event){
    if(!(login.value && mail.value && text.value)){
        event.preventDefault();
        appearance.classList.add("write-us-flicker");
    }
});