document.getElementById("econom").onclick = function() {
    window.location.href = "index1.html";
}

document.getElementById("comfort").onclick = function() {
    window.location.href = "index2.html";
}

document.getElementById("comfortPlus").onclick = function() {
    window.location.href = "index3.html";
}

function toggleMenu() {
    document.querySelector(".nav-list22").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("open");
}
