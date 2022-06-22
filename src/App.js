function playSound(event){    
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    audio.pause();
    setTimeout(function() {
        audio.play();
    }, 100)
}



const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown',playSound);