import { LayoutActions, LayoutActionTypes } from "../actions/layout";

export interface State  {
    showSideNav: boolean
}

const initialState:State = {
    showSideNav: true
}

export function reducer (state: State = initialState, action: LayoutActions) : State {
    switch(action.type){
        case LayoutActionTypes.OpenSideNav: 
            return {
                ...state,
                showSideNav: true
            }
        case LayoutActionTypes.CloseSideNav:
            return {
                ...state,
                showSideNav: false
            }
        default:
            return state;
    }
}

export const getShowSideNav = (state:State) => state.showSideNav;