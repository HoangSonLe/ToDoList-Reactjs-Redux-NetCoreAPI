//useReducer
//1. Init State
//2. Actions
//3. Reducer
//4. Dispatch

import React, { useReducer, useRef } from "react";
//1. Init State
const InitState = {
  job: "",
  jobs: [],
};
//2.Actions
const SET_JOB = "set-job";
const ADD_JOB = "add-job";
const DELETE_JOB = "delete-job";
const setJob = (payload) => ({ type: SET_JOB, payload });
const addJob = (payload) => ({ type: ADD_JOB, payload });
const deleteJob = (payload) => ({ type: DELETE_JOB, payload });
//3. Reducer
const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid Action");
  }
  return newState;
};
//4.Dispatch

export default function ToDoListHooks() {
  const [state, dispatch] = useReducer(reducer, InitState);
  const { job, jobs } = state;
  const inputRef = useRef();
  //Handle add job
  const handleSubmit = () => {
    if (job) {
      dispatch(addJob(job));
      dispatch(setJob(""));
      inputRef.current.focus();
    }
  };
  //Handle key down
  const hanleKeyDown = (e) => {
    //Catch key down "Enter"
    e.key === "Enter" && handleSubmit();
  };
  return (
    <div style={{ marginLeft: "20vw" }}>
      <h2>To Do List</h2>
      <input
        placeholder="Enter job"
        value={job}
        ref={inputRef}
        onKeyDown={hanleKeyDown}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <ul>
        {jobs.map((j, index) => (
          <li key={index}>
            {j}{" "}
            <button onClick={() => dispatch(deleteJob(index))}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
