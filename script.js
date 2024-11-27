let boxs=document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msgCont=document.querySelector(".msg-cont");
let msj=document.querySelector("#msj");

const resetGame=()=>{
    turnO=true;
    enableboxs();
    msgCont.classList.add("hide");
};
     //possibilities of winning game
let turnO=true;
const winptn=[[0,1,2],[2,5,8],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[3,4,5],[6,7,8],];
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
    if(turnO){
      box.innerText="O";
      turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
    });
});
//disable boxes after one player wins
const disableboxs=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
//enable boxs before start new game

const enableboxs=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
        //msg for display Winner
const showWinner =(Winner)=>{
    msj.innerText=`Congratulations, Winner is ${Winner}` ;
        msgCont.classList.remove("hide");
        disableboxs();
}
                        //checking who's the winner
const checkWinner = ()=>{
    for(patrn of winptn){
       let val1 =  boxs[patrn[0]].innerText;
       let val2 =  boxs[patrn[1]].innerText;
       let val3 =  boxs[patrn[2]].innerText;
       if(val1 !="" && val2 !="" && val3 !=""){
        if(val1 ===val2 && val2=== val3){
            console.log("Winner", val1);
            showWinner(val1);
        }
       }
    }
};
newgame.addEventListener("click",resetGame);
resbtn.addEventListener("click",resetGame);

// reset button and new game button have been added for convenience.