import axios from "axios"
import { actiontype } from "./actionType"

export const getdata = () => {
    return (dispatch) => {
        dispatch({
            type: actiontype.process,
            payload: null,
        })
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products",
        }).then((res) => {
            dispatch({
                type: actiontype.success,
                payload: res.data,
            })
        }
        ).catch((err) => {
            dispatch({
                type: actiontype.failure,
                payload: err,
            })
        }
        )
    }
}
