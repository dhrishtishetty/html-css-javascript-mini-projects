var currentAudio;

function playAudio(src) {
    if (currentAudio) {
        currentAudio.pause();
    }

    currentAudio = new Audio(src);
    currentAudio.play();
}

