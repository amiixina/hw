let canvas = document.querySelector("#canvas-animation");
const ctx = canvas.getContext("2d");
const image = document.querySelector("#source");


class Player {
    constructor (){
        this.x =  20; 
        this.y = 200;
        this.w= 50;
        this.h= 50;
        this.speed= 2;
        this.dx= 0;
        this.dy= 0;
        this.angle=0;
    }
    
    get noseX(){
        switch (this.angle){
            case 0:
                return this.x + this.w;
                break;
            case 90:
                return this.x + this.w/2;
                break;
            case 180:
                return this.x ;
                break;
            case 270:
                return this.x + this.w/2;
                break;
            }
    }

    get noseY(){
        switch (this.angle){
            case 0:
                return this.y + this.h/2;
                break;
            case 90:
                return this.y + this.h;
                break;
            case 180:
                return this.y + this.h/2;
                break;
            case 270:
                return this.y;
                break;
            }
    }

    newPos(){
        this.x += this.dx;
        this.y += this.dy;
        this.detectBorder();
        if (this.dx>0 && this.dy==0){
            this.angle = 0
        } else if (this.dx<0 && this.dy==0){
            this.angle = 180;
        } else if (this.dy<0 && this.dx==0) {
            this.angle = 270 ;
        }
        else if (this.dy>0 && this.dx==0) {
            this.angle = 90;
        } else {}
        //drawRotate(this.angle);
        getImgRotated(this.w, this.h, this.angle);
    }
    moveRight(){
        this.dx = this.speed;
    }
    moveLeft(){
        this.dx = -this.speed;
    }

    moveUp(){
        this.dy = -this.speed;
    }
    moveDown(){
        this.dy = this.speed;
    }
    detectBorder (){
        if (this.x < 0){
            this.x = 0;
        }
        if (this.y < 0) {
            this.y =0;
        }

        if (this.x + this.w > canvas.width ){
            this.x = canvas.width - this.w;
        }

        if (this.y + this.h > canvas.height ){
            this.y = canvas.height - this.h;
        }
    }
}

const player = new Player();


function drawRotate(deg=0){
    console.log(deg);
    clear();

    ctx.save();


    ctx.translate(player.x + player.w, player.y + player.h);

    ctx.rotate(deg*Math.PI/180);

    ctx.drawImage(image, 0, 0, player.w, player.h);
    

    ctx.restore();
}


function getImgRotated(width, height, deg){
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;

    let context = offscreenCanvas.getContext('2d');
    context.save();
    context.translate(offscreenCanvas.width/2, offscreenCanvas.height/2);

    context.rotate(deg*Math.PI/180);
    context.translate(-offscreenCanvas.width/2, -offscreenCanvas.height/2);
    context.drawImage(image, 0, 0, width, height);


    ctx.drawImage(offscreenCanvas, player.x, player.y, width, height);
}


function drawPlayer(){
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}


function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}



function update() {
 
    clear();
 

 
    player.newPos();
   
    requestAnimationFrame(update);
}

requestAnimationFrame(update);







document.addEventListener("keydown", (e)=>{
    
    if (e.key === "ArrowRight"){
        player.moveRight();
    } else if (e.key ==="ArrowLeft"){
        player.moveLeft();
    } else if (e.key ==="ArrowUp"){
        player.moveUp();
    } else if (e.key ==="ArrowDown"){
        player.moveDown();
    }
});


document.addEventListener("keyup", (e)=>{
    if (e.key === "ArrowRight" || e.key ==="ArrowLeft") {
        player.dx = 0;
    }

    if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
        player.dy = 0;
    }
})