import { Link } from "react-router-dom";

export default function(){
    return(
        <>
        <h1>User's Profile Page</h1>
        <Link to="/users/Bhavishya?name=Bhavishya"><h4>Bhavishya</h4></Link>
        <Link to="/users/User 1?name=User 1"><h4>User 1</h4></Link>
        </>
    )
}