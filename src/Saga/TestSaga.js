// import { put, call } from "redux-saga/effects";

// attempts to login
export function* testFunction(action) {
  try {
    yield console.log("saga function called");
  } catch (err) {
    console.log(err);
  }
}
