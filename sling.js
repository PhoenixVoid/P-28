class Sling{
//
    constructor(bodyA, pointB){
//  
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
//        
        }
//
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
//  
    }
//
    attach(body){
        this.sling.bodyA = body;
    }
//  
    fly(){
        this.sling.bodyA = null;
    }
//
    display(){
//               
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
//        
            push();
//            
            strokeWeight(2);
            stroke("black");
            fill("white");    
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
//            
            pop();
        }
    }
}