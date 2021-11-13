import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter,  } from 'react-router-dom';
import Layout from "../Containers/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import { _scroll } from "../Redux/actions/scrollAction";
import { _width } from "../Redux/actions/widthAction";
import { _Routes } from "../Utils/constanst";
import { IsLoggedIn } from "../Utils/Helpers/auth";

const Router:React.FC = () => {
  const dispatch = useDispatch();

  const scrollAnimation = () => {
    dispatch(_scroll(document.documentElement.scrollTop));
  };

  const screenAnimation = () => {
    dispatch(_width(window.screen.width));
  };

  React.useEffect(()=>{
    window.onscroll = () => scrollAnimation();
    window.onresize = () => screenAnimation();
  });
  return <>
  {
    IsLoggedIn() ?
    <BrowserRouter>
    <Routes>
      <Route path={`${_Routes.Login}`} element={<Login/>}/>
      <Route path={`${_Routes.Register}`} element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    :
    <Layout/>
  }
  </>;
};

export default Router;