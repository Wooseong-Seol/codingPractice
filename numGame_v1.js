let prompt = require('prompt-sync')();

// 4개의 숫자 생성, 중복값 X, 자연수 O
const choices = [];
for (let i = 1; i <= 9; i += 1) {
    choices.push(i);
}

const comSelect = [];
for (let i = 0; i < 4; i++) {
    const numbers = Math.floor((Math.random() * choices.length));
    comSelect.push(choices[numbers]);
    choices.splice(numbers, 1);
}

// 유저의 입력값, 중복값 X, 자연수 O
let userSelect = [];
while (userSelect.length !== 4) {
  let choose = prompt("1-9 사이의 숫자를 입력하세요. 4개 모두 올바르게 입력할 때까지 진행됩니다");
  if (!userSelect.includes(choose) && !isNaN(choose) && choose >= 1 && choose <= 9) {
    userSelect.push(choose);
  }
}

// 스트라이크 & 볼 검사
let answer = [];
for (let i = 0; i < 4; i++) {
    if (comSelect[i] == userSelect[i]) {
        answer[i] = "STRIKE"
    } else if (comSelect.includes(userSelect[i]) && comSelect[i] !== userSelect[i]) {
        answer[i] = "BALL"
    } else {
        answer[i] = "MISS"
    }
}

// 유저의 입력값 컨펌
console.log("결과: " + answer + " | 당신의 정답은 " + userSelect + " 이었습니다.")
console.log("컴퓨터가 입력한 값은 " + comSelect + " 입니다. 참고하세요.")