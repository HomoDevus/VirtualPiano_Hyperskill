window.onload = function(){ 
    const decodeList = {
        Digit1: "c2", Digit2: "d2", Digit3: "e2", 
        Digit4: "f2", Digit5: "g2", Digit6: "a2", Digit7: "b2",
        
        KeyQ: "c3", KeyW: "d3", KeyE: "e3", 
        KeyR: "f3", KeyT: "g3", KeyY: "a3", KeyU: "b3",

        KeyA: "c4", KeyS: "d4", KeyD: "e4", 
        KeyF: "f4", KeyG: "g4", KeyH: "a4", KeyJ: "b4",

        KeyZ: "c5", KeyX: "d5", KeyC: "e5", KeyV: "f5", 
        KeyB: "g5", KeyN: "a5", KeyM: "b5", Comma: "c6",

        Digit8: "Cb2", Digit9: "Db2", Digit0: "Fb2", 
        Minus: "Gb2", Equal: "Ab2",

        KeyI: "Cb3", KeyO: "Db3", KeyP: "Fb3", 
        BracketLeft: "Gb3", BracketRight: "Ab3",

        KeyK: "Cb4", KeyL: "Db4", Semicolon: "Fb4", 
        Quote: "Gb4", Backslash: "Ab4",

        Period: "Cb5", Slash: "Db5", ShiftRight: "Fb5", 
        ControlRight: "Gb5", Enter: "Ab5",
    }

    let robotButton = document.getElementById('robot-icon');

    // Проверяет какая кнопка нажата и проигрывает аудио
    document.addEventListener("keydown", function (event) {
        for (key in decodeList) {
            if (key == event.code) {
                let audio = new Audio(`pianoAudio/${decodeList[key]}.mp3`);
                audio.play();
                document.getElementById(decodeList[key]).classList.add("pressed"); // Добовляет класс со стилем нажатой клавиши
                console.log(decodeList[key]);
            };
        };
    });

    // Убирает класс со стилем нажатой клавиши
    document.addEventListener("keyup", function (event) {
        for (key in decodeList) {
            if (key == event.code) {
                document.getElementById(decodeList[key]).classList.remove("pressed");
            };
        };
    });

    // ======= Автопроигрывание ========

    // Преобразование текста в массив
    function textToArr(notesText) {
        // notesText = notesText.split(/\n\s\n/g); OLD
        notesText = notesText.split('\n\n');
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
        // octavStroke = octavStroke.slice(strokeBegining + 1, -2); OLD
        octavStroke = octavStroke.slice(strokeBegining + 1, -1);
        // -----------------------------------------------------------------
        console.log(octavStroke); // test
        octavStroke.forEach(function(note, noteIndex, octavStroke) {
            if (note != '-' && note != '|' && note != 'L' && note != 'H' && note != 'R' && note != ' ') {
                // Проверка чёрных клавиш (нужна потому что файлы с нотами не учитывают регистр)
                if (note == note.toUpperCase()) {
                    note += 'b'
                }
                let noteAndOctave = note + octave
                setTimeout(soundPlay, 115 * noteIndex, noteAndOctave);
            };
        });
    };

    // Проигрование клавиши
    function soundPlay(pianoButton) {
        console.log(pianoButton); // test
        document.getElementById(pianoButton).classList.add("pressed"); // Добовляет класс со стилем нажатой клавиши
        setTimeout(() => document.getElementById(pianoButton).classList.remove("pressed"), 200);
        let audio = new Audio(`pianoAudio/${pianoButton}.mp3`);
        audio.play();
        // console.log(pianoButton); // test
    };

    // ============================

    // ---------- Вызов кнопкой---------
    robotButton.onclick = buttonPress;

    function buttonPress() {
        strokePlay(textToArr(robotSong));
    }
    // ---------------------------------

    // ------Вызов через textarea ------
    let text = document.getElementById('notes-input');
    function playTextareaNotes() {
        let notes = text.value;
        console.log(notes);
        strokePlay(textToArr(notes));
    }
    text.onchange = playTextareaNotes;  
    // ---------------------------------

    const robotSong = `4|----c---d---e-d-c-c-e-c-g-|
    3|a-a---a---a---------------|

    4|c-e-c---------c---d-c-----|
    3|------g-g-b-g---g-----f-f-|

    4|----c---c-------c---d---e-|
    3|a-f---f---b-a-a---a---a---|

    4|d-c-c-e-c-g-c-e-c---------|
    3|------------------g-g-b-g-|

    4|c---d-c---------c---c-----|
    3|--g-----f-f-a-f---f---b-a-|

    4|------------c-------------|
    3|-a--a--a--g---a--a--a--a--|

    4|------------------c-------|
    3|g-e-a--a--a--a--g---a--a--|

    4|------------------------c-|
    3|a-aa-aa---a--a--a--a--g---|

    3|a--a--a--a--g-e-a--a--a--a|

    4|----c---------------------|
    3|--g---a--a--a-aa-aa---a--a|

    4|----------c---------------|
    3|--a--a--g---a--a--a--a--g-|

    4|----------------c---------|
    3|e-a--a--a--a--g---a--a--a-|

    4|----------------------c---|
    3|aa-aa---a--a--a--a--g---a-|

    3|-a--a--a--g-e-a--a--a--a--|

    4|--c------------------e--c-|
    3|g---a--a--a-aa-aa---a--a--|

    4|----c------e--c-----c-----|
    3|aA-a--aAg-a--a--aA-a--aAg-|

    4|-e--c-----c------e--c-----|
    3|a--a--aA-a--aAg-a--a--gg-g|

    4|-------e--c-----c------e--|
    3|a-a---a--a--aA-a--aAg-a--a|

    4|c-----c------e--c-----c---|
    3|--aA-a--aAg-a--a--aA-a--aA|

    4|---e--c---------------c---|
    3|g-a--a--gg-ga-a---a-a---a-|

    4|d---e-d-c-c-e-c-g-c-e-c---|
    3|--a---------------------g-|

    4|------c---d-c---------c---|
    3|g-b-g---g-----f-f-a-f---f-|

    4|c-------c---d---e-d-c-c-e-|
    3|--b-a-a---a---a-----------|

    4|c-g-c-e-c---------c---d-c-|
    3|----------g-g-b-g---g-----|

    4|--------c---c-------c---d-|
    3|f-f-a-f---f---b-a-a---a---|

    4|--e-d-c-c-e-c-g-c-e-c-----|
    3|a---------------------g-g-|

    4|----c---d-c---------c---c-|
    3|b-g---g-----f-f-a-f---f---|

    3|b-------------------------|`
};