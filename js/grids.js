let innerGrid = document.querySelector(".innerGrids");
let squaresContainer;

function makeGrid(size){
    
    squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squaresContainer");

    const gridSize = 500;
    const cellSize = gridSize / size; 

    for(let i = 0; i <size;i++){
        let column = document.createElement("div");
        column.classList.add("column");
        
        for(let j = 0; j <size;j++){

            let row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);

            row.style.width = `${cellSize}px`;
            row.style.height = `${cellSize}px`;
            

        }
        squaresContainer.appendChild(column);
        innerGrid.appendChild(squaresContainer);
            
    }
}



function getRanNum(){
    return Math.random() * (255 - 120) + 120;
}

function getRandomColor(){
    let r = getRanNum();
    let g = getRanNum();
    let b = getRanNum();

    return `rgb(${r},${g},${b})`;
}

function normalMode(toBeMarked){
    toBeMarked.style.backgroundColor = "white";
}

function shade(toBeMarked,opacity){
    toBeMarked.style.backgroundColor = "white";
    toBeMarked.style.opacity = `${opacity}%`;
    
}

function rainBow(toBeMarked){
    let color = getRandomColor();
    toBeMarked.style.backgroundColor = color;
}


function sketch(){
    let gridSize = 16;
    makeGrid(gridSize);

    let mode = "regular";
    let shadeOpacity = 0;

    let erase = document.querySelector(".erase");
    let resizeGrid = document.querySelector(".resizeGrid");
    let regularMode = document.querySelector(".regularMode");
    let rainbowMode = document.querySelector(".rainbowMode"); 
    let shadeMode = document.querySelector(".shadeMode");

    let displaySize = document.querySelector(".displaySize");

    let displayMode = document.querySelector(".displayMode");

    
    
    displayMode.textContent = mode;
    displaySize.textContent = `Size: ${gridSize} X ${gridSize}`;
    innerGrid.addEventListener("mouseover",(event) =>{
        let toBeMarked = event.target;
        //console.log(toBeMarked);
        
        if(mode == "regular"){
            normalMode(toBeMarked);
        }else if(mode == "rainBow"){
            rainBow(toBeMarked);        
        }else if(mode == "shade"){
            if(shadeOpacity == 100){
                shadeOpacity = 0;
            }
            shade(toBeMarked,shadeOpacity);
            shadeOpacity += 10;
            
        }

        erase.addEventListener("click",()=>{
            toBeMarked.style.backgroundColor = "";
            toBeMarked.style.opacity = "";
            
        });
        
        
    });
    
   
    
    regularMode.addEventListener("click",()=>{
        mode = "regular";
        displayMode.textContent = mode;
    });

    shadeMode.addEventListener("click",()=>{
        mode = "shade";
        displayMode.textContent = mode;
    });

    rainbowMode.addEventListener("click",() =>{
        mode = "rainBow";
        displayMode.textContent = mode;
        
    });

    
    

    resizeGrid.addEventListener("click",() =>{
        gridSize = parseInt(prompt("type the size you want :), (min 2,max 100) "));
       
        if(gridSize >= 2 && gridSize <= 100 ){
            squaresContainer.remove();
            makeGrid(gridSize);
            displaySize.textContent = `Size: ${gridSize} X ${gridSize}`;
        }
    });

    


}

sketch();

