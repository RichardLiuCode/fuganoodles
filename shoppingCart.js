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
            "Price": 0.58,
            "Time": {
                "Date": `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
                "Time": `${new Date().getHours() % 12}:${new Date().getMinutes()}:${new Date().getSeconds()} ${new Date().getHours() > 12 ? "PM" : "AM"}`
            }
        });
        localStorage.setItem("FUGANoodlesCart", JSON.stringify(cart));
        document.getElementById("shoppingAreaCartDetainsDisplay").textContent = `Cart: ${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"}`;
    };
    document.getElementById("shoppingCartBtn").title = "My Shopping Cart";
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
            const itemHTML = `<p style=\"margin-left:10px;\">${cart.Items[i].Item}</p><p style=\"margin-left:10px;\">$${cart.Items[i].Price}</p>`;
            let listItem = document.getElementById("cartListItemSample").cloneNode(true);
            listItem.innerHTML = itemHTML;
            listItem.id = `cartItem${i + 1}`;
            listItem.style.display = "flex";
            document.getElementById("CartListContainer").insertBefore(listItem, document.getElementById("CartListContainer").firstChild);
        }
        document.getElementById("priceDisplay").textContent = `Total: ${totalPrice}`;
        document.getElementById("emptyShoppingCartBtn").addEventListener("click", function () {
            const confirm = prompt("Are you sure to empty your shopping cart? You can undo this action! If you want, type \"I want to clear my shopping cart\" to continue.");
            if (confirm == "I want to clear my shopping cart") {
                cart.Items = [];
                localStorage.setItem("FUGANoodlesCart", JSON.stringify(cart));
                window.location.reload();
            }
        });
        if (cart.Items.length <= 0) {
            document.getElementById("emptyShoppingCartBtn").remove();
        }
    });
}
window.addEventListener("load", function () {
    if (document.getElementById("shoppingCartBtn")) {
        document.getElementById("shoppingCartBtn").addEventListener("click", function () {
            window.location.href = "./cart.html";
        });
    }
});