function login() {
    let loginData = {};
    loginData.username = JSON.parse(document.getElementById("username").innerText);
    loginData.password = JSON.parse(document.getElementById("password").innerText);

    clear(document.getElementById("username"));
    clear(document.getElementById("password"));
}

function clear(target) {
    target.value = "";
}