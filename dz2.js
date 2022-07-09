

const block =  document.querySelector('.miniblock');
const blockMove = document.querySelector(".left");
const blockMove1 = document.querySelector(".right");
const blockMove2 = document.querySelector(".down");


let position = 0;


const blockMoveAction =  ()=>{

    position+= 50;
    block.style.left = `${position}px`;
    if(position >= 450){
        blockMoveAction();
    }

}
blockMove.addEventListener("click", () => {
    blockMoveAction();

})

const blockMove1Action = () =>{
    position+= 50;
    block.style.right = `${position}px`;
    if(position >= 450){
        blockMove1Action();
}}
blockMove1.addEventListener("click", () => {
    blockMove1Action();

})


// РАБОТАЮТ ТОЛЬКО LEFT И RIGHT ( РАБОТАЮТ ОЧЕНЬ КРИВО )