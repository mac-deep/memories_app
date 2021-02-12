import { OPEN } from "../constants/actionTypes";

export const open = () => async (dispatch) => {
  dispatch({ type: OPEN });
};
