import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import HomeHero from "../components/HomeHero/HomeHero";
const Index = props => {
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <HomeHero />
    </div>
  );
};

export default Index;
