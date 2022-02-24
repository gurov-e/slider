const slides = document.querySelectorAll('.slide')
const controls = document.querySelectorAll('.control')
let activeSlideIdx = 0

setInterval(() => {
    clear()

    if (activeSlideIdx < slides.length) {
        activeSlideIdx++
        if (activeSlideIdx === slides.length) {
            activeSlideIdx = 0
        }
        slides[activeSlideIdx].classList.add('show')
        controls[activeSlideIdx].classList.add('active-btn')
    }
}, 5000)

controls.forEach((item, idx) => {
    item.addEventListener('click', () => {
        clear()
    
        item.classList.add('active-btn')
        slides[idx].classList.add('show')
        activeSlideIdx = idx
    })
})

function clear() {
    slides.forEach(img => img.classList.remove('show'))
    controls.forEach(item => item.classList.remove('active-btn'))
}