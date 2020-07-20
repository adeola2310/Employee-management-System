import {FETCH_ALL_USERS} from "../../redux/type";
import axios from 'axios';



const getAllUser = payload =>({
    type: FETCH_ALL_USERS,
    payload
})


const getAllUserThunk = () => async (dispatch) => {
    try {
        const {data} = axios.get("https://api.github.com/users?since=135")
            .then((res)=>{
                dispatch(getAllUser(res));
            })
        return data

    }
    catch (error) {
    }
};


export default getAllUserThunk;