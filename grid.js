const div = document.querySelector(".root-div"); 

let currentColor = ["black"]; 

let x=5; 

createGrid(); 

const buttons = document.querySelectorAll("button"); 


document.querySelector("#clear").addEventListener("click",(e)=>{
    div.textContent=''; 
    createGrid()
})

function clearColor(){
    buttons.forEach(function (button){
        button.classList.remove("button-clicked"); 
    }); 
}

document.querySelector("#erase").addEventListener("click",(e)=>{
            clearColor();
            e.target.classList.add("button-clicked"); 
            currentColor=["white"]; 
})

document.querySelector("#draw").addEventListener("click",(e)=>{
    clearColor(); 
    e.target.classList.add("button-clicked"); 
    currentColor= [document.querySelector(".color-picker").value];
})

document.querySelector("#random").addEventListener("click",(e)=>{
    clearColor(); 
    e.target.classList.add("button-clicked"); 
    currentColor = ["#5d8aa8", "#e32636", "#efdecd", "#ffbf00", "#a4c639", "#cd9575", "#fe6f5e","#8a2be2",
    "#006a4e"]; 
})

document.querySelector(".color-picker").addEventListener("change", (e)=>{clearColor(); 
    currentColor = [document.querySelector(".color-picker").value]; 
})

function  createGrid(){
for(let j=0;j<x;++j){
    let pdiv = document.createElement("div"); 
    pdiv.classList.add("parent-div"); 
    for(let i=0;i<x; ++i){
        let newDiv = document.createElement("div"); 
        newDiv.classList.add("small-div")
        newDiv.addEventListener("mouseover",(e)=>{
            if(e.buttons == 0)return; 
            newDiv.style["background-color"] = currentColor[ Math.floor(Math.random()*currentColor.length)]; 
        }) 
        newDiv.addEventListener("click",(e)=>{
            newDiv.style["background-color"] = currentColor[ Math.floor(Math.random()*currentColor.length)]; 
        }) 
        pdiv.appendChild(newDiv); 
        
    } 
    div.appendChild(pdiv); 
}
}

