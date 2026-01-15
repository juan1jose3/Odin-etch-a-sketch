let gridSize = 16;
let innerGrid = document.querySelector(".innerGrids");
let squaresContainer;
let displaySize = document.querySelector(".displaySize");

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
    toBeMarked.style.opacity = "";
}

function shade(toBeMarked,opacity){
    toBeMarked.style.backgroundColor = "white";
    toBeMarked.style.opacity = `${opacity}%`;
    
}


function rainBow(toBeMarked){
    let color = getRandomColor();
    toBeMarked.style.backgroundColor = color;
    toBeMarked.style.opacity = "";
}

function resize(){
    gridSize = parseInt(prompt("type the size you want :), (min 2,max 100) "));
       
        if(gridSize >= 2 && gridSize <= 100 ){
            squaresContainer.remove();
            makeGrid(gridSize);
            displaySize.textContent = `Size: ${gridSize} X ${gridSize}`;

            displaySize.textContent = `Size: ${gridSize} X ${gridSize}`;

        }else{
            displaySize.textContent = "That value is not what is expected :(";
        }
}

function erase(toBeMarked){
    toBeMarked.style.backgroundColor = "";
    toBeMarked.style.opacity = "";
}

function clear(){
    let rowALL = document.querySelectorAll(".row");
    rowALL.forEach(row => {
    
        row.style.backgroundColor = "";
        row.style.opacity = "";
    });
}



function sketch(){
    

    makeGrid(gridSize);
    let toBeMarked;
    let mode = "regular";
    let shadeOpacity = 0;

    let options = document.querySelector(".options");
    let displayMode = document.querySelector(".displayMode");
    
    displayMode.textContent = "Current: " + mode;
    displaySize.textContent = `Size: ${gridSize} X ${gridSize}`;


    
    innerGrid.addEventListener("mouseover",(event) =>{
        toBeMarked = event.target;
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
            
        }else if(mode == "erase"){
            erase(toBeMarked);
        }    
    });


    options.addEventListener("click",(event) =>{
        let btn = event.target.closest("button");
        if (!btn) return;

        mode = btn.id;
        displayMode.textContent = "Current: " + mode;

        if(mode == "resize"){
            resize();
            mode = "regular";
            displayMode.textContent = "Current: " + mode;
        }else if(mode == "clear"){
           clear();
           mode = "regular";
           displayMode.textContent = "Current: " + mode;
           
        }
        
    });



    
    
}

sketch();

