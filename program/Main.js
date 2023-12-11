'use strict';

function onClick(e) {
	let x = e.offsetX;
 	let y = e.offsetY;

	//画面更新-1->0
 	if (screen == -1) {
 		name_input();
 	}

	//画面0->1 ... 4->5 ... 11->12 ->20
 	if (0 <= x && x < imgsize*3 && 0 <= y && y < imgsize*3 && screen%20 >=1 && screen%20 <= 4) {

 		context.clearRect(0, 0, 1500, 1000);
        let x = e.offsetX;
        let y = e.offsetY;
        let number = Math.floor(y / imgsize) * 3 + Math.floor(x / imgsize) + 1;

        answer.push(number);


        if (screen%20 <= 3) {

			let hack = new Hack();
			hack.draw();
			screen++;
        }
        else{

        	screen++;


 			let correct = data[passkind][1].slice(passturnnum*4,4+passturnnum*4);
 			let point = 0;
 			for (let i=0; i<4; i++) {
 				if (answer[i] == correct[i]) {
 					point++;
 				}
 			}


 			context.clearRect(0, 0, 1500, 1000);
			context.font = "128px sans-serif";

			let sentences;

			if (point == 4) {
				context.fillStyle = "red";
				sentences = ["認証成功"];
			}
			else {
				context.fillStyle = "blue";
				sentences = ["認証失敗"];
			}

			console.log(point, answer, correct);


			for (let i = 0; i < sentences.length; i++) {
				context.fillText(sentences[i], 0, 128*i+128);
				}
 		}			
        }
        
 	}


//画面更新
function next() {

	//画面更新0->1
 	if (screen%20 == 0 & screen<80) {
 		
 		passkind = parseInt(password.value);
		passturnnum = parseInt(passturn.value);

		alert("認証を開始します。"+"種類 "+passkind+", セット "+passturnnum);

 		context.clearRect(0, 0, 1500, 1000);
 		document.getElementById('next').style.visibility = 'hidden';
 		document.getElementById('password').style.visibility = 'hidden';
 		document.getElementById('passturn').style.visibility = 'hidden';

		let hack = new Hack();
		hack.draw();

        screen++;

		return;
 	}

}
	

// 画面番号
let screen = -1;

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.addEventListener('click', onClick, false);
let imgsize = 256;
let passkind;
let passturnnum;


//実験用データ
let data =[

	["耳に髪がかかっていない人", [6, 2, 4, 7, 7, 2, 5, 5, 9, 9, 8, 8]],

	["モンゴロイドの女性", [2, 1, 5, 1, 9, 4, 2, 7, 3, 9, 5, 8]],

	["背景が緑", [2, 1, 9, 2, 2, 7, 2, 4, 1, 7, 6, 9]],

	["幼い女の子", [3, 5, 5, 3, 4, 4, 9, 8, 2, 4, 4, 7]]

	];



//初期画面
context.font = "48px sans-serif";

document.getElementById('next').style.visibility = 'hidden';
document.getElementById('next').style.display = 'none';

document.getElementById('password').style.visibility = 'visible';

let points = [];

let answer = [];

//名前入力
function name_input() {

	//画面更新-1->0
 	if (screen == -1) {

		document.getElementById('next').style.display = 'inline';

		window.scrollTo(0,0);
		context.clearRect(0, 0, 1500, 1000);
		context.font = "48px sans-serif";
		let sentences = [
			"番号を選択してください"]

		for (let i = 0; i < sentences.length; i++) {
			context.fillText(sentences[i], 0, 48*i+48);
			}

		document.getElementById('next').style.visibility = 'visible';

 		screen++;
 	}

}

window.onbeforeunload = function(e) {
    e.returnValue = "ページを離れようとしています。よろしいですか？";
}