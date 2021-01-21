import { FETCH_CHAR_SUCCESS, FETCH_CHAR_START,FETCH_CHAR_FAIL } from "../actions/actions";

const initialState = {
    id:'',
    name: "",
    birthday: "",
    avatarImg: "",
    freeCompany: "",
    server: "",
    datacenter: "",
    isFetching: false,
    error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        id:"",
        name: "",
        birthday: "",
        avatarImg: "",
        freeCompany: "",
        server: "",
        datacenter: "",
        isFetching: true,
        error: "",
      };
    case FETCH_CHAR_SUCCESS:
      return ({
        ...state,
        id:action.payload.ID,
        name: action.payload.Name,
        birthday: action.payload.Nameday,
        avatarImg: action.payload.Portrait,
        freeCompany: action.payload.FreeCompanyName,
        server: action.payload.Server,
        datacenter: action.payload.DC,
        isFetching: false,
        error: "",
      });
      case FETCH_CHAR_FAIL:
          return({
              ...state,
              id:"",
              name: "",
              birthday: "",
              avatarImg: "",
              freeCompany: "",
              server: "",
              datacenter: "",
              isFetching: false,
              error: action.payload,
            
          });
          default:
              return state;
  }
};
