import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DescUser=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
             {
                loading ? 
                <h3>Mazel</h3>
                :
                <div>
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                    <h5>{user.address.city}</h5>
                </div>
             }
        </div>
    )
}

export default DescUser