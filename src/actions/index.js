import ADD_REMINDER from '../constants';

export const ADD_REMINDER = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action in add reminder', action);
}