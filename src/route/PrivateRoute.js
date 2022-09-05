import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({children})=> {
    console.log(children)
    const navigation = useNavigate()
    const {isLogin} = useSelector((state) => state.auth);
    useEffect(()=> {
      if(isLogin === false) {
        navigation('/signin', {replace: true})
      }
  },[isLogin])
    return(children)
}

export default PrivateRoute