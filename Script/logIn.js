let login_data = JSON.parse(localStorage.getItem("login-data")) || "";
let signUp_data = JSON.parse(localStorage.getItem("signUp-data")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", goToHome);

function goToHome(event){
    event.preventDefault();
    
    let enteredEmail = form.email.value;
    let enteredPassword = form.password.value;

    if (enteredEmail === "" || enteredPassword === ""){
        alert("Please fill all the credentials");
        return;
    }

    if (signUp_data.length === 0){
        alert("User does not exist");
        location.reload();
        return;
    }
    
    if (login_data.email === enteredEmail && login_data.password === enteredPassword){
        alert("You are already logged in");
        window.location.href = "home-page.html";
        return;
    }

    let isMatch = false;

    for (let i = 0; i < signUp_data.length; i++){
        if (signUp_data[i].email == enteredEmail && signUp_data[i].password == enteredPassword){
            isMatch = true;
            localStorage.setItem("login-data", JSON.stringify(signUp_data[i]));
            break;
        }
    }
    
    if (isMatch === true){
        alert("Login Successful");
        window.location.href = "home-page.html";
    }
    else {
        alert("Please enter correct credentials");
    }
}

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

document.querySelector("#navbar-2 > div > h1").addEventListener("click", function(){
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