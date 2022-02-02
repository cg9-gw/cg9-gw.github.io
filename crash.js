document.getElementById("crashbutton").onclick = crash();
function crash() {
    document.getElementById("crashbutton").style = "background-color: blue"
    var t = "lol";
    while(1) {
        t+="lol";
    }
}
