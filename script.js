/* JavaScript written by Richard Liu, for the FUGA Noodles Group in Leadership Class. */

window.addEventListener("load", function () {
    if (window.location.pathname == "/index.html") {
        window.location.replace("./");
    }
    console.log("%cWarning!", "font-size:40px;color:red;background-color:yellow;padding:5px;");
    console.log("%cDo not paste any code you don't here which might cause Self-XSS!", "font-family:arial;font-size:20px;");
});