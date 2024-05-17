import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ALL_PROJECT_FAIL, ALL_PROJECT_REQUEST, ALL_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS } from "../constants/projectContant"
import axios from "axios"


export const allProjects = () => async(dispatch)=>{
    try {
        dispatch({type:ALL_PROJECT_REQUEST})
        // const {data} = await axios.get("http://localhost:8000/api/v1/skills")
        const {data} = await axios.get("/api/v1/projects")
        dispatch({
            type:ALL_PROJECT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ALL_PROJECT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const addProject = (formData)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_PROJECT_REQUEST})
        const {data} = await axios.post("/api/v1/add-project",formData)
        dispatch({
            type:ADD_PROJECT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ADD_PROJECT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const deleteProject = (id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_PROJECT_REQUEST})
        const {data} = await axios.delete(`/api/v1/projects/${id}`)
        dispatch({
            type:DELETE_PROJECT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:DELETE_PROJECT_FAIL,
            payload:error.response.data.message
        })
    }
}