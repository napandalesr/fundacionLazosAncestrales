import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Home from "../../Pages/Home";
import WeDo from "../../Pages/WeDo";
import { _scroll } from "../../Redux/actions/scrollAction";
import { _width } from "../../Redux/actions/widthAction";

import { _Routes } from "../../Utils/constanst";
import { Navigate } from "react-router-dom";

const PrivateRouter:React.FC = () => {
  const dispatch = useDispatch();

  const scrollAnimation = () => {
    dispatch(_scroll(document.documentElement.scrollTop));
  };

  const screenAnimation = () => {
    dispatch(_width(window.screen.width));
  };

  React.useEffect(()=>{
    dispatch(_width(window.screen.width));
    window.onscroll = () => scrollAnimation();
    window.onresize = () => screenAnimation();
  },[]);

  return <Routes>
    <Route path={`${_Routes.Home}`} element={<Home/>}/>
    <Route path={`${_Routes.WeDo}`} element={<WeDo/>}/>
    <Route path="/" element={<Navigate to = {`${_Routes.Home}`}/>}/>
  </Routes>;
};

export default PrivateRouter;