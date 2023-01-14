import { Link } from "react-router-dom"

const NavUser=({auth,setAuth})=>{
    return(
        <div>
            <ul>
               <Link to='/'><li>Home</li></Link> 

                {
                    auth ? 
                    <>
                    <Link to='/users'><li>Users</li></Link>
                    <li onClick={()=>setAuth(false)}>Logout</li>
                    </>
                    :
                    <li onClick={()=>setAuth(true)}>Login</li>
                }             
               
               
            </ul>
        </div>
    )
}

export default NavUser