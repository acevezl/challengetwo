function toggleTopNav() {
    var x = document.getElementById("top-nav");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
}

function closeTopNav() {
    var x = document.getElementById("top-nav");
    x.style.display = "none";
}