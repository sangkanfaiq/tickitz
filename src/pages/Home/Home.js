import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import NowShowing from "./components/NowShowing/NowShowing";
import UpcomingMovies from "./components/UpcomingMovies/UpcomingMovies";
import Subscribe from "./components/Subscribe/Subscribe";
import { useEffect } from "react";
import { GetMovies } from "../../redux/actions/Movies";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom"
import NavbarLogin from "../../components/Navbar/NavbarLogin";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(GetMovies())
  }, [dispatch])

  const navigation = useNavigate()
  const {error, loading } = useSelector((state) => state.movies);
  const {isLogin} = useSelector((state) => state.auth);
  useEffect(()=> {
    if(isLogin === false) {
      navigation('/', {replace: true})
    }
  },[isLogin, navigation])

  if(loading) {
    return (
      <div className="d-flex align-items-center flex-column" style={{height: '100vh'}}>
      <img src="/images/loading.svg" alt="" style={{width: '300px', height: '300px'}}/>
      <h2 style={{marginTop: '40px'}}>Please wait...</h2>
    </div>
    )
  }
  if(error) {
   return (
      <div className="d-flex align-items-center flex-column" style={{height: '100vh'}}>
        <img src="/images/noconnect.svg" alt="" style={{width: '300px', height: '300px'}}/>
        <h2 style={{marginTop: '40px'}}>Can't connect to server</h2>
      </div>
   )
  }

  return (
    <>
      {isLogin ? <NavbarLogin/> : <Navbar /> }
      <Banner />
      <NowShowing />
      <UpcomingMovies />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
