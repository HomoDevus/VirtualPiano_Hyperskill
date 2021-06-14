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

async function preload() {
    let loaded = 0;

    function audioPreload() {
        for (const [key, note] of Object.entries(decodeList)) {
            loaded--;
            let audio = new Audio();
            audio.src = `./pianoAudio/${note}.mp3`;
        }
    }

    await audioPreload();
    return true;
}

export {preload, decodeList};