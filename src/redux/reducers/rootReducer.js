import { combineReducers } from "redux";
import { Teachers } from "./teachers/teachers"
import { Students } from "./students/students"
import { Groups } from "./groups/groups"


export const rootReducer = combineReducers({
    Teachers,
    Students,
    Groups
});