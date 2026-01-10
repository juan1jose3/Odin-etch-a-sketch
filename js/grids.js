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
    toBeMarked.classList.add("marked");
}

function rainBow(toBeMarked){
    let color = getRandomColor();
    toBeMarked.style.backgroundColor = color;
}


function sketch(){
    makeGrid(16);

    let mode = "regular";
    let erase = document.querySelector(".erase");
    let resizeGrid = document.querySelector(".resizeGrid");
    let regularMode = document.querySelector(".regularMode");
    let rainbowMode = document.querySelector(".rainbowMode"); 
    
    innerGrid.addEventListener("mouseover",(event) =>{
        let toBeMarked = event.target;
        //console.log(toBeMarked);

        if(mode == "regular"){
            normalMode(toBeMarked);
        }else if(mode == "rainBow"){
            rainBow(toBeMarked);        
        }
        
    
    });


    regularMode.addEventListener("click",()=>{
        mode = "regular";
    });
    rainbowMode.addEventListener("click",() =>{
        mode = "rainBow";
    });
    
    
    resizeGrid.addEventListener("click",() =>{
        let gridSize = parseInt(prompt("type the size you want :), (min 2,max 100) "));
       
        if(gridSize >= 2 && gridSize <= 100 ){
            squaresContainer.remove();
            makeGrid(gridSize);
        }
    });

    // I must fix this next
    /*
    erase.addEventListener("click",() =>{
        toBeMarked.classList.remove("marked");
    });

    */
    
    
    

    

    
    

}

sketch();

