import { GET_PROJECTS } from '../utils/constants';

const initialState = {
  projects: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
