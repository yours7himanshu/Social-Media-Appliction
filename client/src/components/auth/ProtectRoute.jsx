import { Navigate, Outlet } from "react-router-dom"


function ProtectRoute({children,user,redirect="/login"}) {

    if(!user) {
      return <Navigate to={redirect}/>
    }

    return <Outlet/>;
 
}

export default ProtectRoute
