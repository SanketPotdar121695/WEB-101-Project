let login_data = JSON.parse(localStorage.getItem("login-data")) || "";
let signUp_data = JSON.parse(localStorage.getItem("signUp-data")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", goToLogin);

function goToLogin(event){
    event.preventDefault();

    let signupObj = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    };

    let isPresent = false;

    for (let i in signupObj){
        if (signupObj[i] === ""){
            isPresent = true;
            break;
        }
        else {
            continue;
        }
    }

    for (let i = 0; i < signUp_data.length; i++){
        if (isPresent === false && signUp_data[i].email === form.email.value){
            alert("User already exists. Please try with different email ID");
            return;
        }
    }

    if (isPresent === true){
        alert("Please fill all the credentials");
    }
    else {
        signUp_data.push(signupObj);
        localStorage.setItem("signUp-data", JSON.stringify(signUp_data));
        alert("Signup Successful");
        window.location.href = "login-page.html";
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

let login_icon = document.querySelector("#navbar-2 > div > img");

login_icon.addEventListener("click", function (){
    window.location.href = "login-page.html";
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