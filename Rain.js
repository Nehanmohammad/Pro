class Rain {
    constructor(x,y,width,height){
      var options = {
        'density':9.999652132131,
        'friction':5,
        'restitution':1.9 ,
        'isStatic' : false
      } 
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world,this.body)
    }
    display(){
     
     var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     fill ("lightgreen")
     ellipse(0,0,this.width,this.height);
      pop();
    
    }
  
  }