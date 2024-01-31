// Создание контейнеров и присвоение классов

let body = document.body;
body.classList.add("body");

let main = document.createElement("div");
main.classList.add("main");

let mediaSection = document.createElement("div");
mediaSection.classList.add("media-section");

const interactionSection = document.createElement("div");
interactionSection.classList.add("interaction-section");

const gallow = document.createElement("div");
gallow.classList.add("gallow");

const hangman = document.createElement("div");
hangman.classList.add("hangman");

const hangmanHead = document.createElement("div");
hangmanHead.classList.add("hangman-head");

const hangmanBody = document.createElement("div");
hangmanBody.classList.add("hangman-body");

const hangmanLegs = document.createElement("div");
hangmanLegs.classList.add("hangman-legs");

// Виселица и повешенный

const head = document.createElement("img");
head.classList.add("head");
head.src = "media/head.svg";
head.style.visibility = "hidden";

const leftHand = document.createElement("img");
leftHand.classList.add("left-hand");
leftHand.src = "media/left-hand.svg";
leftHand.style.visibility = "hidden";

const tors = document.createElement("img");
tors.classList.add("tors");
tors.src = "media/body.svg";
tors.style.visibility = "hidden";

const rightHand = document.createElement("img");
rightHand.classList.add("right-hand");
rightHand.src = "media/right-hand.svg";
rightHand.style.visibility = "hidden";

const rightLeg = document.createElement("img");
rightLeg.classList.add("right-leg");
rightLeg.src = "media/right-leg.svg";
rightLeg.style.visibility = "hidden";

const leftLeg = document.createElement("img");
leftLeg.classList.add("left-leg");
leftLeg.src = "media/left-leg.svg";
leftLeg.style.visibility = "hidden";

/* Для постепенного отображения повешенного */

const hangmanReveal = [head, leftHand, tors, rightHand, leftLeg, rightLeg];

/* game-title */

const title = document.createElement("div");
title.classList.add("title");

const titleText = document.createElement("h1");
titleText.classList.add("title-text");
titleText.innerHTML = "HANGMAN GAME";

/* letters-puzzle */

const lettersPuzzle = document.createElement("div");
lettersPuzzle.classList.add("letters-puzzle");

/* letter puzzle (буквы) */

const letterPuzzle0 = document.createElement("div");
letterPuzzle0.classList.add("letter-puzzle");
letterPuzzle0.innerHTML = "0";
letterPuzzle0.style.display = "none";

const letterPuzzle1 = document.createElement("div");
letterPuzzle1.classList.add("letter-puzzle");
letterPuzzle1.innerHTML = "1";
letterPuzzle1.style.display = "none";

const letterPuzzle2 = document.createElement("div");
letterPuzzle2.classList.add("letter-puzzle");
letterPuzzle2.innerHTML = "2";
letterPuzzle2.style.display = "none";

const letterPuzzle3 = document.createElement("div");
letterPuzzle3.classList.add("letter-puzzle");
letterPuzzle3.innerHTML = "3";
letterPuzzle3.style.display = "none";

const letterPuzzle4 = document.createElement("div");
letterPuzzle4.classList.add("letter-puzzle");
letterPuzzle4.innerHTML = "4";
letterPuzzle4.style.display = "none";

const letterPuzzle5 = document.createElement("div");
letterPuzzle5.classList.add("letter-puzzle");
letterPuzzle5.innerHTML = "5";
letterPuzzle5.style.display = "none";

const letterPuzzle6 = document.createElement("div");
letterPuzzle6.classList.add("letter-puzzle");
letterPuzzle6.innerHTML = "6";
letterPuzzle6.style.display = "none";

const letterPuzzle7 = document.createElement("div");
letterPuzzle7.classList.add("letter-puzzle");
letterPuzzle7.innerHTML = "7";
letterPuzzle7.style.display = "none";

const letterPuzzleArr = [
  letterPuzzle0,
  letterPuzzle1,
  letterPuzzle2,
  letterPuzzle3,
  letterPuzzle4,
  letterPuzzle5,
  letterPuzzle6,
  letterPuzzle7,
];

/* hint */

const hint = document.createElement("div");
hint.classList.add("hint");

const hintText = document.createElement("div");
hint.classList.add("hint-text");
hintText.innerHTML = "Hint:";

