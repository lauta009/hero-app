import { useState } from "react";

export const useForm = (values)=>{
    const [state, setSetate] = useState(values);
    const handleForm = ({target})=>{
        setSetate({
            ...state,
            [target.name]:target.value
        })
    }
    const reset = ()=>{
        setSetate(values)
    }
    return [
        state,
        handleForm,
        reset
    ]
}
