const blackKeys = document.querySelectorAll('.black-key')
const whiteKeys = document.querySelectorAll('.white-key')

function playSound(newUrl) {
    new Audio(newUrl).play()
}


blackKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-keys/black-keys/black-key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})

whiteKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-keys/white-keys/white-key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})