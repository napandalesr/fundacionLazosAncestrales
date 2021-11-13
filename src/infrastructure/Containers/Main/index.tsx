import React from "react";

import CarouselMain from "../../Components/Carousel";
import { _Routes } from "../../Utils/constanst";

const Main:React.FC = () => {
  return <div id={_Routes.WeDo.slice(0, _Routes.Home.length)}>
    <CarouselMain/>
  </div>;
};

export default Main;