const div = document.querySelector(".root-div"); 

const colorPicker = document.querySelector("input"); 

let x=4; 

createGrid(); 
document.querySelector("#clear").addEventListener("click",(e)=>{
    div.textContent=''; 
    x=prompt("Enter the height of the grid"); 
    createGrid()
})

function  createGrid(){
for(let j=0;j<x;++j){
    let pdiv = document.createElement("div"); 
    pdiv.style.display = "flex"; 
    pdiv.classList.add("parent-div"); 
    for(let i=0;i<x; ++i){
        let newDiv = document.createElement("div"); 
        let newpad = (300)/x ; 
        newDiv.style.padding = newpad+"px"; 
        newDiv.classList.add("div-color")
        newDiv.addEventListener("mouseenter",(e)=>{
            newDiv.classList.toggle("color-changer"); 
        }) 
        pdiv.appendChild(newDiv); 
        
    }
    pdiv.classList.add("pdiv"); 
        div.appendChild(pdiv); 
}
}

