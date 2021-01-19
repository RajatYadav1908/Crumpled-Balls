class paper
{
    constructor(x, y, r)
    {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.5
        

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)
        this.image = loadImage("ball.png");
        //World.add(paperWorld, this.body);

    }
    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r/2, this.r/2);
        pop()
    }
}
