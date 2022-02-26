class houseO{
    constructor(x,y,w,h,){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.obstacle=createSprite(x,y,w,h);
        this.obstacle.scale=1.5;
    }
    hide(){
        this.obstacle.visible=false;
    }
    display(){
        p2.bounceOff(this.obstacle);
        // this.obstacle.visible=true;
    }
}