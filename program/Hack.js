'use strict';

class Hack {

    draw() {
        let turn = screen%20;
        let pass = Math.floor(screen / 20);

        context.clearRect(0, 0, 1500, 1000);

        context.font = "48px sans-serif";

        //画像描画
        let img = new Image();

        img.src = './new_images/'+(passkind)+"/"+"auth_"+(turn+passturnnum*4)+".png";
        
        img.onload = function(){
            context.drawImage(img, 0, 0, imgsize*3, imgsize*3);}

        canvas.addEventListener('click', this.onClick, false);
    }

}