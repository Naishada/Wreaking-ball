class Box{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options = {
            restitution : 0.8,
            friction : 1.2,
            density : 0.8
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        //RADIANS 
        push();
        fill("orange");
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}