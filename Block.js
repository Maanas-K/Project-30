class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

       if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
       }
       else{
        World .remove(world,this.body)

        push ();
        this.visibility=this.visibility-15
        tint (255,this.visibility);
        rect (this.body.position.x,this.body.position.y,this.width,this.height,this.visibility)
        pop ();
       }
      }
}
var c=5;
 function draw() { 
    clear();
    background(200); 
    squareColor = color(255, 0, 0); 
    squareColor.setAlpha(c); 
    c=c+2; 
    if(c==255){
      c=0
    } 

    
      
    
    noStroke(); 
    fill(squareColor); 
    rectMode(CENTER); 
    rect(0, 0, 50, 50);
   }
  