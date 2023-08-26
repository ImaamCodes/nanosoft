var automobiles = [
    {
        name: "LEEFY",
        desc:"A 5-seater sedan equipped with powerful shock absorbers to keep the driving smooth and jerk-free.",
        stock:"relatively-few",
        cost: 42000
    },
    {
        name: "4RACER TERRAIN",
        desc:"A buggy shaped car with wheels as big and as powerful as a bulldozer yet with a locked escape wheel to keep you safe.",
        stock:"out-of-stock",
        cost: 235300
    },
    {
        name: "XM220 HATchback",
        desc: "A 5-seater hatchback equipped with advanced automatic fog lights and the extraordinary Nanosoft SDMC system.",
        stock: "good",
        cost: 35000
    },
    {
        name: "Probus ns920",
        desc: "A 40-seater double decker bus with advanced door systems and safety shields to keep passengers safe.",
        stock: "okay",
        cost: 479845
    },
    {
        name: "xm220",
        desc: "A 5-seater sedan equipped with a recognizing light to help locate the car in crowded places.",
        stock: "relatively-good",
        cost: 36000
    },
    {
        name: "leefy hatchback",
        desc: "A 5-seater hatchback with the advanced Nanosoft AWImComfy to help adjust to the most extreme weather.",
        stock: "okay",
        cost: 41000
    },
    {
        name: "Delivery4me",
        desc: "A quick freight truck specialized in guiding drivers using the Nanosoft DPGC system.",
        stock: "relatively-few",
        cost: 673250
    },
    {
        name: "cruise4ALL",
        desc: "An 11-seater self driver equipped with the Nanosoft SDMC and AWImComfy systems to drive neatly and to adjust to extreme weather.",
        cost: 75250,
        stock: "out-of-stock"
    },
    {
        name: "carneva",
        desc: "A seven-seater SUV equipped with the Nanosoft SDMC system and powerful shock absorbers to make your ride smooth.",
        cost: 50460,
        stock: "okay"
    }
];

var cart = [];

var productsPage = document.getElementById("product-container");


for (var i=0; i<automobiles.length; i++) {

    var newproduct = document.createElement ("div"); 
        newproduct.innerHTML = ` 
                    <h1 class="product-name">${automobiles[i].name.toUpperCase()}</h1>
                    <img src="../images/automobiles/${automobiles[i].name.toLowerCase().replace(" ", "_")}.png" alt="" class="product-img" width="256">
                    <p class="product-desc">${automobiles[i].desc}</p>
                    <p class="product-cost">$${automobiles[i].cost.toLocaleString("en-US")}</p>
                    <p class="stocks" data-stockage="${automobiles[i].stock}"></p>
                    <section class="prct-prcd">
                        <button class="add-to-cart prct-prcd" ${automobiles[i].stock === "out-of-stock" ? "disabled" : ""}></button>
                        <button class="features prct-prcd" onclick="location.href='automobiles/${automobiles[i].name.toLowerCase().replaceAll(" ", "_")}.html'"></button>
                    </section>
                `; 
    newproduct.classList.add("product-card");
    productsPage.appendChild(newproduct);

}

function populateCart() {
    if (cart.length === 0) {
        cartSpot.innerHTML = "Your cart is empty.";
    } else {
        cartSpot.innerHTML = "";
        for (var i = 0; i < cart.length; i++) {
            cartSpot.innerHTML += `
                <div class="cartItem">
                    <p class="title">${cart[i].name.toUpperCase()}</p>
                    <p class="cost">${cart[i].cost.toLocaleString("en-US")}</p>
                </div>
            `;
            console.log(cart[i]);
        }
    }
    var totall = 0;
    for (var i = 0; i<cart.length; i++) {
        totall+=cart[i].cost;
    }
    total.innerHTML = `${totall.toLocaleString("en-US")}`;
}

var addToCartButtons = document.querySelectorAll("#product-container .add-to-cart");
var cartSpot = document.querySelector(".cartItems:first-of-type");
var total = document.querySelector("p#total");

var adding = {};
function addItem(i) {
    adding = {};
    adding.name = automobiles[i].name;
    adding.cost = automobiles[i].cost;
    cart.push(adding);
    populateCart();
}
for (var i = 0; i<addToCartButtons.length; i++) {
    addToCartButton = addToCartButtons[i]
    addToCartButton.addEventListener("click", addItem(i));
}
console.log(cart)
