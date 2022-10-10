const gameBoard = (()=>{
   
        let gBoard = document.getElementById('gameBoard')
        let buttons = [1,2,3,4,5,6,7,8,9];
         
        const appendSelection = (playerSelection)=>{
            
            for(i=0;i<buttons.length;i++){
                let button = document.createElement('button')
                button.classList='placement';
                gBoard.appendChild(button);
            button.addEventListener('click',()=>{button.innerHTML=playerSelection})
            }
        }
    
    return {appendSelection};
    })();
//const player2=gameBoard.appendSelection('x');

const player = (name, age, marker) => {

    const title = () => {console.log('name')};

    const howOld = () => {console.log('age')};

    const makeSelection = () => {gameBoard.appendSelection(marker)};

    return {title, howOld, makeSelection};
}

const playerOne = player('ross', 30, 'x');


