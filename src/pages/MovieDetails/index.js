import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import NavbarLogin from '../../components/Navbar/NavbarLogin'
import './styles.scss'

const MovieDetails = () => {
    const [ movieDetails, setMovieDetails ] = useState([])
    const { isLogin } = useSelector((state)=> state.auth)
    console.log(movieDetails, 'wokweok')
    useEffect(()=> {
        axios({
            method: 'GET',
            url: `http://192.168.100.39:3006/api/v1/movies/${movieID}`
        }).then((res)=> {
            setMovieDetails(res.data.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const {movieID:movieID} = useParams()
  return (
    <>
        {isLogin ? <NavbarLogin/> : <Navbar/>}
        {movieDetails?.map((item, index)=> {
            return (
                <div key={index} className='details-box'>
                    <img src={`http://192.168.100.39:3006/uploads/${item.cover}`} alt="" />
                    <div className="details">

                    </div>
                </div>

            )
        })}
    </>
  )
}

export default MovieDetails