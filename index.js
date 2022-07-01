const tiles = Array.from(document.getElementsByClassName('tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.getElementById('reset');
const announcer = document.querySelector('.announcer');
const display = document.getElementById('display')

let turn = 0;
let xState = [];
let oState = [];
tiles.forEach((tile, i) => tile.addEventListener('click', (e) => {
   if ( !e.target.innerHTML) {
    e.target.innerHTML =  turn % 2 ? '0' : 'X';
    turn % 2 ? oState.push(i) : xState.push(i);
    turn++;
   }
   winningCheck()
}))

resetButton.addEventListener('click', () => {
    display.innerHTML = 'PLAY'
    xState =[] 
    oState =[]
    turn = 0;
    tiles.forEach(tile => tile.innerHTML = '')
})
// 0 1 2
// 3 4 5
// 6 7 8    

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

const winningCheck = () => {
    WINNING_COMBINATIONS.forEach(winningState => {
        const xWins = winningState.every(state => xState.includes(state))
        const oWins = winningState.every(state => oState.includes(state))
      
        if (xWins) {
            display.innerHTML = 'X won'
        } else if ( oWins) {
            display.innerHTML = '0 won'
        } else if ( turn > 8) {
            display.innerHTML = 'TIE!'
        }

    })
}

