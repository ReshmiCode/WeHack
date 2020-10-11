import React from "react";
import { NavLink } from "react-router-dom";
import { PageHeader } from "antd";

const LandingPage = () => {
  return <PageHeader title="Name of our Application" extra={<NavLinks />} />;
};

const NavLinks = () => {
  return (
    <div className="flexRow">
      <NavLink exact className="navLink" to="/companies">
        Home
      </NavLink>
      <NavLink exact className="navLink" to="/advice">
        Advice
      </NavLink>
    </div>
  );
};

export default LandingPage;
