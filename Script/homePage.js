let login_data = JSON.parse(localStorage.getItem("login-data")) || "";

let product_page = document.querySelectorAll(".product-page");

product_page.forEach(function (elem){
    elem.addEventListener("click", function(){
        if (login_data === ""){
            alert("You are not logged in");
            window.location.href = "login-page.html";
            return;
        }
        else {
            if (elem.innerText === "WOMEN"){
                window.location.href = "womens-page.html";
                return;
            }
            else {
                window.location.href = "mens-page.html";
                return;
            }
        }
    });
});

let navbar_page = document.querySelectorAll(".navbar-page");

navbar_page.forEach(function (elem){
    elem.addEventListener("click", function(){
        if (login_data === ""){
            alert("You are not logged in");
            window.location.href = "login-page.html";
            return;
        }
        else {
            if (elem.innerText === "WOMEN"){
                window.location.href = "womens-page.html";
                return;
            }
            else {
                window.location.href = "mens-page.html";
                return;
            }
        }
    });
});

document.querySelector("#navbar-2 > h1").addEventListener("click", function(){
    window.location.href = "home-page.html";
});

let signUp_icon = document.querySelector("#navbar-2 > div > img");

signUp_icon.addEventListener("click", function (){
    window.location.href = "signup-page.html";
});

let cart_icon = document.querySelectorAll(".navbar-icons");

cart_icon.forEach(function(elem) {
    elem.addEventListener("click", function(){
        if (login_data === ""){
            alert("You are not logged in");
            window.location.href = "login-page.html";
        }
        else {
            window.location.href = "cart-page.html";
        }
    });
});

let view_btn = document.querySelectorAll(".view-btn");

view_btn.forEach(function (elem){
    elem.addEventListener("click", function(){
        if (login_data === ""){
            alert("You are not logged in");
            window.location.href = "login-page.html";
        }
        else {
            window.location.href = "mens-page.html";
        }
    });
});