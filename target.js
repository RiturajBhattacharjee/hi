class Chase{
    constructor(body1,body2){
   var options={
       bodyA:body1,
       bodyB:body2,
       stifness:0.04,
       length:10
   } 
    this.chase=Constraint.create(options)   
    World.add(world,this.chase)
    }
    display(){
        strokeWeight(4)
        line(this.chase.bodyA.position.x,this.chase.bodyA.position.y,this.chase.bodyB.position.x,this.chase.bodyB.position.y)
    }
}




