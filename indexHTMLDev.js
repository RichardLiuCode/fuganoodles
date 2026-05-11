/* JavaScript written by Richard Liu, for the FUGA Noodles Group in Leadership Class. */

if (window.location.hostname == "127.0.0.1") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("dev") == "true") {
        document.getElementById("shoppingArea").style.display = "flex";
    }
}