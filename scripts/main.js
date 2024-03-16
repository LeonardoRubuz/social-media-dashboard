const head = document.querySelector("head")
const themeLink = document.getElementById('dark')
const toggleButton = document.getElementById('toggleBtn')

// Set the default theme to light
themeLink.remove()
let isDark = false

function themeSwitcher() {
    if (isDark) {
        console.log(isDark);
    }
}

toggleButton.addEventListener('click', themeSwitcher)
