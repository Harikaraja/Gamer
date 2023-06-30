import { LOGOUT, GAMER_PROFILE, UPDATE_GAMER } from "../actions/gamerTypes";

const initialState = {
    gamerprofile :{},
    gamer:{},
    isLoggedIn: false,
}

const gamerReducer = (state=initialState,action) =>{
    switch(action.type){
        case UPDATE_GAMER:   
            return {gamerprofile:action.payload.gamerprofile,gamer:{}, isLoggedIn: true};
        case GAMER_PROFILE:
            return {gamer:action.payload.gamer,gamerprofile:{}, isLoggedIn: true};
        case LOGOUT:
            return {gamerprofile:{}, gamer:{}, isLoggedIn: false}
        default :
        return state;
    }
}

export default gamerReducer;