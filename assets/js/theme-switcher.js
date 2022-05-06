var i = "theme"
var m = (localStorage.getItem(i) || "dark")
var d = document.documentElement.classList
if (m == "light") {
    d.remove("dark")
    d.add(m)
}
function switchTheme() {
    d.remove(m)
    m = (m == "dark") ? "light" : "dark"
    d.add(m)
    localStorage.setItem(i, m)
}
