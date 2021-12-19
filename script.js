document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "dark");
    var themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.onclick = function() {
		var currentTheme = document.documentElement.getAttribute("data-theme");
		var switchToTheme = currentTheme === "dark" ? "light" : "dark";
        themeSwitcher.innerHTML = "Switch theme to " + currentTheme;
		document.documentElement.setAttribute("data-theme", switchToTheme);
    }
});