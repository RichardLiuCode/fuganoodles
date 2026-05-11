window.onload = function () {
    if (localStorage.getItem("FUGANoodlesCart")) {
        const cart = JSON.parse(localStorage.getItem("FUGANoodlesCart"));
        if (cart.Items) {
            document.getElementById("noodleAmountsDisplay").textContent = cart.Items.length;
        }
    }
};