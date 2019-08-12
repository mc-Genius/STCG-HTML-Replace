let e1 = document.getElementById("page1");
let e2 = document.getElementById("page2");
let e3 = document.getElementById("page3");
let i1 = document.getElementById("page1-img");
let i2 = document.getElementById("page2-img");
let i3 = document.getElementById("page3-img");
let p1 = document.getElementById("page1_padding")
let p2 = document.getElementById("page2_padding")
let p3 = document.getElementById("page3_padding")

let page1 = function() {
    e1.style.display = "block";
    e2.style.display = "none";
    e3.style.display = "none";
    i1.style.display = "block";
    i2.style.display = "none";
    i3.style.display = "none";
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
}
let page2 = function() {
    e1.style.display = "none";
    e2.style.display = "block";
    e3.style.display = "none";
    i1.style.display = "none";
    i2.style.display = "block";
    i3.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "block";
    p3.style.display = "none";
}
let page3 = function() {
    e1.style.display = "none";
    e2.style.display = "none";
    e3.style.display = "block";
    i1.style.display = "none";
    i2.style.display = "none";
    i3.style.display = "block";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "block";
}