const puzzleText = document.createElement("div");
hint.classList.add("hint-text");
puzzleText.innerHTML = "text text text text?";

const incorrectGuesses = document.createElement("div");
incorrectGuesses.classList.add("incorrect-guesses");
incorrectGuesses.innerHTML = "Incorrect guesses: 0/6";

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

// Кнопки клавиатур

const key_q = document.createElement("button");
key_q.classList.add("keyboard-letter");
key_q.innerHTML = "Q";
key_q.onclick = function () {
  key_q.classList.remove("keyboard-letter");
  key_q.classList.add("keyboard-letter-pressed");
  key_q.disabled = true;
  checkLetter("Q", gameWord);
};

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ") {
    if (key_q.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_q.classList.remove("keyboard-letter");
    key_q.classList.add("keyboard-letter-pressed");
    key_q.disabled = true;
    checkLetter("Q", gameWord);
    return;
  }
  if (event.code == "KeyW") {
    if (key_w.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_w.classList.remove("keyboard-letter");
    key_w.classList.add("keyboard-letter-pressed");
    key_w.disabled = true;
    checkLetter("W", gameWord);
    return;
  }
  if (event.code == "KeyE") {
    if (key_e.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_e.classList.remove("keyboard-letter");
    key_e.classList.add("keyboard-letter-pressed");
    key_e.disabled = true;
    checkLetter("E", gameWord);
    return;
  }
  if (event.code == "KeyR") {
    if (key_r.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_r.classList.remove("keyboard-letter");
    key_r.classList.add("keyboard-letter-pressed");
    key_r.disabled = true;
    checkLetter("R", gameWord);
    return;
  }
  if (event.code == "KeyT") {
    if (key_t.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_t.classList.remove("keyboard-letter");
    key_t.classList.add("keyboard-letter-pressed");
    key_t.disabled = true;
    checkLetter("T", gameWord);
    return;
  }
  if (event.code == "KeyY") {
    if (key_y.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_y.classList.remove("keyboard-letter");
    key_y.classList.add("keyboard-letter-pressed");
    key_y.disabled = true;
    checkLetter("Y", gameWord);
    return;
  }
  if (event.code == "KeyU") {
    if (key_u.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_u.classList.remove("keyboard-letter");
    key_u.classList.add("keyboard-letter-pressed");
    key_u.disabled = true;
    checkLetter("U", gameWord);
    return;
  }
  if (event.code == "KeyI") {
    if (key_i.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_i.classList.remove("keyboard-letter");
    key_i.classList.add("keyboard-letter-pressed");
    key_i.disabled = true;
    checkLetter("I", gameWord);
    return;
  }
  if (event.code == "KeyO") {
    if (key_o.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_o.classList.remove("keyboard-letter");
    key_o.classList.add("keyboard-letter-pressed");
    key_o.disabled = true;
    checkLetter("O", gameWord);
    return;
  }
  if (event.code == "KeyP") {
    if (key_p.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_p.classList.remove("keyboard-letter");
    key_p.classList.add("keyboard-letter-pressed");
    key_p.disabled = true;
    checkLetter("P", gameWord);
    return;
  }
  if (event.code == "KeyA") {
    if (key_a.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_a.classList.remove("keyboard-letter");
    key_a.classList.add("keyboard-letter-pressed");
    key_a.disabled = true;
    checkLetter("A", gameWord);
    return;
  }
  if (event.code == "KeyS") {
    if (key_s.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_s.classList.remove("keyboard-letter");
    key_s.classList.add("keyboard-letter-pressed");
    key_s.disabled = true;
    checkLetter("S", gameWord);
    return;
  }
  if (event.code == "KeyD") {
    if (key_d.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_d.classList.remove("keyboard-letter");
    key_d.classList.add("keyboard-letter-pressed");
    key_d.disabled = true;
    checkLetter("D", gameWord);
    return;
  }
  if (event.code == "KeyF") {
    if (key_f.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_f.classList.remove("keyboard-letter");
    key_f.classList.add("keyboard-letter-pressed");
    key_f.disabled = true;
    checkLetter("F", gameWord);
    return;
  }
  if (event.code == "KeyG") {
    if (key_g.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_g.classList.remove("keyboard-letter");
    key_g.classList.add("keyboard-letter-pressed");
    key_g.disabled = true;
    checkLetter("G", gameWord);
    return;
  }
  if (event.code == "KeyH") {
    if (key_h.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_h.classList.remove("keyboard-letter");
    key_h.classList.add("keyboard-letter-pressed");
    key_h.disabled = true;
    checkLetter("H", gameWord);
    return;
  }
  if (event.code == "KeyJ") {
    if (key_j.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_j.classList.remove("keyboard-letter");
    key_j.classList.add("keyboard-letter-pressed");
    key_j.disabled = true;
    checkLetter("J", gameWord);
    return;
  }
  if (event.code == "KeyK") {
    if (key_k.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_k.classList.remove("keyboard-letter");
    key_k.classList.add("keyboard-letter-pressed");
    key_k.disabled = true;
    checkLetter("K", gameWord);
    return;
  }
  if (event.code == "KeyL") {
    if (key_l.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_l.classList.remove("keyboard-letter");
    key_l.classList.add("keyboard-letter-pressed");
    key_l.disabled = true;
    checkLetter("L", gameWord);
    return;
  }
  if (event.code == "KeyZ") {
    if (key_z.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_z.classList.remove("keyboard-letter");
    key_z.classList.add("keyboard-letter-pressed");
    key_z.disabled = true;
    checkLetter("Z", gameWord);
    return;
  }
  if (event.code == "KeyX") {
    if (key_x.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_x.classList.remove("keyboard-letter");
    key_x.classList.add("keyboard-letter-pressed");
    key_x.disabled = true;
    checkLetter("X", gameWord);
    return;
  }
  if (event.code == "KeyC") {
    if (key_c.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_c.classList.remove("keyboard-letter");
    key_c.classList.add("keyboard-letter-pressed");
    key_c.disabled = true;
    checkLetter("C", gameWord);
    return;
  }
  if (event.code == "KeyV") {
    if (key_v.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_v.classList.remove("keyboard-letter");
    key_v.classList.add("keyboard-letter-pressed");
    key_v.disabled = true;
    checkLetter("V", gameWord);
    return;
  }
  if (event.code == "KeyB") {
    if (key_b.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_b.classList.remove("keyboard-letter");
    key_b.classList.add("keyboard-letter-pressed");
    key_b.disabled = true;
    checkLetter("B", gameWord);
    return;
  }
  if (event.code == "KeyN") {
    if (key_n.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_n.classList.remove("keyboard-letter");
    key_n.classList.add("keyboard-letter-pressed");
    key_n.disabled = true;
    checkLetter("N", gameWord);
    return;
  }
  if (event.code == "KeyM") {
    if (key_m.classList.contains("keyboard-letter-pressed")) {
      console.log("Уже нажата виртуально!");
      event.preventDefault();
      return;
    }
    key_m.classList.remove("keyboard-letter");
    key_m.classList.add("keyboard-letter-pressed");
    key_m.disabled = true;
    checkLetter("M", gameWord);
    return;
  }
});

const key_w = document.createElement("button");
key_w.classList.add("keyboard-letter");
key_w.innerHTML = "W";
key_w.onclick = function () {
  key_w.classList.remove("keyboard-letter");
  key_w.classList.add("keyboard-letter-pressed");
  key_w.disabled = true;
  checkLetter("W", gameWord);
};

const key_e = document.createElement("button");
key_e.classList.add("keyboard-letter");
key_e.innerHTML = "E";
key_e.onclick = function () {
  key_e.classList.remove("keyboard-letter");
  key_e.classList.add("keyboard-letter-pressed");
  key_e.disabled = true;
  checkLetter("E", gameWord);
};

const key_r = document.createElement("button");
key_r.classList.add("keyboard-letter");
key_r.innerHTML = "R";
key_r.onclick = function () {
  key_r.classList.remove("keyboard-letter");
  key_r.classList.add("keyboard-letter-pressed");
  key_r.disabled = true;
  checkLetter("R", gameWord);
};

const key_t = document.createElement("button");
key_t.classList.add("keyboard-letter");
key_t.innerHTML = "T";
key_t.onclick = function () {
  key_t.classList.remove("keyboard-letter");
  key_t.classList.add("keyboard-letter-pressed");
  key_t.disabled = true;
  checkLetter("T", gameWord);
};

const key_y = document.createElement("button");
key_y.classList.add("keyboard-letter");
key_y.innerHTML = "Y";
key_y.onclick = function () {
  key_y.classList.remove("keyboard-letter");
  key_y.classList.add("keyboard-letter-pressed");
  key_y.disabled = true;
  checkLetter("Y", gameWord);
};

const key_u = document.createElement("button");
key_u.classList.add("keyboard-letter");
key_u.innerHTML = "U";
key_u.onclick = function () {
  key_u.classList.remove("keyboard-letter");
  key_u.classList.add("keyboard-letter-pressed");
  key_u.disabled = true;
  checkLetter("U", gameWord);
};

const key_i = document.createElement("button");
key_i.classList.add("keyboard-letter");
key_i.innerHTML = "I";
key_i.onclick = function () {
  key_i.classList.remove("keyboard-letter");
  key_i.classList.add("keyboard-letter-pressed");
  key_i.disabled = true;
  checkLetter("I", gameWord);
};

const key_o = document.createElement("button");
key_o.classList.add("keyboard-letter");
key_o.innerHTML = "O";
key_o.onclick = function () {
  key_o.classList.remove("keyboard-letter");
  key_o.classList.add("keyboard-letter-pressed");
  key_o.disabled = true;
  checkLetter("O", gameWord);
};

const key_p = document.createElement("button");
key_p.classList.add("keyboard-letter");
key_p.innerHTML = "P";
key_p.onclick = function () {
  key_p.classList.remove("keyboard-letter");
  key_p.classList.add("keyboard-letter-pressed");
  key_p.disabled = true;
  checkLetter("P", gameWord);
};

const key_a = document.createElement("button");
key_a.classList.add("keyboard-letter");
key_a.innerHTML = "A";
key_a.onclick = function () {
  key_a.classList.remove("keyboard-letter");
  key_a.classList.add("keyboard-letter-pressed");
  key_a.disabled = true;
  checkLetter("A", gameWord);
};

const key_s = document.createElement("button");
key_s.classList.add("keyboard-letter");
key_s.innerHTML = "S";
key_s.onclick = function () {
  key_s.classList.remove("keyboard-letter");
  key_s.classList.add("keyboard-letter-pressed");
  key_s.disabled = true;
  checkLetter("S", gameWord);
};

const key_d = document.createElement("button");
key_d.classList.add("keyboard-letter");
key_d.innerHTML = "D";
key_d.onclick = function () {
  key_d.classList.remove("keyboard-letter");
  key_d.classList.add("keyboard-letter-pressed");
  key_d.disabled = true;
  checkLetter("D", gameWord);
};

const key_f = document.createElement("button");
key_f.classList.add("keyboard-letter");
key_f.innerHTML = "F";
key_f.onclick = function () {
  key_f.classList.remove("keyboard-letter");
  key_f.classList.add("keyboard-letter-pressed");
  key_f.disabled = true;
  checkLetter("F", gameWord);
};

const key_g = document.createElement("button");
key_g.classList.add("keyboard-letter");
key_g.innerHTML = "G";
key_g.onclick = function () {
  key_g.classList.remove("keyboard-letter");
  key_g.classList.add("keyboard-letter-pressed");
  key_g.disabled = true;
  checkLetter("G", gameWord);
};

const key_h = document.createElement("button");
key_h.classList.add("keyboard-letter");
key_h.innerHTML = "H";
key_h.onclick = function () {
  key_h.classList.remove("keyboard-letter");
  key_h.classList.add("keyboard-letter-pressed");
  key_h.disabled = true;
  checkLetter("H", gameWord);
};

const key_j = document.createElement("button");
key_j.classList.add("keyboard-letter");
key_j.innerHTML = "J";
key_j.onclick = function () {
  key_j.classList.remove("keyboard-letter");
  key_j.classList.add("keyboard-letter-pressed");
  key_j.disabled = true;
  checkLetter("D", gameWord);
};

const key_k = document.createElement("button");
key_k.classList.add("keyboard-letter");
key_k.innerHTML = "K";
key_k.onclick = function () {
  key_k.classList.remove("keyboard-letter");
  key_k.classList.add("keyboard-letter-pressed");
  key_k.disabled = true;
  checkLetter("K", gameWord);
};

const key_l = document.createElement("button");
key_l.classList.add("keyboard-letter");
key_l.innerHTML = "L";
key_l.onclick = function () {
  key_l.classList.remove("keyboard-letter");
  key_l.classList.add("keyboard-letter-pressed");
  key_l.disabled = true;
  checkLetter("L", gameWord);
};

const key_z = document.createElement("button");
key_z.classList.add("keyboard-letter");
key_z.innerHTML = "Z";
key_z.onclick = function () {
  key_z.classList.remove("keyboard-letter");
  key_z.classList.add("keyboard-letter-pressed");
  key_z.disabled = true;
  checkLetter("Z", gameWord);
};

const key_x = document.createElement("button");
key_x.classList.add("keyboard-letter");
key_x.innerHTML = "X";
key_x.onclick = function () {
  key_x.classList.remove("keyboard-letter");
  key_x.classList.add("keyboard-letter-pressed");
  key_x.disabled = true;
  checkLetter("X", gameWord);
};

const key_c = document.createElement("button");
key_c.classList.add("keyboard-letter");
key_c.innerHTML = "C";
key_c.onclick = function () {
  key_c.classList.remove("keyboard-letter");
  key_c.classList.add("keyboard-letter-pressed");
  key_c.disabled = true;
  checkLetter("C", gameWord);
};

const key_v = document.createElement("button");
key_v.classList.add("keyboard-letter");
key_v.innerHTML = "V";
key_v.onclick = function () {
  key_v.classList.remove("keyboard-letter");
  key_v.classList.add("keyboard-letter-pressed");
  key_v.disabled = true;
  checkLetter("V", gameWord);
};

const key_b = document.createElement("button");
key_b.classList.add("keyboard-letter");
key_b.innerHTML = "B";
key_b.onclick = function () {
  key_b.classList.remove("keyboard-letter");
  key_b.classList.add("keyboard-letter-pressed");
  key_b.disabled = true;
  checkLetter("B", gameWord);
};

const key_n = document.createElement("button");
key_n.classList.add("keyboard-letter");
key_n.innerHTML = "N";
key_n.onclick = function () {
  key_n.classList.remove("keyboard-letter");
  key_n.classList.add("keyboard-letter-pressed");
  key_n.disabled = true;
  checkLetter("N", gameWord);
};

const key_m = document.createElement("button");
key_m.classList.add("keyboard-letter");
key_m.innerHTML = "M";
key_m.onclick = function () {
  key_m.classList.remove("keyboard-letter");
  key_m.classList.add("keyboard-letter-pressed");
  key_m.disabled = true;
  checkLetter("M", gameWord);
};

// Модальное окно

const modalWindow = document.createElement("div");
modalWindow.classList.add("modal-window");
modalWindow.style.display = "none";

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const secretWord = document.createElement("h3");
secretWord.classList.add("secret-word");
secretWord.innerHTML = "Secret word: ";

const endgameText = document.createElement("h3");
endgameText.classList.add("endgame-text");
endgameText.innerHTML = "";

const buttonRestart = document.createElement("button");
buttonRestart.classList.add("button-restart");
buttonRestart.innerHTML = "PLAY AGAIN";

// Наполнение контейнерами

body.append(main);

// Модалка

body.append(modalWindow);
modalWindow.append(modalContent);
modalContent.append(secretWord, endgameText, buttonRestart);

main.append(mediaSection, interactionSection);
mediaSection.append(gallow, title);
interactionSection.append(lettersPuzzle, hint, incorrectGuesses, keyboard);
gallow.append(hangman);

//Добавление закрытых букв

lettersPuzzle.append(
  letterPuzzle0,
  letterPuzzle1,
  letterPuzzle2,
  letterPuzzle3,
  letterPuzzle4,
  letterPuzzle5,
  letterPuzzle6,
  letterPuzzle7
);

//Добавления человека

hangman.append(hangmanHead, hangmanBody, hangmanLegs);
hangmanHead.append(head);
hangmanBody.append(rightHand, tors, leftHand);
hangmanLegs.append(rightLeg, leftLeg);
title.append(titleText);
hint.append(hintText, puzzleText);

// Наполнение кнопками клавиатуры

keyboard.append(
  key_q,
  key_w,
  key_e,
  key_r,
  key_t,
  key_y,
  key_u,
  key_i,
  key_o,
  key_p,
  key_a,
  key_s,
  key_d,
  key_f,
  key_g,
  key_h,
  key_j,
  key_k,
  key_l,
  key_z,
  key_x,
  key_c,
  key_v,
  key_b,
  key_n,
  key_m
);

/* Важный счетчик! Обнулять в начале каждоый игры */

let mainCounter = 0;
const provideUnique = [];
const compareLetter = [];

// Random logic

const answers = [
  "BOTTLE",
  "RAIN",
  "BATTERY",
  "SHADOW",
  "SECRET",
  "MIRROR",
  "TOMORROW",
  "FIRE",
  "DOORBELL",
  "ORANGE",
];

const hints = [
  "What has a neck but no head?",
  "What comes down but never goes up?",
  "I have no life, but I can die",
  "What can be big as an elephant but weigh nothing?",
  "If I have it, I don`t share it. If I share it, I don`t have it.",
  "Look at my face and you see somebody. Look at my back and you see nobody.",
  "I will always come, never arrive today.",
  "If you give me water, I will die.",
  "What asks no question but demands an answer?",
  "Which fruit is spelt like a colour?",
];

let firstPuzzle = getRandomInt(answers.length);
let newGameCount;
let wordThisRound;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function newGame() {
  newGameCount = getRandomInt(answers.length);
  while (newGameCount === firstPuzzle || provideUnique.includes(newGameCount)) {
    newGameCount = getRandomInt(answers.length);
  }
  firstPuzzle = newGameCount;
  provideUnique.push(newGameCount);
  return newGameCount;
}

// Функция наполнения текстом

function fillingWords(number) {
  puzzleText.innerHTML = `${hints[number]}`;
  wordThisRound = answers[number].split("");
  for (let i = 0; i < wordThisRound.length; i++) {
    letterPuzzleArr[i].innerHTML = "_";
    letterPuzzleArr[i].style.display = "block";
  }
  return wordThisRound;
}

let firstGame;
let gameWord;

function game() {
  firstGame = newGame();
  gameWord = fillingWords(firstGame);
  console.log("Слово раунда: " + gameWord.join(""));
}

game();

/* Функции обнуления при начале новой игры+ */

function resetKeyboard() {
  key_q.disabled = false;
  key_q.classList.add("keyboard-letter");
  key_q.classList.remove("keyboard-letter-pressed");
  key_w.disabled = false;
  key_w.classList.add("keyboard-letter");
  key_w.classList.remove("keyboard-letter-pressed");
  key_e.disabled = false;
  key_e.classList.add("keyboard-letter");
  key_e.classList.remove("keyboard-letter-pressed");
  key_r.disabled = false;
  key_r.classList.add("keyboard-letter");
  key_r.classList.remove("keyboard-letter-pressed");
  key_t.disabled = false;
  key_t.classList.add("keyboard-letter");
  key_t.classList.remove("keyboard-letter-pressed");
  key_y.disabled = false;
  key_y.classList.add("keyboard-letter");
  key_y.classList.remove("keyboard-letter-pressed");
  key_u.disabled = false;
  key_u.classList.add("keyboard-letter");
  key_u.classList.remove("keyboard-letter-pressed");
  key_i.disabled = false;
  key_i.classList.add("keyboard-letter");
  key_i.classList.remove("keyboard-letter-pressed");
  key_o.disabled = false;
  key_o.classList.add("keyboard-letter");
  key_o.classList.remove("keyboard-letter-pressed");
  key_p.disabled = false;
  key_p.classList.add("keyboard-letter");
  key_p.classList.remove("keyboard-letter-pressed");
  key_a.disabled = false;
  key_a.classList.add("keyboard-letter");
  key_a.classList.remove("keyboard-letter-pressed");
  key_s.disabled = false;
  key_s.classList.add("keyboard-letter");
  key_s.classList.remove("keyboard-letter-pressed");
  key_d.disabled = false;
  key_d.classList.add("keyboard-letter");
  key_d.classList.remove("keyboard-letter-pressed");
  key_f.disabled = false;
  key_f.classList.add("keyboard-letter");
  key_f.classList.remove("keyboard-letter-pressed");
  key_g.disabled = false;
  key_g.classList.add("keyboard-letter");
  key_g.classList.remove("keyboard-letter-pressed");
  key_h.disabled = false;
  key_h.classList.add("keyboard-letter");
  key_h.classList.remove("keyboard-letter-pressed");
  key_j.disabled = false;
  key_j.classList.add("keyboard-letter");
  key_j.classList.remove("keyboard-letter-pressed");
  key_k.disabled = false;
  key_k.classList.add("keyboard-letter");
  key_k.classList.remove("keyboard-letter-pressed");
  key_l.disabled = false;
  key_l.classList.add("keyboard-letter");
  key_l.classList.remove("keyboard-letter-pressed");
  key_z.disabled = false;
  key_z.classList.add("keyboard-letter");
  key_z.classList.remove("keyboard-letter-pressed");
  key_x.disabled = false;
  key_x.classList.add("keyboard-letter");
  key_x.classList.remove("keyboard-letter-pressed");
  key_c.disabled = false;
  key_c.classList.add("keyboard-letter");
  key_c.classList.remove("keyboard-letter-pressed");
  key_v.disabled = false;
  key_v.classList.add("keyboard-letter");
  key_v.classList.remove("keyboard-letter-pressed");
  key_b.disabled = false;
  key_b.classList.add("keyboard-letter");
  key_b.classList.remove("keyboard-letter-pressed");
  key_n.disabled = false;
  key_n.classList.add("keyboard-letter");
  key_n.classList.remove("keyboard-letter-pressed");
  key_m.disabled = false;
  key_m.classList.add("keyboard-letter");
  key_m.classList.remove("keyboard-letter-pressed");
}

function resetHangman() {
  hangmanReveal[0].style.visibility = "hidden";
  hangmanReveal[1].style.visibility = "hidden";
  hangmanReveal[2].style.visibility = "hidden";
  hangmanReveal[3].style.visibility = "hidden";
  hangmanReveal[4].style.visibility = "hidden";
  hangmanReveal[5].style.visibility = "hidden";
}

function resetGuesses() {
  incorrectGuesses.innerHTML = "Incorrect guesses: 0/6";
}

function resetCounter() {
  mainCounter = 0;
}

/* Функция проверки наличия нажатой буквы */

function checkLetter(letter, word) {
  let innerCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      letterPuzzleArr[i].innerHTML = `${letter}`;
      innerCount++;
      compareLetter.push(word[i]);
      if (word.every((x) => compareLetter.includes(x))) {
        winHangman();
      }
    }
  }
  if (innerCount === 0) {
    missedLetter();
  }
}

/* Функция для отображения человечка и подсчета неверных магов */

function missedLetter() {
  mainCounter++;
  if (mainCounter === 1) {
    incorrectGuesses.innerHTML = "Incorrect guesses: 1/6";
    hangmanReveal[0].style.visibility = "visible";
  }
  if (mainCounter === 2) {
    incorrectGuesses.innerHTML = "Incorrect guesses: 2/6";
    hangmanReveal[2].style.visibility = "visible";
  }
  if (mainCounter === 3) {
    incorrectGuesses.innerHTML = "Incorrect guesses: 3/6";
    hangmanReveal[1].style.visibility = "visible";
  }
  if (mainCounter === 4) {
    incorrectGuesses.innerHTML = "Incorrect guesses: 4/6";
    hangmanReveal[3].style.visibility = "visible";
  }
  if (mainCounter === 5) {
    incorrectGuesses.innerHTML = "Incorrect guesses: 5/6";
    hangmanReveal[4].style.visibility = "visible";
  }
  if (mainCounter === 6) {
    incorrectGuesses.innerHTML = "Incorrect guesses: 6/6";
    hangmanReveal[5].style.visibility = "visible";
    loseHangman();
  }
}

/* Вариации Endgame */

function winHangman() {
  modalWindow.style.display = "flex";
  secretWord.innerHTML = `Secret word: ${gameWord.join("")}`;
  endgameText.innerHTML = "Congratulations! You win!";
}

function loseHangman() {
  modalWindow.style.display = "flex";
  secretWord.innerHTML = `Secret word: ${gameWord.join("")}`;
  endgameText.innerHTML = "You lose! Better luck next time!";
}

// Play again button / refresh economy

buttonRestart.onclick = function () {
  resetKeyboard();
  resetCounter();
  resetGuesses();
  resetHangman();
  compareLetter.length = 0;
  modalWindow.style.display = "none";
  for (let i = 0; i < gameWord.length; i++) {
    letterPuzzleArr[i].style.display = "none";
  }
  game();
};
