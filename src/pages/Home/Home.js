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
import { AuthLogout } from "../../redux/actions/Auth";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(GetMovies())
  }, [])

  const navigate = useNavigate()
  const {data, error, loading } = useSelector((state) => state.movies);
  const {isLogin} = useSelector((state) => state.auth);
  useEffect(()=> {
    if(isLogin == false) {
      navigate('/', {replace: true})
    }
  },[isLogin])

  if(loading) {
    return <div>loading...</div>
  }
  if(error) {
   return  <div>error</div>
  }

  return (
    <>
    {isLogin ? (
      <button className="btn btn-danger" onClick={()=> {
        dispatch(AuthLogout())
      }}>Logout</button>
    ): ""}
    
      <Navbar />
      <Banner />
      <NowShowing />
      <UpcomingMovies />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
