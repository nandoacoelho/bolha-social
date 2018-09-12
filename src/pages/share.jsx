import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import ShareHero from "../components/ShareHero/ShareHero";

const Share = () => (
  <div className="container share-container">
    <Helmet>
      <title>{`Compartilhe | ${config.siteTitle}`}</title>
    </Helmet>
    <ShareHero />
  </div>
);

export default Share;
