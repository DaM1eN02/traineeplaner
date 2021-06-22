function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let loginData = {};
    loginData.username = username;
    loginData.password = password;

    clear(document.getElementById("username"));
    clear(document.getElementById("password"));

    load_planer();
}

function clear(target) {
    target.value = "";
}

function load_planer() {
    window.location.href = "planer.html";
}