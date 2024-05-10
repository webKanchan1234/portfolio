import { ADD_SKILL_FAIL, ADD_SKILL_REQUEST, ADD_SKILL_SUCCESS, ALL_SKILLS_FAILS, ALL_SKILLS_REQUEST, ALL_SKILLS_SUCCESS } from "../constants/skillsConstant";



export const allSkillsReducers = (state={skills:[]},action)=>{

    switch(action.type){
        case ALL_SKILLS_REQUEST:
            return{
                loading:true,
                skills:[]
            }
        case ALL_SKILLS_SUCCESS:
            return{
                loading:false,
                skills:action.payload.skills
            }
        case ALL_SKILLS_FAILS:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const addSkillReducer = (state={skill:{}},action)=>{
    switch(action.type){
        case ADD_SKILL_REQUEST:
            return{
                loading:true,
                skill:{}
            }
        case ADD_SKILL_SUCCESS:
            return{
                loading:false,
                skill:action.payload.skill
            }
        case ADD_SKILL_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}