let prompt = require('prompt-sync')();

const basic = ["가위", "바위", "보"];
let choose = "";

while (choose != "종료") {
    let generator = Math.floor((Math.random() * 3));
    generator = basic[generator]

    let choose = prompt("가위, 바위, 보! 도전하세요 (띄어쓰기 금지)!");

    while (!basic.includes(choose)) {
            console.log("가위, 바위, 보를 입력하신게 맞나요? 다시 입력하세요.");
    }
    
    if (generator == choose) {
        choose = console.log("비겼으니 다시 입력하세요. 종료를 원하면 '종료'를 입력하세요.");
    } else if (
        (choose == basic[0] && generator == basic[2]) || 
        (choose == basic[1] && generator == basic[0]) || 
        (choose == basic[2] && generator == basic[1])
    ){
        console.log("축하드립니다! 한번 더 이겨보세요. 종료를 원하면 '종료'를 입력하세요.");
    } else {
        console.log("졌습니다. 다음을 기약하세요. 종료를 원하면 '종료'를 입력하세요.");
    }     
} 