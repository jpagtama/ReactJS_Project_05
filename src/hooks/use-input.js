import { useReducer, useState } from "react"

const valueReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {value:action.value, isValid:action.isValid}
        default:
            return {value:state.value, isValid:state.isValid}
    }
}

const useInput = (inputType = "text",getValueValidity) => {
    const [value, dispatchValue] = useReducer(valueReducer, {value:"", isValid:false})
    const [touched, setTouched] = useState(false)
    
    const errorMessage = () => {
        if (inputType === "text") return "Please enter a value"
        if (inputType === "email") return "Please enter a valid email"
        return "Please enter a valid value"
    }
    const changeHandler = event => {
        let inputIsValid = false
        if (inputType === "text") inputIsValid = event.target.value.trim() !== "" 
        if (inputType === "email") inputIsValid = event.target.value.includes('@')
        getValueValidity(inputIsValid)
        dispatchValue({type:"CHANGE", value:event.target.value, isValid:inputIsValid})
    }
    const blurHandler = () => {
        setTouched(true)
    }
    return {value:value.value, isValid:touched && value.isValid, touched, errorMessage, changeHandler,blurHandler}
}
export default useInput