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
        let number = Math.floor(y / imgsize) * 3 + Math.floor(x / imgsize);

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
			context.font = "64px sans-serif";

			let sentences;

			if (point == 4) {
				context.fillStyle = "red";
				sentences = ["Authentication Succeess"];
			}
			else {
				context.fillStyle = "blue";
				sentences = ["Authentication Failure"];
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

	["showing teeth", [0, 2, 7, 5, 4, 1, 4, 1, 4, 4, 3, 6]],

	["forehead is hidden", [8, 7, 8, 1, 0, 5, 3, 6, 5, 4, 1, 7]],

	["green background", [0, 2, 6, 2, 5, 6, 6, 2, 1, 0, 3, 1]],

	["short cut", [1, 6, 4, 6, 2, 6, 8, 6, 8, 0, 8, 5]],

	["wearing a hat", [7, 3, 8, 4, 4, 2, 1, 7, 6, 3, 5, 7]]

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
			"Choose the criteria"]

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