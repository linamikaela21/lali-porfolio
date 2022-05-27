import { GET_PROJECTS } from '../utils/constants';

const initialState = {
  projects: [
    {
      name: 'Project Uno',
      url: 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlCode:
        'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
      description: 'Una description',
    },
    {
      name: 'Project Dos',
      urlProject:
        'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
      urlCode:
        'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
      description: 'Una description',
    },
  ],
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
