class Paper{
    
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
       
        this.x=x;
        this.y=y;
     

        this.image=loadImage("paper.png")

        this.body=Bodies.rectangle(x,y,90,90,options)
        World.add(world,this.body)

    }


    display(){
     
        var paperPos =this.body.position;

        push()
        translate(paperPos.x,paperPos.y);
      //  imageMode(CENTER)
        image(this.image, 0, 0,50,50);
        pop()





    }


}