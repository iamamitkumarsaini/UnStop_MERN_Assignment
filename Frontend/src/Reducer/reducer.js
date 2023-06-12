import * as types from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    tickets: [],
    cancelTicket: [],
    bookedTickets:[],
    bookedMessage: "",
  };

  const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch(type){

        case types.GET_ALL_TICKETS_REQUEST:
            return {
                ...state,
                isLoading:true
        }

        case types.GET_ALL_TICKETS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                tickets:payload

        }

        case types.GET_ALL_TICKETS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
        }



        case types.POST_BOOK_TICKETS_REQUEST:
            return {
                ...state,
                isLoading:true
        }

        case types.POST_BOOK_TICKETS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                bookedTickets:payload

        }

        case types.POST_BOOK_TICKETS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
        }



        case types.PATCH_CANCEL_TICKET_REQUEST:
            return {
                ...state,
                isLoading:true
        }

        case types.PATCH_CANCEL_TICKET_SUCCESS:
            return {
                ...state,
                isLoading:false,
                cancelTicket:payload

        }

        case types.PATCH_CANCEL_TICKET_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
        }

        default: 
            return state
    }
}


export { reducer };