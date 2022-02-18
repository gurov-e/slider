const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('.series')
let activeSlideIdx = 0

setInterval(() => {
    clear()
    if (activeSlideIdx < contents.length) {
        activeSlideIdx++
        if (activeSlideIdx === contents.length) {
            activeSlideIdx = 0
        }
        contents[activeSlideIdx].classList.add('show')
        listItems[activeSlideIdx].classList.add('active-btn')
    }
}, 5000)

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        clear()
    
        item.classList.add('active-btn')
        contents[idx].classList.add('show')
        activeSlideIdx = idx
    })
    listItems[0].classList.add('active-btn')
})

function clear() {
    contents.forEach(img => img.classList.remove('show'))
    listItems.forEach(item => item.classList.remove('active-btn'))
}