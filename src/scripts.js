document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audio = new Audio('pianoAudio/whiteKeys/A.mp3');
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = new Audio('pianoAudio/whiteKeys/S.mp3');
        audio.play();
    } else if (event.code === "KeyD") {
        let audio = new Audio('pianoAudio/whiteKeys/D.mp3');
        audio.play();
    } else if (event.code === "KeyF") {
        let audio = new Audio('pianoAudio/whiteKeys/F.mp3');
        audio.play();
    } else if (event.code === "KeyG") {
        let audio = new Audio('pianoAudio/whiteKeys/G.mp3');
        audio.play();
    } else if (event.code === "KeyH") {
        let audio = new Audio('pianoAudio/whiteKeys/H.mp3');
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = new Audio('pianoAudio/whiteKeys/J.mp3');
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = new Audio('pianoAudio/blackKeys/W.mp3');
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = new Audio('pianoAudio/blackKeys/E.mp3');
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = new Audio('pianoAudio/blackKeys/T.mp3');
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = new Audio('pianoAudio/blackKeys/Y.mp3');
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = new Audio('pianoAudio/blackKeys/U.mp3');
        audio.play();
    } else {
        console.log("This key does not exist");
    }
});