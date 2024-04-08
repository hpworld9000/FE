
export const setUsersList = (userList) => {
    return {
        type: "SET_USERS_LIST",
        payload: userList
    }
  };

export const getUsersList = {
    type: "GET_USERS_LIST",
    payload: true
  };