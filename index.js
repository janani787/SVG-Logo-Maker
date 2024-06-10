const inquirer = require("inquirer");
const fs= require("fs");
const {Traingle,Square,Circle}=require("./lib/shapes");

const questions=[{
    type:"input",
    message:"please enter the text for logo",
    name:"text",
},
{
    type:"input",
    message:"Please enter text color",
    name:"Color",
},
{
    type:"list",
    message:"Please select the logo shape",
    name:"shape",
    
    choices:["Traingle","Square","Circle"],
},
{
    type:"input",
    message:"Please enter shape color",
    name:"shape",
}
];



class Svg{
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){
       console.log(` selected shape ${this.shape} selected color ${this.text}`);
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
    setText(text,color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shapeprop){
        this.shape=shapeprop.render();
//         switch(shapeprop)
// {
//  case 'Square':
    
//     const s = new Square();
//     this.shape= s.render();
//    break;
    
// case 'Traingle': 
// const t = new Traingle();
// this.shape= t.render();
// break;
// case 'Circle':
//    const c = new Circle();
   
//       this.shape= c.render();
//     break;
//     default:
//         console.info("Invalid shape");
//         break;
// }

      
       

  }
    
}



function init()
{
    let selectedShape;
    let SVGText;
inquirer.prompt(questions)
 .then((response)=>{
    //console.log("success");
console.log(`${response.Color} ${response.shape} ${response.text}  `);
 switch(response.shape)
{
 case 'Square':
   selectedShape = new Square();
  selectedShape.setColor(response.Color);
    console.log(`${response.shape} ${response.Color}`);
   break;
case 'Traingle': 
selectedShape = new Traingle();
selectedShape.setColor(response.Color);
console.log(`${response.shape}`);
break;
case 'Circle':
    selectedShape = new Circle();
    selectedShape.setColor(response.Color);
    console.log(`${response.shape}`);
    break;
    default:
        console.info("Invalid shape");
        break;
}

 
 //selectedShape.setColor("red");
 
 //selectedShape.setColor();
selectedShape.setColor(response.Color);

	const svg = new Svg();
	svg.setText(response.text, response.Color);
	svg.setShape(selectedShape);
    SVGText = svg.render();
	
	//Print shape to log
	console.log("Displaying shape:\n\n" + SVGText);
	//document.getElementById("svg_image").innerHTML = svgString;

	console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeToFile("./images/logo.svg", SVGText); 
});
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successfully Generated SVG LOGO")
  );
  }
  
  
 
    
    
   
 
  
  // Function call to initialize app
  init();
  