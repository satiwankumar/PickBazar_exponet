import { useCreateContext } from './create-context';
import {getURl} from '../utils'
const initialState = {
  isOpen: false,
  drawerComponent: null,
  data: null,
  category:null
};
type State = typeof initialState;
type Action = any;
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_DRAWER':
    //   for (const [key, value] of Object.entries(action.data.productImages)) {
    //     // for(const [key,pair] of Object.entries(value)){
    //           value["image"] = getURl(value["image"]) 
       
    //     // }
        
    // }
    
      return {
      


        ...state,
        isOpen: true,
        drawerComponent: action.drawerComponent,
        data: action.data,
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        isOpen: false,
        drawerComponent: null,
        data: null,
      };
    default:
      return state;
  }
}
const [useDrawerState, useDrawerDispatch, DrawerProvider] = useCreateContext(
  initialState,
  reducer
);

export { useDrawerState, useDrawerDispatch, DrawerProvider };
