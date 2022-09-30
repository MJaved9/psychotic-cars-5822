import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({children}) => {
    const isAuth = useSelector((state) => state.AuthReducer.data.isAuth);
  console.log("isAuth:",isAuth)
    const location = useLocation()

    if(!isAuth) {
        return <Navigate to='/login' state={{ from: location} } replace />
        
    } 
  return children;
  
};

export default ReqAuth;
