function options() {
    let node = document.getElementById('list');
    let visibility = node.style.visibility;
    node.style.visibility = visibility === "visible" ? 'hidden' : 'visible';
}