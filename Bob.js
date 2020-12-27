class Bob{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.8,
            friction : 0.2,
            density : 0.5
        }
        this.r = r;
        this.body = Matter.Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        fill("purple");
        circle(pos.x,pos.y,this.r*2);
    }
}
    
