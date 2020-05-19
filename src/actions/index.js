import { ADD_REMINDER } from "../constants";
import { CLEAR_REMINDER } from "../constants";
import { DELETE_REMINDER } from "../constants";

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate,
  };
  return action;
};
export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  console.log("Deleting action", action);
  return action;
};
export const clearReminder = () => {
  const action = {
    type: CLEAR_REMINDER,
  };
  return action;
};
