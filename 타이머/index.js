// 1. 시간/분/초 입력할 수 있다.
// 2. start 버튼을 누르면 start버튼은 pause 버튼으로 바뀌고 타이머가 1초 단위로 감소한다
// 3. pause를 누르면 start버튼으로 바뀌고 타이머가 멈춘다.
// 4. 다시 start를 누르면 재시작
// 5. 0초가 되면 초기화 된다.
// 6. reset 버튼을 누르면 초기화 된다

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function startTimer() {
  if (startButton.textContent === "START") {
    startButton.textContent === "PAUSE";
    intervalId = setInterval(countDown, 1000);
  } else {
    startButton.textContent === "START";
    clearInterval(intervalId);
  }
}

startButton.addEventListener("click", startTimer);
