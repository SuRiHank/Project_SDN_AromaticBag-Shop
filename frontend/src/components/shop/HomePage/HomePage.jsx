import React from "react";
import { HomeContent, HomeWrapper } from "./style";
import BannerComponent from './BannerComponent/BannerComponent'
import TopTypeProductComponent from './TopTypeProductComponent/TopTypeProductComponent'
import MostPopularComponent from './MostPopularComponent/MostPopularComponent'
import RightPopularComponent from './RightPopularComponent/RightPopularComponent'
import CenterPopularComponent from './CenterPopularComponent/CenterPopularComponent'

const HomePage = () => {
  return (
    <HomeWrapper>
      <BannerComponent/>
      <HomeContent>
        <TopTypeProductComponent />
        <MostPopularComponent />
        <RightPopularComponent />
        <CenterPopularComponent />
      </HomeContent>
    </HomeWrapper>
  );
};

export default HomePage;
