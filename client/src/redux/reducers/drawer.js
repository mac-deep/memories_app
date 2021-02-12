import { OPEN } from "../constants/actionTypes";

const drawerReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN:
      return !state;
    default:
      return state;
  }
};

export default drawerReducer;
