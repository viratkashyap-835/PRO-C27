class Suspender{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        }
        display(){
            var pointA= this.sling.bodyA.position;
            var pointB= this.sling.bodyB.position;

            strokeWeight (1)
            var Anchor1X = pointA.x
            var Anchor1Y = pointA.y
            
            var Anchor2X = pointB.x+this.offsetX
            var Anchor2Y = pointB.y+this.offsetY
            line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
        
}
