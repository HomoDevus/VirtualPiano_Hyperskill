import {decodeList, preload} from './init.js'
import robotSong from "./robotSong.js";

preload().then(() => {
    let robotButton = document.getElementById('robot-icon');

    // Проверяет какая кнопка нажата и проигрывает аудио
    document.addEventListener("keydown", function (event) {
        let noteAudio = decodeList[event.code];
        if (noteAudio !== undefined) {
            let audio = new Audio(`pianoAudio/${noteAudio}.mp3`);
            audio.play();

            // Добовляет класс со стилем нажатой клавиши
            document.getElementById(decodeList[noteAudio]).classList.add("pressed");
        } else {
            console.log('Клавиши ' + event.code + 'не существует')
        }
    });

    // Убирает класс со стилем нажатой клавиши
    document.addEventListener("keyup", function (event) {
        let noteAudio = decodeList[event.code];
        if (noteAudio !== undefined) {
            document.getElementById(decodeList[noteAudio]).classList.remove("pressed");
        }
    });

    // ======= Автопроигрывание ========

    // Преобразование текста в массив
    function textToArr(notesText) {
        // notesText = notesText.split(/\n\s\n/g); OLD
        notesText = notesText.split('\n\n');
        return notesText.map(function (notesLine) {
            return notesLine.split("\n");
        });
    }

    // Функция перебирания строк (может быть больше чем одна строка если несколько октав)
    function strokePlay(notesList) {
        notesList.forEach(function (notesStrokes, i, notesList) {
            setTimeout(lineStarter, 3000 * i, notesStrokes);
        });
    }

    function lineStarter(notesStrokes) {
        notesStrokes.forEach(function (octavStroke, LineIndex, notesStrokes) {
            linePlay(octavStroke);
        });
    }

    // Перебирание каждой октавы
    function linePlay(octavStroke) {
        octavStroke = octavStroke.split('');
        // --- Удаляет ненужные элементы и присваевает октаве переменную ---
        let strokeBegining = octavStroke.indexOf('|')
        let octave = octavStroke[strokeBegining - 1]
        octavStroke = octavStroke.slice(strokeBegining + 1, -1);
        // -----------------------------------------------------------------
        octavStroke.forEach(function (note, noteIndex, octavStroke) {
            if (note != '-' && note != '|' && note != 'L' && note != 'H' && note != 'R' && note != ' ') {
                // Проверка чёрных клавиш (нужна потому что файлы с нотами не учитывают регистр)
                if (note == note.toUpperCase()) {
                    note += 'b'
                }
                let noteAndOctave = note + octave
                setTimeout(soundPlay, 115 * noteIndex, noteAndOctave);
            }
        });
    }

    // Проигрование клавиши
    function soundPlay(pianoButton) {
        document.getElementById(pianoButton).classList.add("pressed"); // Добовляет класс со стилем нажатой клавиши
        setTimeout(() => document.getElementById(pianoButton).classList.remove("pressed"), 200);
        let audio = new Audio(`pianoAudio/${pianoButton}.mp3`);
        audio.play();
    }
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
        strokePlay(textToArr(notes));
    }

    text.onchange = playTextareaNotes;
})
