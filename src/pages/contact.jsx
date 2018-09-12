import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import ContactHero from "../components/ContactHero/ContactHero";
import Footer from "../components/Footer/Footer";

const Share = () => (
  <div className="container share-container">
    <Helmet>
      <title>{`Entre em contato | ${config.siteTitle}`}</title>
    </Helmet>
    <ContactHero />
    <Footer />
  </div>
);

export default Share;
