import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import ContactHero from "../components/ContactHero/ContactHero";

const Share = () => (
  <div className="container share-container">
    <Helmet>
      <title>{`Entre em contato | ${config.siteTitle}`}</title>
    </Helmet>
    <ContactHero />
  </div>
);

export default Share;
