let mens_data = [
    {
        name: "Hunky Trunks beach co-ord in green stripe",
        image: "https://images.asos-media.com/products/hunky-trunks-beach-shirt-in-green-stripe/23510090-1-green?$n_480w$&wid=476&fit=constrain",
        price: 1299
    },
    {
        name: "ASOS Actual Athleisure relaxed shorts with logo print in white marl",
        image: "https://images.asos-media.com/products/asos-actual-athleisure-relaxed-shorts-with-logo-print-in-white-marl/201544283-1-whitemarl?$n_480w$&wid=476&fit=constrain",
        price: 899
    },
    {
        name: "COLLUSION Unisex wide leg joggers and sweatshirt with raised logo print co-ord",
        image: "https://images.asos-media.com/products/collusion-unisex-sweatshirt-with-raised-logo-print-co-ord/201353821-1-brown?$n_480w$&wid=476&fit=constrain",
        price: 1399
    },
    {
        name: "Quay High Key aviator sunglasses in gold fade",
        image: "https://images.asos-media.com/products/quay-high-key-aviator-sunglasses-in-gold-fade/201795083-1-gold?$n_480w$&wid=476&fit=constrain",
        price: 499
    },
    {
        name: "Levi's t-shirt with poster logo in white",
        image: "https://images.asos-media.com/products/levis-t-shirt-with-poster-logo-in-white/201448833-1-white?$n_480w$&wid=476&fit=constrain",
        price: 1199
    },
    {
        name: "Vans Left Chest t-shirt in blue",
        image: "https://images.asos-media.com/products/vans-left-chest-t-shirt-in-blue/202147253-1-blue?$n_480w$&wid=476&fit=constrain",
        price: 999
    },
    {
        name: "Topman micro swim shorts in mint",
        image: "https://images.asos-media.com/products/topman-micro-swim-shorts-in-mint/201135030-1-mint?$n_480w$&wid=476&fit=constrain",
        price: 599
    },
    {
        name: "ASOS DESIGN swim shorts in wavey pastel stripe in smart styling short length",
        image: "https://images.asos-media.com/products/asos-design-swim-shorts-in-wavey-pastel-stripe-in-smart-styling-short-length/201534432-1-multi?$n_480w$&wid=476&fit=constrain",
        price: 399
    },
    {
        name: "Night Addict back print vest in black",
        image: "https://images.asos-media.com/products/night-addict-back-print-vest-in-black/202431194-1-black?$n_480w$&wid=476&fit=constrain",
        price: 449
    },
    {
        name: "Replay swim shorts in orange",
        image: "https://images.asos-media.com/products/replay-swim-shorts-in-orange/202107745-1-orange?$n_480w$&wid=476&fit=constrain",
        price: 799
    },
    {
        name: "Criminal Damage Plus camden jeans in black",
        image: "https://images.asos-media.com/products/criminal-damage-plus-camden-jeans-in-black/200849841-1-blue?$n_480w$&wid=476&fit=constrain",
        price: 1499
    },
    {
        name: "American Stitch cargo shorts in stone",
        image: "https://images.asos-media.com/products/american-stitch-cargo-shorts-in-stone/202287000-1-stone?$n_480w$&wid=476&fit=constrain",
        price: 1249
    },
    {
        name: "ASOS DESIGN relaxed t-shirt in black with front & back text print",
        image: "https://images.asos-media.com/products/asos-design-relaxed-t-shirt-in-black-with-front-back-text-print/201658246-1-black?$n_480w$&wid=476&fit=constrain",
        price: 649
    },
    {
        name: "ASOS DESIGN oversized t-shirt in blue texture with Berlin city embroidery",
        image: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-blue-texture-with-berlin-city-embroidery/201813101-1-blue?$n_480w$&wid=476&fit=constrain",
        price: 449
    },
    {
        name: "South Beach light/medium resistance bands 2 pack in black",
        image: "https://images.asos-media.com/products/south-beach-light-medium-resistance-bands-2-pack-in-black/24458819-1-black?$n_480w$&wid=476&fit=constrain",
        price: 199
    },
    {
        name: "Skin Chemist collagen hydroGel eye pads 5x2pads",
        image: "https://images.asos-media.com/products/skin-chemist-collagen-hydrogel-eye-pads-5x2pads/201392870-1-nocolour?$n_480w$&wid=476&fit=constrain",
        price: 99
    },
    {
        name: "ASOS DESIGN wide shorts in pink natural look textured fabric",
        image: "https://images.asos-media.com/products/asos-design-wide-shorts-in-pink-natural-look-textured-fabric/201472012-1-palemauve?$n_480w$&wid=476&fit=constrain",
        price: 299
    },
    {
        name: "Selected Homme round sunglasses in silver with black lens",
        image: "https://images.asos-media.com/products/selected-homme-round-sunglasses-in-silver-with-black-lens/202474547-1-silvers681500?$n_480w$&wid=476&fit=constrain",
        price: 349
    },
    {
        name: "Topman skinny chino shorts in navy",
        image: "https://images.asos-media.com/products/topman-skinny-chino-shorts-in-navy/24146520-1-blue?$n_480w$&wid=476&fit=constrain",
        price: 749
    },
    {
        name: "ASOS DESIGN round sunglasses in matte black with black lens",
        image: "https://images.asos-media.com/products/asos-design-round-sunglasses-in-matte-black-with-black-lens/14315615-1-black?$n_480w$&wid=476&fit=constrain",
        price: 499
    },
    {
        name: "Reebok swim short with block logo print in navy blue and white",
        image: "https://images.asos-media.com/products/reebok-swim-short-with-block-logo-print-in-navy-blue-and-white/202268969-1-navybluewhite?$n_480w$&wid=476&fit=constrain",
        price: 649
    },
    {
        name: "Reebok logo print swim short in navy",
        image: "https://images.asos-media.com/products/reebok-logo-print-swim-short-in-navy/202268902-1-navy?$n_480w$&wid=476&fit=constrain",
        price: 349
    },
    {
        name: "2-Minds jersey shorts co-ord in turquoise",
        image: "https://images.asos-media.com/products/2-minds-jersey-shorts-co-ord-in-turquoise/203185145-1-turquoise?$n_480w$&wid=476&fit=constrain",
        price: 749
    },
    {
        name: "2-Minds floral jersey shorts in light blue",
        image: "https://images.asos-media.com/products/2-minds-floral-jersey-shorts-in-light-blue/203185115-1-lightblue?$n_480w$&wid=476&fit=constrain",
        price: 699
    },
    {
        name: "London Rebel X quilted sliders in green",
        image: "https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_480w$&wid=476&fit=constrain",
        price: 349
    },
    {
        name: "London Rebel X quilted sliders in black",
        image: "https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-black/201648072-1-black?$n_480w$&wid=476&fit=constrain",
        price: 399
    },
    {
        name: "ASOS DESIGN jersey shorts in black with poppers",
        image: "https://images.asos-media.com/products/asos-design-jersey-shorts-in-black-with-poppers/202505718-1-black?$n_480w$&wid=476&fit=constrain",
        price: 449
    },
    {
        name: "ASOS DESIGN runner swim shorts in khaki with white binding",
        image: "https://images.asos-media.com/products/asos-design-runner-swim-shorts-in-khaki-with-white-binding/201649294-1-tarmac?$n_480w$&wid=476&fit=constrain",
        price: 399
    },
    {
        name: "ASOS DESIGN 2 pack skinny chino shorts in khaki and black save",
        image: "https://images.asos-media.com/products/asos-design-2-pack-skinny-chino-shorts-in-khaki-and-black-save/201254914-1-seaturtleblack?$n_480w$&wid=476&fit=constrain",
        price: 599
    },
    {
        name: "Topman chino skinny shorts in stone",
        image: "https://images.asos-media.com/products/topman-chino-skinny-shorts-in-stone/24156211-1-stone?$n_480w$&wid=476&fit=constrain",
        price: 449
    },
    {
        name: "Topman chino skinny shorts in black",
        image: "https://images.asos-media.com/products/topman-chino-skinny-shorts-in-black/24146549-1-black?$n_480w$&wid=476&fit=constrain",
        price: 649
    },
    {
        name: "ASOS DESIGN swim brief shorts in black",
        image: "https://images.asos-media.com/products/asos-design-swim-brief-shorts-in-black/201471613-1-black?$n_480w$&wid=476&fit=constrain",
        price: 249
    },
    {
        name: "DTT oversized denim shorts in washed black",
        image: "https://images.asos-media.com/products/dtt-oversized-denim-shorts-in-washed-black/202261932-1-black?$n_480w$&wid=476&fit=constrain",
        price: 749
    },
    {
        name: "New Look hooded puffer in navy",
        image: "https://images.asos-media.com/products/new-look-hooded-puffer-in-navy/201132096-1-navy?$n_480w$&wid=476&fit=constrain",
        price: 1349
    },
    {
        name: "Replay swim shorts in black",
        image: "https://images.asos-media.com/products/replay-swim-shorts-in-black/202107768-1-black?$n_480w$&wid=476&fit=constrain",
        price: 299
    },
    {
        name: "Reebok logo print swim short in black blue and yellow",
        image: "https://images.asos-media.com/products/reebok-logo-print-swim-short-in-black-blue-and-yellow/202269107-1-blackblueyellow?$n_480w$&wid=476&fit=constrain",
        price: 249
    },
    {
        name: "New Look relaxed fit pull on shorts with pintuck in lilac",
        image: "https://images.asos-media.com/products/new-look-relaxed-fit-pull-on-shorts-with-pintuck-in-lilac/202562544-1-lilac?$n_480w$&wid=476&fit=constrain",
        price: 349
    },
    {
        name: "ASOS DESIGN wide brim pork pie straw hat in white with black band and size adjuster",
        image: "https://images.asos-media.com/products/asos-design-wide-brim-pork-pie-straw-hat-in-white-with-black-band-and-size-adjuster/22991652-1-white?$n_480w$&wid=476&fit=constrain",
        price: 499
    },
    {
        name: "ASOS DESIGN round sunglasses with smoke lens in ecru - BEIGE",
        image: "https://images.asos-media.com/products/asos-design-round-sunglasses-with-smoke-lens-in-ecru-beige/201687409-1-beige?$n_480w$&wid=476&fit=constrain",
        price: 299
    },
    {
        name: "Good For Nothing co-ord in off white with crest logo print",
        image: "https://images.asos-media.com/groups/good-for-nothing-co-ord-in-off-white-with-crest-logo-print/72980-group-1?$n_480w$&wid=476&fit=constrain",
        price: 449
    }
];

let login_data = JSON.parse(localStorage.getItem("login-data")) || "";
let cart_data = JSON.parse(localStorage.getItem("mens-data")) || [];

for (let i = 0; i < mens_data.length; i++){
    mens_data[i].id = "m" + (i + 1);
}

function display(mens_data){
    mens_data.forEach(function(elem){
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
        button.innerText = "Add to cart";
        button.addEventListener("click", function(){
            addToCart(elem);
        });

        div3.append(price, button);
        div2.append(description, div3);
        div1.append(image, div2);
        document.querySelector("#container").append(div1);
    });
}
display(mens_data);

function addToCart(product){
    for (let i = 0; i < cart_data.length; i++){
        if (cart_data[i].id === product.id){
          alert("Product is already in the cart");
          return;
        }
    }
    cart_data.push(product);
    alert("Product added to the cart");
    localStorage.setItem("mens-data", JSON.stringify(cart_data));
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