import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from 'axios'

const UpcomingMovies = () => {
  const [movieSchedule, setMovieSchedule] = useState(null)

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://192.168.100.39:3006/api/v1/movies`,
    }).then((res) => {
      setMovieSchedule(res.data.data);
    }).catch((err)=> {
      console.log(err)
    })
  }, []);
  
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const config = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
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
  };
  return (
    <>
      <section className="upcoming-movies">
        <div className="container">
          <div className="um-title">
            <h2>Upcoming Movies</h2>
            <Link to="/movies">view all</Link>
          </div>

          <Slider {...settings}>
            <div className="month active">September</div>
            <div className="month">October</div>
            <div className="month">November</div>
            <div className="month">December</div>
            <div className="month">January</div>
            <div className="month">February</div>
            <div className="month">March</div>
            <div className="month">April</div>
            <div className="month">May</div>
            <div className="month">June</div>
            <div className="month">July</div>
            <div className="month">August</div>
          </Slider>

          <Slider {...config}>
            {movieSchedule?.results?.map((movie, index)=> {
              return (
                <div className="um-card-items" key={index}>
                  <img src={`http://192.168.100.39:3006/uploads/${movie.cover}`} alt={movie.title} title={movie.title}/>
                  <div className="um-details">
                    <div className="m-title">{movie.title}</div>
                    <div className="m-genre">{movie.genre}</div>
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

export default UpcomingMovies;
