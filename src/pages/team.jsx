import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";

import Footer from "../components/Footer/Footer";
import TeamHero from "../components/TeamHero/TeamHero";

const Team = () => (
  <div className="container team-container">
    <Helmet title={`Team | ${config.siteTitle}`} />
    <TeamHero />
    <Footer />
  </div>
);

export default Team;
