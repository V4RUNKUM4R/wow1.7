class Obstacle{
    constructor(x,y,w,h,img){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.obstacle=createSprite(x,y,w,h);
        this.obstacle.addImage(img);
        this.obstacle.scale=1.5;
    }
    show(){
        this.obstacle.visible=true;
    }
    hide(){
        this.obstacle.visible=false;
    }
    flipx(){
        this.obstacle.mirrorX(-1);
    }
    display(){
        p2.bounceOff(this.obstacle);
        this.obstacle.visible=true;
    }
}