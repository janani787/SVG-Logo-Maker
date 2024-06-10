
class shape
{
    constructor()
    {
        this.color="";
    }

 setColor(color)
 {
    this.color=color;
    console.log(`setColor functuons ${this.color}`);
 }

}

class Traingle extends shape{
  
    render()
    {   console.log(`render color ${this.color}`);
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }

}

class Square extends shape{

    render()
    {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }

}

class Circle extends shape{
   
    render()
    {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }

}

module.exports={Circle,Square,Traingle};