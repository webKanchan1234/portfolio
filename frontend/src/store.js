import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import { addSkillReducer, allSkillsReducers } from "./reducers/skillsReducer"
import {composeWithDevTools} from "@redux-devtools/extension"
import { addProjectReducer, allProjectsReducers } from "./reducers/projectReducer"
import { allUsersReducers, loginUserReducer } from "./reducers/userReducer"


const reducer = combineReducers({
    users:allUsersReducers,
    user:loginUserReducer,
    skills:allSkillsReducers,
    skill:addSkillReducer,
    projects:allProjectsReducers,
    project:addProjectReducer
   
})

const initialState={}

const middlware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlware))
)

export default store