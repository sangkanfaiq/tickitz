import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ForgotPassword,
  Home,
  Movies,
  Signin,
  Signup,
  UpdatePassword,
} from "./pages";
import MovieDetails from "./pages/MovieDetails";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";



const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/movies" element={<PublicRoute><Movies /></PublicRoute>} />
        <Route path="/details/:movieID" element={<PublicRoute><MovieDetails /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute isRestricted={true}><Signin /></PublicRoute>} />
        <Route path="/forgotpassword" element={<PrivateRoute><ForgotPassword /></PrivateRoute>} />
        <Route path="/updatepassword" element={<PrivateRoute><UpdatePassword /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigation;
