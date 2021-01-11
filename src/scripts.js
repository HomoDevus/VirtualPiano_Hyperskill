// Проверяет какая кнопка нажата и проигрывает аудио

document.addEventListener("keydown", function (event) {
    let audio = new Audio(`pianoAudio/${event.code}.mp3`);
    document.getElementById(event.code).classList.add("pressed"); // Добовляет класс со стилем нажатой клавиши
    console.log(event.code) // Check
    audio.play();
});

// Убирает класс со стилем нажатой клавиши

document.addEventListener("keyup", function (event) {
    document.getElementById(event.code).classList.remove("pressed");
});