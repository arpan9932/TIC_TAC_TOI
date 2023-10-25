let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
var i=0;

const changeTurn = () => {
  if (turn == "X" && isgameover == false) return "X";
  else if (turn == "0" && isgameover == false) return "0";
  else return "";
};
let boxes = document.getElementsByClassName("tile");
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      isgameover = true;
      let re = new RegExp(boxtext[e[0]].innerText, "g");
      console.log(re);
      document.querySelector(".display").innerText =
        " Player " + boxtext[e[0]].innerText + " Won";
      gameover.play();
    }
  });
};

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      turn = changeTurn();
      boxtext.innerText = turn;
      if (turn == "X") turn = "0";
      else turn = "X";
      audioTurn.play();
      checkWin();
      i++;
      if (!isgameover) {
        if (i==9)
          document.getElementsByClassName("display")[0].innerText = "NO Wins";
        else{
          console.log(i);
          document.getElementsByClassName("display")[0].innerText =
            " Player " + turn + " turn";
        }
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("display")[0].innerText =
    " Player " + turn + " turn";
  i=0;
});
