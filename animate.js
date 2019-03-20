const clear = require('clear');
const {drawEnvironment} = require('./environment');
let VC_Pos = 0;
let rubishIndex = 0;
let rubish_Pos =0;

let direction = 'right';

/*
PRIVATE FUNCTIONS
 */
const clearConsole = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(clear());
        }, 500);
    });
};


const evaluate = (row, column, VC_Position, rubishPositions) => {
    return new Promise(resolve => {
        resolve(drawEnvironment(row, column, VC_Position, rubishPositions));
    });
};

const suction = (rubishes, index) => {
  return new Promise(resolve => {
      setTimeout(() => {
          rubishes.splice(index, 1);
          console.log('FIND_RUBIDH => SUCTION');
          resolve(true);
      }, 500);
  });
};


exports.run = async (row, column, VC_Position, rubishPositions) => {
    while (true){

        for(let i=0; i<rubishPositions.length; i++){
            if (VC_Position === rubishPositions[i]){
                let index = rubishPositions.indexOf(rubishPositions[i]);
                await suction(rubishPositions, index);
            }
        }
        await clearConsole();

        if (direction==='left'){
            VC_Position -=1;
            if (VC_Position<2)
                direction = 'right';
        }
        else if (direction==="right"){
            VC_Position +=1;
            if (VC_Position>row*column-1)
                direction='left';
        }
	console.log(rubishPositions);
	console.log(rubishPositions.length);
	if(!rubishPositions.length)
		break;
        await evaluate( row, column, VC_Position, rubishPositions);

    }
};

