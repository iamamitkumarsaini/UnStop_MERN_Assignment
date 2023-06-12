import * as types from "./actionTypes";
import axios from "axios";

const getAllTicketsRequest = () => {

    return {
        type: types.GET_ALL_TICKETS_REQUEST
    }
};

const getAllTicketsSuccess  = (payload) => {

    return {
        type: types.GET_ALL_TICKETS_SUCCESS,
        payload
    }
};

const getAllTicketsFailure = () => {

    return {
        type: types.GET_ALL_TICKETS_FAILURE
    }
};


const postBookTicketsRequest = () => {

    return {
        type: types.POST_BOOK_TICKETS_REQUEST
    }
};

const postBookTicketsSuccess  = (payload) => {

    return {
        type: types.POST_BOOK_TICKETS_SUCCESS,
        payload
    }
};

const postBookTicketsFailure = () => {

    return {
        type: types.POST_BOOK_TICKETS_FAILURE
    }
};


const patchCancelTicketRequest = () => {

    return {
        type: types.PATCH_CANCEL_TICKET_REQUEST
    }
};

const patchCancelTicketSuccess  = (payload) => {

    return {
        type: types.PATCH_CANCEL_TICKET_SUCCESS,
        payload
    }
};

const patchCancelTicketFailure = () => {

    return {
        type: types.PATCH_CANCEL_TICKET_SUCCESS
    }
};


const getAllTicketsData = () => (dispatch) => {

    dispatch(getAllTicketsRequest());

    return axios.get(`http://localhost:8090/get`)
    .then((res) => {
       return dispatch(getAllTicketsSuccess(res.data));
    })
    .catch((err) => {
        console.log(err);
        dispatch(getAllTicketsFailure());
    })
};


const postBookTicketsData = (payload) => (dispatch) => {

    dispatch(postBookTicketsRequest());

    return axios.post(`http://localhost:8090/book`, payload)
    .then((res) => {
        return dispatch(postBookTicketsSuccess([res.data]))
    })
    .catch((err) => {
        console.log(err);
        dispatch(postBookTicketsFailure());
    })
}


const patchCancelTicketData = (id) => (dispatch) => {

    dispatch(patchCancelTicketRequest());

    return axios.patch(`http://localhost:8090/cancel/${id}`)
    .then((res) => {
        return dispatch(patchCancelTicketSuccess([res.data]));
    })
    .catch((err) => {
        console.log(err);
        dispatch(patchCancelTicketFailure());
    })
}


export { getAllTicketsData, postBookTicketsData, patchCancelTicketData };