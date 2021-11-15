import React from "react";

import CarouselMain from "../../Components/Carousel";
import { _Routes } from "../../Utils/constanst";

const Main:React.FC = () => {
  return <div id={_Routes.Home.slice(1, _Routes.Home.length)}>
    <CarouselMain/>
  </div>;
};

export default Main;