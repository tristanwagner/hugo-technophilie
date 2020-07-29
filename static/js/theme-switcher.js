var mode = localStorage.getItem("theme")

function toggle(val) {
    localStorage.setItem("theme", val)
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(val);
    mode = val
}

function switchTheme() {
    mode == "dark" ? toggle("light") : toggle("dark")
}

(!mode || mode == "dark") ? toggle("dark") : toggle("light")
