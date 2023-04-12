document.getElementById("toggle-switch").addEventListener("change", function (event) {
    document.documentElement.classList.toggle("light-theme", event.target.checked);
});
