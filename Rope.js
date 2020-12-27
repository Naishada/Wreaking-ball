class Rope{
    constructor(body1,pointB){ 
        var options={
            bodyA : body1,
            pointB: pointB,
            length : 400,
            stiffness:1
        }
        //Constraint
        this.rope = Constraint.create(options)
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position
        var  posB = this.rope.pointB
        line(posA.x,posA.y,posB.x,posB.y);
    }
}