import { useState,useEffect } from "react";
import api from "../axios/axios";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        let cancelled=false;

        setLoading(true);
        setError(null);

        api.get(url)
        .then((res)=>{
            if(!cancelled){
                setData(res.data.data)
            }
        })
        .catch((err)=>{
            if(!cancelled)
                setError(err.message);

        })
        .finally(()=>{
            if(!cancelled)
                setLoading(false)
        })
        return ()=>{cancelled=true;}
    },[url])

    return{data,loading,error}
}

export default useFetch;