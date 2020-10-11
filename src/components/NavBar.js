import React from "react";
import { NavLink } from "react-router-dom";
import { PageHeader, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";
import "../NavBar.css";

const LandingPage = () => {
  return <PageHeader extra={<NavLinks />} />;
};

const NavLinks = () => {
  return (
    <header className="main-header">
      <div className="title">
        <NavLink to="/">
          <h1>Name of App</h1>
        </NavLink>
      </div>
      <div className="nav-links">
        <li>
          <NavLink exact className="navLink" to="/companies">
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink exact className="navLink" to="/advice">
            Advice
          </NavLink>
        </li>
        <li>
          <NavLink exact className="navLink" to="/profile">
            <Avatar size="large" icon={<UserOutlined />} />
          </NavLink>
        </li>
      </div>
    </header>
  );
};

export default LandingPage;
