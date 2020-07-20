import { FETCH_ALL_USERS} from "../../redux/type";

const initialState = {allUser:[]};

const employeeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_ALL_USERS:
            return{
                ...state,
                allUser: action.payload
            }
        default:
            return state

    }

}

export default employeeReducer;