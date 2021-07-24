const div = document.querySelector(".root-div"); 

const colorPicker = document.querySelector("input"); 

let currentColor = ["black"]; 

let x=5; 

createGrid(); 


document.querySelector("#clear").addEventListener("click",(e)=>{
    div.textContent=''; 
    createGrid()
})

document.querySelector("#size").addEventListener("change",(e)=>{
    x=e.target.value; 
    div.textContent=''; 
    createGrid(); 
})

document.querySelector("#erase").addEventListener("click",(e)=>{
            currentColor=["white"]; 
})

document.querySelector("#draw").addEventListener("click",(e)=>{
    currentColor=["black"]; 
})

document.querySelector("#random").addEventListener("click",(e)=>{
    let colors = ["#fff100 ","#ff8c00 ","#e81123","#ec008c ","#68217a ","#00188f ","#00bcf2 ",
                    "#00b294 ","#009e49 "]; 
    currentColor = colors; 
})

function  createGrid(){
for(let j=0;j<x;++j){
    let pdiv = document.createElement("div"); 
    pdiv.style.display = "flex"; 
    pdiv.classList.add("parent-div"); 
    for(let i=0;i<x; ++i){
        let newDiv = document.createElement("div"); 
        let newpad = Math.floor((280)/x); 
        newDiv.style.padding = newpad+"px"; 
        newDiv.classList.add("div-color")
        newDiv.addEventListener("mouseenter",(e)=>{
            newDiv.style["background-color"] = currentColor[Math.floor(Math.random()*currentColor.length)]; 
        }) 
        pdiv.appendChild(newDiv); 
        
    }
    pdiv.classList.add("pdiv"); 
        div.appendChild(pdiv); 
}
}

