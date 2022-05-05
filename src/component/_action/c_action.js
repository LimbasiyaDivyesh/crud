// export const Submit = () => {
//     return {
//         type: "submit"
//     }
// }
import userConstants from "../user.constants";
const userActions = {
    userRegister,
    userUpdate,
    userDelete
};
function userRegister(user) {
    return (dispatch) => {
        dispatch(success(user));
    };

    function success(user) {
        return {
            type: userConstants.ADDUSER_SUCCESS,
            user,
        };
    }
}
function userUpdate(user) {
    return (dispatch) => {
      dispatch(success(user));
    };
  
    function success(user) {
      return {
        type: userConstants.UPDATE_SUCCESS,
        user,
      };
    }
  
  }
  function userDelete(user) {
    return (dispatch) => {
      dispatch(success(user));
    };
  
    function success(user) {
      return {
        type: userConstants.DELETE_SUCCESS,
        user,
      };
    }
  
  }
export default userActions;