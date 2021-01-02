class Boy {
    constructor(x,y,width,height){
      var options = {
          isStatic : true
      }
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }

    display(){
        image(this.image, 50, 270, 200, 300);
        var pos = this.body.position
        fill("white");
        imageMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}