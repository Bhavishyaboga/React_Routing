import {  useParams, useLocation, useNavigate  } from "react-router-dom"
import './Users.css'

function User(){

    const params = useParams();
    const {name} = params;
    console.warn(name);
    
    
const Child = ({name}) => {

    return(
        <div>
        {name ? (
            <h4>The <code>name</code> in the query string is <strong>{name}</strong></h4>
        ): (
            <h3>There is no name in the query string.</h3>
        )}
        
        </div>
    )
}

function useQuery(){
    return new URLSearchParams(useLocation().search);

}

let query = useQuery();


const navigate = useNavigate();

    return(
        <>
        <h1>Hello {name}</h1>
        
        <Child name={query.get("name")} />

        <button onClick={() => navigate('/')} className="btn">Go to Home Page</button>

        </>
    )

}
export default User