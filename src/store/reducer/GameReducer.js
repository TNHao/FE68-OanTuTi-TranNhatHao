import * as constants from '../constants/GameConstants';

const initialState = {
    selection: "", 
    selectedImgSrc: "", 
    randomImgSrc: "",
    wins: 0, 
    played: 0
}

const randomSelection = () => {
    const key = Math.floor(Math.random() * 3);
    switch (key) {
        case 0:
            return "keo";
        case 1:
            return "bua";
        default:
            return "bao";
    }
} 

const checkWin = (a, b) => {
    if ((a === "keo" && b === "bao") || (a === "bua" && b === "keo") || (a === "bao" && b === "bua")) return 1; // Thang
    if (a === b) return 0; // Hoa
    return -1; // Thua
}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_CLICKED:
            return {
                ...state, 
                selection: action.payload, 
                selectedImgSrc: `./img/${action.payload}.png`,
                randomImgSrc: ""
            }
    
        case constants.PLAY_CLICKED:
            if (state.selection === "")
                return state;

            state.played++; 
            const randomMove = randomSelection();
            state.randomImgSrc = `./img/${randomMove}.png`; 
            
            if (checkWin(state.selection, randomMove) === 1) 
                state.wins++;

            return {...state};
        
        default:
            return {...state};
    }
}

export default GameReducer;