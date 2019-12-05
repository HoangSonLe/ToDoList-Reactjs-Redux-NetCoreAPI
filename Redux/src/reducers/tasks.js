import * as types from './../constants/ActionTypes';
import { remove,reject } from 'lodash';
import swal from 'sweetalert';

var data = [];
var initialState = data;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            state=action.tasks;
            return  [...state];
        case types.ADD_TASK:
            state.push(action.task);
            return [...state];
        case types.SAVE_TASK:
            state = reject(state, { id: action.task.id });
            state.push(action.task);
            return [...state];
        case types.DELETE_TASK:
            state = remove(state, (item) => (item.id === action.id ? false : true));
            return [...state];
        case types.ERROR_TASK:
            swal({
                title: "Error!",
                text: "Something's error!",
                icon: "error",
                timer: 800,
                buttons: false,
            });
            return [...state];   
        default:
            return [...state];
    }

}
export default myReducer;