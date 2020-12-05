class Box{
    constructor(x,y,width,height){
        var options ={
            restitution:0.5,
            density:1,
            friction:2.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myworld,this.body)
    }

    display(){
        var angle = this.body.angle
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate (angle)
        fill ("orange")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop ()
    }
}