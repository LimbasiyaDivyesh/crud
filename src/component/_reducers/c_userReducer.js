import userConstants from "../user.constants";
const initialState = [];

export default function users(state = initialState, action) {
    switch (action.type) {
        //  add user
        case userConstants.ADDUSER_SUCCESS:
            return state.concat(action.user)
        // update user
        case userConstants.UPDATE_SUCCESS:
            return state.map(
                (user, i) => user.id === action.user.id ? { ...user, name: action.user.name, gender: action.user.gender, selectedFile: action.user.selectedFile, country: action.user.country }
                    : user);
        //   delete user
        case userConstants.DELETE_SUCCESS:
            return state.filter(item => item.id !== action.user);
        default:
            return state;
    }
}