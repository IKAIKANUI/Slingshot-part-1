class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 30
        }
        this.pointB = pointB
        // this.width=width
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {
        if (this.sling.bodyA) { //checks if bodyA exists
            var pA = this.sling.bodyA.position;
            var pB = this.pointB;
            strokeWeight(4);
            line(pA.x, pA.y, pB.x, pB.y);
        }
    }

    fly() {

        this.sling.bodyA = null;
        // null means nothing 

    }

}