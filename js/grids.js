let innerGrid = document.querySelector(".innerGrids");

function makeGrid(size){
    
    
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
        innerGrid.appendChild(column);
            
    }
}


function sketch(){
    makeGrid(16);
    let erase = document.querySelector(".erase");
    let resizeGrid = document.querySelector(".resizeGrid");

    innerGrid.addEventListener("mouseover",(event) =>{
        
        let toBeMarked = event.target;
        toBeMarked.classList.add("marked");
    });

    

    erase.addEventListener("click",() =>{
        location.reload();
    });

    resizeGrid.addEventListener("click",() =>{
        let gridSize = parseInt(prompt("type the size you want :) "));
        
        makeGrid(gridSize);

    });


}

sketch();

