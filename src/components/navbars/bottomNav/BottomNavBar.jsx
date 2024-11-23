import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css";

const BottomNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Navbar
      className="custom-navbar"
      // collapseOnSelect
      sticky="top"
      expand="md"
      expanded={expanded}
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
        className=""
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="md-auto">
          <Nav.Link>
            <NavLink
              to="/"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/services"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("services")}
            >
              Services
            </NavLink>
          </Nav.Link>
          {/* <Nav.Link> */}
          {/* <NavLink
                to="/tours"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("tours")}
              >
                Tours
              </NavLink>
          </Nav.Link> */}
          {/* <NavDropdown title="Tours" alignLeft className="dropdown fade-up">
            <NavDropdown.Item>
              <NavLink
                to="/tours"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("tours")}
              >
                Tours
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
               to="/ticket"
               activeClassName="active"
               className="sub-link"
                onClick={() => onUpdateActiveLink("ticket")}
              >
               Request ticket
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown> */}
          {/* <Nav.Link>
            <NavLink
              to="/airticket"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("airticket")}
            >
              Air Ticket
            </NavLink>
          </Nav.Link> */}
   
          {/* <Nav.Link>
            <NavLink
              to="/carrental"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("rentcar")}
            >
              Car rental
            </NavLink>
          </Nav.Link> */}

          {/* <Nav.Link>
          <NavLink
                to="/events"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("events")}
              >
               Events
              </NavLink>
          </Nav.Link> */}
          

          {/* <NavDropdown title="Events Management" alignLeft className="dropdown fade-up">
            <NavDropdown.Item>
              <NavLink
                to="/events"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("events")}
              >
               Events Management
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/previous-events"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("events")}
              >
               Previous events
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink
               to="/eventform"
               activeClassName="active"
               className="sub-link"
                onClick={() => onUpdateActiveLink("eventform")}
              >
               Request for event support
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink
               to="/participant"
               activeClassName="active"
               className="sub-link"
                onClick={() => onUpdateActiveLink("participant")}
              >
               Register to an event
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown> */}
{/* 
          <Nav.Link>
            <NavLink
              to="/accommodation"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("accommodation")}
            >
              Accommodation
            </NavLink>
          </Nav.Link> */}
       
          {/* <NavDropdown title="Media" alignLeft className="dropdown fade-up">
            <NavDropdown.Item>
              <NavLink
                to="/publications"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("publications")}
              >
                Advertisement
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/blogs"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("blogs")}
              >
                Blogs
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link>
            <NavLink
           to="/about"
           className="sub-link"
           activeClassName="active"
           onClick={() => onUpdateActiveLink("who-we-are")}
            >
              About us
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/contact"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BottomNavBar;
