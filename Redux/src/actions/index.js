import * as types from './../constants/ActionTypes';
import callApi from '../utils/ApiCaller';
import tasks from '../mocks/task';
export const fetchAllTasksRequest = () => {
    return (dispatch)=>{
        return callApi('tasks',"GET",null).then(res=> {
            dispatch(listAll(tasks));
        });
    }
}
export const listAll = (tasks) => {
    return {
        type: types.LIST_ALL,
        tasks
    }
}
export const fetchAddTasksRequest=(task)=>{
    return (dispatch)=>{
        return callApi('tasks',"POST",task).then(res=> {
            dispatch(addTask(res.data));
        });
    }
}
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM,
    }
}
export const fetchEditTasksRequest=(task)=>{
    return (dispatch)=>{
        return callApi(`tasks/${task.id}`,"PUT",task).then(res=> {
            dispatch(saveTask(res.data));
        }).catch(err=>{
            dispatch(errHandle())
        });
    }
}
export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}
export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}
export const errHandle = () => {
    return {
        type: types.ERROR_TASK,
    }
}
export const fetchDeleteTasksRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`tasks/${id}`,"DELETE",null).then(res=> {
            dispatch(deleteTask(id));
        });
    }
}
export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}
export const clearItemSelected = (task) => {
    return {
        type: types.CLEAR_ITEM,
        task
    }
}
