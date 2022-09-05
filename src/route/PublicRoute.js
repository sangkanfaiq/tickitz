import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


const PublicRoute = ({children, isRestricted=false})=> {
    const navigate = useNavigate()
    const {isLogin} = useSelector((state) => state.auth);
    useEffect(()=> {
        if(isRestricted) {
            if(isLogin === true) {
              navigate('/', {replace: true})
            }
        }
  },[isLogin, isRestricted, navigate])
    return(children)
}

export default PublicRoute