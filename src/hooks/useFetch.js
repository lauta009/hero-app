import { useState } from "react";
import { useEffect } from "react/cjs/react.development";


export const useFetch = (url) => {
  const [resp, setResp] = useState({
      data:null,
      loading:true,
      error:null
  });
  useEffect(()=>{
      setResp({
            data:null,
            loading:true,
            error:null
        })
      fetch(url).then(res => res.json()).then(data=>{
          setResp({
              data:data,
              loading:false,
              error:null
          })
      })
  },[url])
    return resp;
};
