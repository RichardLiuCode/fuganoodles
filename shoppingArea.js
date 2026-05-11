/* JavaScript written by Richard Liu, for the FUGA Noodles Group in Leadership Class. */

setTimeout(function () {
    document.getElementById("shopNowBtn").style.display = "flex";
}, 4000);

document.getElementById("shopNowBtn").addEventListener("click", function () {
    document.getElementById("shoppingArea").style.display = "flex";
});
document.getElementById("shoppingAreaCloseBtn").addEventListener("click", function () {
    document.getElementById("shoppingArea").style.display = "none";
});
