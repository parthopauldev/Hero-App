
import { useEffect, useState } from 'react';
import axios from 'axios';
let UseApps=()=>{
    let [apps,setApps]=useState([])
    let [loading,setLoading]=useState(true)
    let [error,setError]=useState(null)
    useEffect(()=>{
setLoading(true)
 axios('../allApps.json')
 .then(data=>setApps(data.data))
 .then(err=>setError(err))
 .finally(()=>setLoading(false))
    },[])
    return{
        apps,loading,error
    }
}
export default UseApps;