import * as constants from '../constants/GameConstants';

export const actSelect = (type) => ({
    type: constants.SELECT_CLICKED, 
    payload: type
});

export const actPlay = () => ({
    type: constants.PLAY_CLICKED
});
