// Open Menu

function openMenu() {
    document.getElementById("navDropdown").style.display = "flex";
    document.getElementById("hamburgerNav").style.display = "none";
    document.getElementById("closeNav").style.display = "block";
}

function closeMenu() {
    document.getElementById("navDropdown").style.display = "none";
    document.getElementById("hamburgerNav").style.display = "block";
    document.getElementById("closeNav").style.display = "none";
}