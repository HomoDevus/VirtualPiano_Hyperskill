const decodeList = {
    c2: "Digit1", d2: "Digit2", e2: "Digit3", 
    f2: "Digit4", g2: "Digit5", a2: "Digit6", b2: "Digit7",
    
    c3: "KeyQ", d3: "KeyW", e3: "KeyE", 
    f3: "KeyR", g3: "KeyT", a3: "KeyY", b3: "KeyU",

    c4: "KeyA", d4: "KeyS", e4: "KeyD", 
    f4: "KeyF", g4: "KeyG", a4: "KeyH", b4: "KeyJ",

    c5: "KeyZ", d5: "KeyX", e5: "KeyC", f5: "KeyV", 
    g5: "KeyB", a5: "KeyN", b5: "KeyM", c6: "Comma",

    C2: "Digit8", D2: "Digit9", F2: "Digit0", 
    G2: "Minus", A2: "Equal",

    C3: "KeyI", D3: "KeyO", F3: "KeyP", 
    G3: "BracketLeft", A3: "BracketRight",

    C4: "KeyK", D4: "KeyL", F4: "Semicolon", 
    G4: "Quote", A4: "Backslash",

    C5: "Period", D5: "Slash", F5: "ShiftRight", 
    G5: "ControlRight", A5: "Enter",
} // For robot piano

// Проверяет какая кнопка нажата и проигрывает аудио
document.addEventListener("keydown", function (event) {
    console.log(event.code) // Check
    let audio = new Audio(`pianoAudio/${event.code}.mp3`);
    audio.play();
    document.getElementById(event.code).classList.add("pressed"); // Добовляет класс со стилем нажатой клавиши
});

// Убирает класс со стилем нажатой клавиши
document.addEventListener("keyup", function (event) {
    document.getElementById(event.code).classList.remove("pressed");
});

// ======= Автопроигрывание ========

// Преобразование текста в массив
function textToArr(notesText) {
    notesText = notesText.split(/\n\s\n/g);
    let notesList = notesText.map(function(notesLine) {
        return notesLine.split("\n");
    });
    return notesList;
};

// Функция перебирания строк (может быть больше чем одна строка если несколько октав)
function strokePlay(notesList) {
    notesList.forEach(function(notesStrokes, i, notesList) {
        setTimeout(lineStarter, 3000 * i, notesStrokes);
    });
};

function lineStarter(notesStrokes) {
    notesStrokes.forEach(function(octavStroke, LineIndex, notesStrokes) {
        linePlay(octavStroke);
    });
};

// Перебирание каждой октавы
function linePlay(octavStroke) {
    octavStroke = octavStroke.split('');
    // --- Удаляет ненужные элементы и присваевает октаве переменную ---
    let strokeBegining = octavStroke.indexOf('|')
    let octave = octavStroke[strokeBegining - 1]
    octavStroke = octavStroke.slice(strokeBegining + 1, -2);
    // -----------------------------------------------------------------
    octavStroke.forEach(function(note, noteIndex, octavStroke) {
        if (note != '-' && note != '|' && note != 'L' && note != 'H' && note != 'R') {
            let noteAndOctave = note + octave
            for (key in decodeList) {
                if (key == noteAndOctave) {
                    setTimeout(soundPlay, 115 * noteIndex, decodeList[key]);
                };
            };
        };
    });
};

// Проигрование клавиши
function soundPlay(pianoButton) {
    document.getElementById(pianoButton).classList.add("pressed"); // Добовляет класс со стилем нажатой клавиши
    setTimeout(() => document.getElementById(pianoButton).classList.remove("pressed"), 200);
    let audio = new Audio(`pianoAudio/${pianoButton}.mp3`);
    audio.play();
    console.log(pianoButton); // test
};

// ============================



strokePlay(textToArr(prompt('Test')));