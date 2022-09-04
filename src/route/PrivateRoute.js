import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom"

const PrivateRoute = ({children})=> {
    console.log(children)
    const navigate = useNavigate()
    const {isLogin} = useSelector((state) => state.auth);
    useEffect(()=> {
      if(isLogin === false) {
        navigate('/signin', {replace: true})
      }
  },[isLogin])
    return(children)
}

export default PrivateRoute