const colors = require('colors');

const reverse = require('reverse-string');

const roof ="╭─────────╮";
const floor = "╰─────────╯";
const wall = "|         |";
const VC = "/-\\";
const reverseVC = reverse(VC);
const rubish = "***";
const wallWithVC = "|   "+VC+"   |";
const wallWithReverseVC = "|   "+reverseVC+"   |";
const wallWithRubish = "|   "+rubish+"   |";

let sum = "";

let VC_Pos = 0;
let rubishIndex = 0;
let rubish_Pos =0;



/*
PRIVATE FUNCTIONS
 */
const drawRoof = (row) => {
    for(let j = 0 ; j < row ; j++){
        sum += roof;
    }
    console.log(sum);
    sum ="";
};

const drawWall = (row, VC_Position, m) => {
    for(let j = 0 ; j < row ; j++){
        VC_Pos++;
        if (VC_Pos === VC_Position){
            if(m%2 == 0)
                sum += wallWithReverseVC;
            else
                sum += wallWithVC;
            }
        else
            sum += wall;
    }
    if(m%2==0)
        console.log(reverse(sum));
    else
        console.log(sum);
    sum ="";
};

const drawSecondWall = (row, rubishPositions, m) => {
    for(let j = 0 ; j < row ; j++){
        rubish_Pos++;
        if (rubishPositions[rubishIndex] === rubish_Pos){
            rubishIndex++;
            sum += wallWithRubish;
        }
        else
            sum += wall;
    }
    if(m%2==0)
        console.log(reverse(sum));
    else
        console.log(sum);
    sum ="";
};

drawFloor = (row) => {
    for(let j = 0 ; j < row ; j++){
        sum += floor;
    }
    console.log(sum);
    sum ="";
};

/*
PUBLIC FUNCTIONS
 */


/**********
 * DRAW ROOFS
 * @param row
 * @param column
 * @param VC_Position
 */
exports.drawEnvironment = (row, column, VC_Position, rubishPositions) => {

    for(let i = 0 ; i < column ; i++){
        drawRoof(row);
        drawWall(row, VC_Position, i+1);
        drawSecondWall(row, rubishPositions, i+1);
        drawFloor(row);
    }
    sum = "";
    VC_Pos = 0;
    rubishIndex = 0;
    rubish_Pos =0;
};