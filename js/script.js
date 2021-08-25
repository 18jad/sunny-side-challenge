const scrollTop = document.getElementById("scroll");

window.onload = () => {
    scrollTop.style.opacity = "0"
    scrollTop.style.display = "none"
}

window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollTop.style.display = "flex"
        scrollTop.style.opacity = "1"
    } else {
        scrollTop.style.opacity = "0"
        scrollTop.style.display = "none"
    }
}
