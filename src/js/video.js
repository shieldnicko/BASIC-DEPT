const videoLoop = document.getElementById('video-loop')
const video = document.getElementById('video')
const cursor = document.querySelector('.video__cursor')

function videoEnded() {
    videoLoop.style.visibility = 'visible'
    video.style.visibility = 'hidden'
}

// video
videoLoop.addEventListener('click', () => {
    videoLoop.style.visibility = 'hidden'
    video.style.visibility = 'visible'
    video.play()
})

// stop the video
video.addEventListener('click', () => {
    video.load()
    videoEnded()
})

video.addEventListener('ended', videoEnded)

// cursor
cursor.addEventListener('click', () => {
    videoLoop.style.visibility = 'hidden'
    video.style.visibility = 'visible'
    video.play()
})

videoLoop.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`
    cursor.style.top = `${e.pageY}px`
})
// restore the old position
videoLoop.addEventListener('mouseleave', (e) => {
    cursor.style.left = "50%"
    cursor.style.top = "50%"
})
