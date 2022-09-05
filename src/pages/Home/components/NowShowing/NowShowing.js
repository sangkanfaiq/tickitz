import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import "./mobile.css"
import { Link } from "react-router-dom";
import Slider from 'react-slick'

const NowShowing = () => {
  const [movieSchedule, setMovieSchedule] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3006/api/v1/schedule`,
    }).then((res) => {
      setMovieSchedule(res.data.data);
    }).catch((err)=> {
      console.log(err)
    })
  }, []);

  const Loading = () => {
    <div>Loading...</div>
  }

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <section className="now-showing">
        <div className="container">
          <div className="nw-title">
            <h2>Now Showing</h2>
            <Link to="/movies">view all</Link>
          </div>
            
          <Slider {...config}>
            {!movieSchedule.length ? (<Loading/>) : movieSchedule.map((movie, index)=> {
                return (
                  <div className="nw-box-items" key={index}>
                    <img src={`http://192.168.100.39:3006/uploads/${movie.cover}`} alt={movie.title} title={movie.title}/>
                    <div className={"nw-item-details"}>
                      <div className="movie-title">{movie.title}</div>
                      <div className="movie-genre">{movie.genre}</div>
                      <Link to={`/details/${movie.movieID}`}><button>Details</button></Link>
                    </div>
                  </div>
                )
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default NowShowing;
