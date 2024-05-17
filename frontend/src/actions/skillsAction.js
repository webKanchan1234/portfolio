import { ADD_SKILL_FAIL, ADD_SKILL_REQUEST, ADD_SKILL_SUCCESS, ALL_SKILLS_FAILS, ALL_SKILLS_REQUEST, ALL_SKILLS_SUCCESS, DELETE_SKILL_FAIL, DELETE_SKILL_REQUEST, DELETE_SKILL_SUCCESS } from "../constants/skillsConstant"
import axios from "axios"


export const allSkills = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_SKILLS_REQUEST })
        // const {data} = await axios.get("http://localhost:8000/api/v1/skills")
        const { data } = await axios.get("/api/v1/skills")
        dispatch({
            type: ALL_SKILLS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_SKILLS_FAILS,
            payload: error.response.data.message
        })
    }
}

export const addSkill = (formData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_SKILL_REQUEST })
        const { data } = await axios.post("/api/v1/add-skill",formData)
        dispatch({
            type: ADD_SKILL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_SKILL_FAIL,
            payload: error.response.data.message
        })
    }
}

export const deleteSkill = (id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_SKILL_REQUEST})
        const {data} = await axios.delete(`/api/v1/skills/${id}`)
        dispatch({
            type:DELETE_SKILL_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:DELETE_SKILL_FAIL,
            payload:error.response.data.message
        })
    }
}