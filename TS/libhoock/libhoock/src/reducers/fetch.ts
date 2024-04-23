import { type actionProps, ACTIONS } from '../actions/fetch';
export const initialState:initialState = {
  data: '',
  error: '',
  loading: false,
};
export interface initialState {
    data:unknown
    error:string
    loading:boolean
}
export const fetchReducer = (state:initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
