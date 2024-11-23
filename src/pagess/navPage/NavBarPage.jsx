import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import TopNavBar from "../../components/navbars/topNav/TopNavBar";
import BottomNavBar from "../../components/navbars/bottomNav/BottomNavBar";
import MostTopNav from "../../components/navbars/topMostNav/MostTopNav";
import { Link } from "react-router-dom";
import logo from "../../assets/assetss/official-logo.svg";
import "./index.css"
const NavBarPage = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="navBars">
      {/* <MostTopNav /> */}
      <Navbar className={scrolled ? "scrolled" : ""} expand="md">
        <Container fluid className="navBars-container">
          <Navbar.Brand className="brand">
           <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
          </Navbar.Brand>
          <div className="d-flex flex-column navs">
            <TopNavBar />
            <BottomNavBar />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarPage;
