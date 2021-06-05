class Snow{
    constructor(x,y){
        var options = {
            restitution: 0.3,
            friction: 0,
        }
        this.r = 10;
        this.image = loadImage("snow4.webp")
        //this.image.scale = 0.5
        this.body = Bodies.circle(x, y, this.r, options); 
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        //var angle = this.body.angle;
        image(this.image, this.body.position.x, this.body.position.y, 50,50);
        
       // resizeImage = 0.5
        //image(this.image, 20, 20)
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        //noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};

