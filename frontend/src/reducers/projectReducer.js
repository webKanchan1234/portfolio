import { act } from "react"
import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ALL_PROJECT_FAIL, ALL_PROJECT_REQUEST, ALL_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS } from "../constants/projectContant"



export const allProjectsReducers = (state={projects:[]},action)=>{

    switch(action.type){
        case ALL_PROJECT_REQUEST:
            return{
                loading:true,
                projects:[]
            }
        case ALL_PROJECT_SUCCESS:
            return{
                loading:false,
                projects:action.payload.projects
            }
        case ALL_PROJECT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const addProjectReducer = (state={project:{}},action)=>{
    switch(action.type){
        case ADD_PROJECT_REQUEST:
            return{
                loading:true,
                project:{}
            }
        case ADD_PROJECT_SUCCESS:
            return{
                loading:false,
                project:action.payload.project
            }
        case ADD_PROJECT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const projectReducer = (state={project:{}},action)=>{
    switch(action.type){
        case DELETE_PROJECT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case DELETE_PROJECT_SUCCESS:
            return{
                ...state,
                loading:false,
                isDeleted:action.payload.success
            }
        case DELETE_PROJECT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}