import { Link, Outlet } from "react-router-dom"
export default function(){
    return(
        <>
        <h1>Dashboard Page</h1>
        <nav>
            <Link to="userprofile">User Profile</Link>
            &emsp;<Link to="settings">Settings</Link>
        </nav>
        <Outlet/>
        </>
    )
}