let e1 = document.getElementById("page1");
let e2 = document.getElementById("page2");
let p1 = document.getElementById("page1_row")
let p2 = document.getElementById("page2_row")

let page1 = function() {
    e1.style.display = "block";
    e2.style.display = "none";
    p1.style.display = "block";
    p2.style.display = "none";
}
let page2 = function() {
    e1.style.display = "none";
    e2.style.display = "block";
    p1.style.display = "none";
    p2.style.display = "block";
}