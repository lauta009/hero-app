import { useState } from "react";


export const useCounter = (initial = 10)=> {
    
    const [state, setState] = useState(initial);
    const increment = (factor) =>{
     setState(state +factor)
    }    
    const decrement = (factor) =>{
     setState(state - factor)
    }
    const reset = () =>{
        setState(initial);
    }
  return {
      state,
      reset,
      increment,
      decrement
  };
}
