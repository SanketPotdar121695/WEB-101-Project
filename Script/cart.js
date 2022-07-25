let login_data = JSON.parse(localStorage.getItem("login-data")) || "";
let mens_data = JSON.parse(localStorage.getItem("mens-data")) || [];
let womens_data = JSON.parse(localStorage.getItem("womens-data")) || [];

// let totalPrice = document.getElementById("total-price");
// let total = 0;

if (mens_data.length === 0 && womens_data.length === 0){
    let null_text = document.createElement("h1");
    null_text.setAttribute("id", "null-text");
    null_text.innerText = "Your cart is empty !!!";
    document.querySelector("body").append(null_text);
}
else {
    display_mens_data(mens_data);
    display_womens_data(womens_data);
}

function display_mens_data(mens_data){

    mens_data.forEach(function(elem, index){
        // total += Number(elem.price);
        // totalPrice.textContent = total;

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let description = document.createElement("p");
        description.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = "₹" + " " + elem.price;

        let delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
        delete_button.addEventListener("click", function(){
            deleteM(elem, index);
            document.querySelector("#container").innerHTML = "";
            display_mens_data(mens_data);
            display_womens_data(womens_data);
        });

        div3.append(price, delete_button);
        div2.append(description, div3);
        div1.append(image, div2);
        document.querySelector("#container").append(div1);
    });
}

function deleteM (product, index){
    mens_data.splice(index, 1);
    // total -= Number(product.price);
    // totalPrice.textContent = "₹" + " " + total;
    localStorage.setItem("mens-data", JSON.stringify(mens_data));
}

function display_womens_data(womens_data){

    womens_data.forEach(function(elem, index){
        // total += Number(elem.price);
        // totalPrice.textContent = "₹" + " " + total;

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let description = document.createElement("p");
        description.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = "₹" + " " + elem.price;

        let delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
        delete_button.addEventListener("click", function(){
            deleteW(elem, index);
            document.querySelector("#container").innerHTML = "";
            display_mens_data(mens_data);
            display_womens_data(womens_data);
        });

        div3.append(price, delete_button);
        div2.append(description, div3);
        div1.append(image, div2);
        document.querySelector("#container").append(div1);
    });
}

function deleteW (product, index){
    womens_data.splice(index, 1);
    // total -= Number(product.price);
    // totalPrice.textContent = "₹" + " " + total;
    localStorage.setItem("womens-data", JSON.stringify(womens_data));
}

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