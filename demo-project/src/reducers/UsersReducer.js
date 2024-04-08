const intialState = {
    users: []
}

const UsersReducer = (state = intialState, action) => {
    switch (action.type) {
      case "SET_USERS_LIST":
        return {
            ...state,
            users: action.payload
        };
      case "GET_USERS_LIST":
        return {
            ...state,
            users: action.payload
        };
      default:
        return state;
    }
  };

  export default UsersReducer;