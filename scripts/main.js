const head = document.querySelector("head")
const themeLink = document.getElementById('dark')
const toggleButton = document.getElementById('toggleBtn')

// Set the default theme to light
themeLink.remove()
let isLight = true


toggleButton.addEventListener('click', () => {
    if (isLight) {
        head.appendChild(themeLink)
        isLight = false
    }else{
        head.removeChild(themeLink)
        isLight = true
    }
})
