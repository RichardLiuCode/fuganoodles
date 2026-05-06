let cart = undefined;
window.addEventListener("load", function () {
    if (!localStorage.getItem("FUGANoodlesCart")) {
        console.log("Do not have cart yet!");
        localStorage.setItem("FUGANoodlesCart", "{\"Items\":[]}");
    }
    cart = JSON.parse(localStorage.getItem("FUGANoodlesCart"));
    if (!cart.Items) {
        cart.Items = [];
    }
    console.log("Cart:\n" + JSON.stringify(cart, null, 2));

});
const addToCart = function (item) {
    cart.Items.push({
        "Item": item,
        "Price": 1,
        "Time": {
            "Date": `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
            "Time": `${new Date().getHours() % 12}:${new Date().getMinutes()}:${new Date().getSeconds()} ${new Date().getHours() > 12 ? "PM" : "AM"}`
        }
    });
    console.log(cart);
    localStorage.setItem("FUGANoodlesCart", JSON.stringify(cart));
    document.getElementById("shoppingAreaCartDetainsDisplay").textContent = `Cart: ${cart.Items.length} ${cart.Items.length > 1 ? "items" : "item"}`;
};