let addToCart;
if ((window.location.pathname == undefined) || (window.location.pathname == "/") || (window.location.pathname == "/index.html")) {
    let cart = undefined;
    window.addEventListener("load", function () {
        if (!localStorage.getItem("FUGANoodlesCart")) {
            localStorage.setItem("FUGANoodlesCart", "{\"Items\":[]}");
        }
        cart = JSON.parse(localStorage.getItem("FUGANoodlesCart"));
        if (!cart.Items) {
            cart.Items = [];
        }
        document.getElementById("shoppingAreaCartDetainsDisplay").textContent = `Cart: ${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"}`;
    });
    addToCart = function (item) {
        cart.Items.push({
            "Item": item,
            "Price": 1,
            "Time": {
                "Date": `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
                "Time": `${new Date().getHours() % 12}:${new Date().getMinutes()}:${new Date().getSeconds()} ${new Date().getHours() > 12 ? "PM" : "AM"}`
            }
        });
        localStorage.setItem("FUGANoodlesCart", JSON.stringify(cart));
        document.getElementById("shoppingAreaCartDetainsDisplay").textContent = `Cart: ${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"}`;
    };
    document.getElementById("shoppingCartBtn").title = "My Shopping Cart";
    document.getElementById("shoppingCartBtn").addEventListener("click", function () {
        window.location.href = "./cart.html";
    });
} else if (window.location.pathname == "/cart.html") {
    let cart = undefined;
    window.addEventListener("load", function () {
        if (!localStorage.getItem("FUGANoodlesCart")) {
            localStorage.setItem("FUGANoodlesCart", "{\"Items\":[]}");
        }
        cart = JSON.parse(localStorage.getItem("FUGANoodlesCart"));
        if (!cart.Items) {
            cart.Items = [];
        }
        document.getElementById("itemsDisplay").textContent = `${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"}`;
        let totalPrice = 0;
        for (let i = 0; i < cart.Items.length; i++) {
            totalPrice += cart.Items[i].Price || 0;
        }
        document.getElementById("priceDisplay").textContent = `Total: ${totalPrice}`;

    });
}
