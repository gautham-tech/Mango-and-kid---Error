class Mango{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.x = x
        this.y = y 
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }

    display(){
        push();
        image(this.image,1000,170,50,50);
        var pos = this.body.position
        fill("black");
        imageMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}