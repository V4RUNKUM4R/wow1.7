class Wall{
    constructor(x,y,w,h,img){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.wall=createSprite(x,y,w,h);
        this.wall.addImage(img);
        this.wall.scale=1.5;
    }
    hide(){
        this.wall.visible=false;
    }
    display(){
        p2.bounceOff(this.wall);
        this.wall.visible=true;
    }
}