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
        document.getElementById("shoppingAreaCartDetainsDisplay").innerHTML = `Cart: ${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"} <a href=\"./cart.html\" target=\"_self\">View Cart</a>`;
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
        document.getElementById("shoppingAreaCartDetainsDisplay").innerHTML = `Cart: ${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"} <a href=\"./cart.html\" target=\"_self\">View Cart</a>`;
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
            const removeItemBtn = document.createElement("button");
            removeItemBtn.style = "cursor:pointer;background-color:red;width:100px;height:30px;font-size:20px;font-family:arial;color:white;position:absolute;right:10px;top:10px;border-color:black;border-style:solid;border-width:2px;";
            removeItemBtn.textContent = "Delete";
            listItem.appendChild(removeItemBtn);
            removeItemBtn.addEventListener("click", function () {
                cart.Items.splice(i, 1);
                localStorage.setItem("FUGANoodlesCart", JSON.stringify(cart));
                if (cart.Items.length <= 3) {
                    window.location.reload();
                }
                this.parentElement.remove();
                document.getElementById("itemsDisplay").textContent = `${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"}`;
                let totalPrice = 0;
                for (let i = 0; i < cart.Items.length; i++) {
                    totalPrice += cart.Items[i].Price || 0;
                }
                document.getElementById("priceDisplay").textContent = `Total: $${totalPrice.toFixed(2)}`;
                if (cart.Items.length <= 0) {
                    document.getElementById("emptyShoppingCartBtn").remove();
                }
            });
            document.getElementById("CartListContainer").insertBefore(listItem, document.getElementById("CartListContainer").firstChild);
        }
        document.getElementById("priceDisplay").textContent = `Total: $${totalPrice.toFixed(2)}`;
        document.getElementById("emptyShoppingCartBtn").addEventListener("click", function () {
            const confirm = prompt("Are you sure to empty your shopping cart? You can undo this action! If you want, type \"I want to clear my shopping cart\" to continue.");
            if (confirm == "I want to clear my shopping cart") {
                cart.Items = [];
                localStorage.setItem("FUGANoodlesCart", JSON.stringify(cart));
                window.location.reload();
            }
        });
        document.getElementById("checkoutBtn").addEventListener("click", function () {
            window.location.href = "./checkout.html";
        });
        if (cart.Items.length <= 0) {
            document.getElementById("emptyShoppingCartBtn").remove();
            document.getElementById("checkoutBtn").remove();
        }
    });
} else if (window.location.pathname == "/checkout.html") {
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
        document.getElementById("priceDisplay").textContent = `Total: $${totalPrice.toFixed(2)}`;
    });
}
window.addEventListener("load", function () {
    if (document.getElementById("shoppingCartBtn")) {
        document.getElementById("shoppingCartBtn").addEventListener("click", function () {
            window.location.href = "./cart.html";
        });
        document.getElementById("shoppingCartBtn").title = "My Shopping Cart";
    }
});