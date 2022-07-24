let cart_data = JSON.parse(localStorage.getItem("cart-data")) || [];

function display(cart_data){
    cart_data.forEach(function(elem, index){
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let description = document.createElement("p");
        description.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = "₹" + " " + elem.price;

        let button = document.createElement("button");
        button.innerText = "Delete";
        // button.addEventListener("click", function(){
        //     deleteEl(elem, index);
        // });

        div3.append(price, button);
        div2.append(description, div3);
        div1.append(image, div2);
        document.querySelector("#container").append(div1);
    });
}
display(cart_data);