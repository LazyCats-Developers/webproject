import axios from 'axios';
import { GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS } from './types';
export  {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from './types'

export const get_categories = () => async dispatch => {
    const config = {
        header: {
            'Accept': 'aplication/json'
        }
    };
    try{
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/category/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            })
        }
    } catch(err){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}