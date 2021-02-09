import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState){
    const[data, setData] = useState(initialState)

    useEffect(() =>{
        axios.get(url).then((res) =>{
            setData(res.data.results)
            
        })
        .catch((err) =>{
            console.log(err)
        })
    },[url])

    return data
}

