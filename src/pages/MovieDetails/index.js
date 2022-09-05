import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import NavbarLogin from '../../components/Navbar/NavbarLogin'
import './styles.scss'
import moment from 'moment'

const MovieDetails = () => {
    const [ movieDetails, setMovieDetails ] = useState([])
    const { isLogin } = useSelector((state)=> state.auth)

    useEffect(()=> {
        axios({
            method: 'GET',
            url: `http://localhost/api/v1/movies/${movieID}`
        }).then((res)=> {
            setMovieDetails(res.data.data)
        }).catch((err)=> {
            console.log(err)
        })
    })

    const {movieID} = useParams()
  return (
    <>
        {isLogin ? <NavbarLogin/> : <Navbar/>}
        <div className="container">
            {movieDetails?.map((item, index)=> {
                return (
                    <div key={index} className='details-box'>
                        <div className="details-img">
                            <img src={`http://192.168.100.39:3006/uploads/${item.cover}`} alt="" />
                        </div>
                        <div className="details">
                            <h1>{item.title}</h1>
                            <h2>{item.genre}</h2>
                            <div className="details-card">
                                <div className="details-info">
                                    <h3>Release Date</h3>
                                    <h4>{moment(item.releaseDate).format('MMM DD, YYYY')}</h4>
                                </div>
                                <div className="details-info">
                                    <h3>Directed by</h3>
                                    <h4>{item.director}</h4>
                                </div>
                            </div>
                            <div className="details-card">
                                <div className="details-info">
                                    <h3>Duration</h3>
                                    <h4>{item.durationHours} hours {item.durationMinute} minute</h4>
                                </div>
                                <div className="details-info">
                                    <h3>Cast</h3>
                                    <h4>{item.cast}</h4>
                                </div>
                            </div>
                            <div className="synopsis">
                                <h5>Synopsis</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    </>
  )
}

export default MovieDetails