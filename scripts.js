// get the elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
    // console.log(toggle);
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
    // create our function
function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updateButton() {
    if (this.paused) {
        toggle.textContent = 'P'
    } else {
        toggle.textContent = '►'
    }
}

function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    video[this.name] = this.value
        // console.log(this.name);
        // console.log(this.value);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
        // console.log(e);
}
// fullscreen toggle
fullscreenbtn.addEventListener("click", toggleFullScreen, false);

fullscreenbtn = document.getElementById("fullscreenbtn");
console.log(fullscreenbtn);

function toggleFullScreen() {
    if (video.requestFullScreen) {
        video.requestFullScreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    }
}
// hook up event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)

skipButtons.forEach(params => params.addEventListener('click', skip))
ranges.forEach(params => params.addEventListener('change', handleRangeUpdate))
ranges.forEach(params => params.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)

progress.addEventListener('mousemove', {
    if (mousedown) {
        scrub()
    }
})
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = true)