import React from "react";
import Tilt from 'react-tilt';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./MainNavbar.css";

const MainNavbar = ({ onSelect }) => {
  return (
    <>
      <Row className="header">
        <Col />
        <Col xs={12} md={9} lg={12}>
          <Navbar className="MainNavbar black-80 tc pv4 avenir">
            <Navbar.Brand
              // href="#Home"
              data-value="HOME_SELECTED"
              onClick={onSelect}
            >
            <Tilt className="Tilt" options={{ max : 45 }}>
              <img
                className="Tilt-inner"
                id="homeLogo"
                src="https://static.wixstatic.com/media/bd8529_3fe872ab18a44c7ea4f37d78c3d34c09.png/v1/fill/w_326,h_314,al_c,q_80,usm_0.66_1.00_0.01/Lauch%20Pad%20%2357-01-01.webp"
                data-value="HOME_SELECTED"
                onClick={onSelect}
                alt="Launch Pad Logo"
              />
              </Tilt>
              <h3
                data-value="HOME_SELECTED"
                className="mt2 mb0 f6 fw4 ttu tracked"
                onClick={onSelect}
              >
                <strong>Trampoline Park</strong>
              </h3>
            </Navbar.Brand>
            <Nav className="bt bb tc mw7 center mt4">
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 ue dib pa3 ph4-l grow b"
                href="#Home"
                data-value="HOME_SELECTED"
                onClick={onSelect}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l grow b"
                href="#Buy-Tickets"
                data-value="BUY_TICKETS_SELECTED"
                onClick={onSelect}
              >
                Buy Tickets
              </Nav.Link>
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l grow b"
                href="#Gift-Cards-&-Memberships"
                data-value="GIFTCARDS_MEMBERSHIPS_SELECTED"
                onClick={onSelect}
              >
                Gift Cards & Memberships
              </Nav.Link>
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l grow b"
                href="#Waivers"
                data-value="WAIVERS_SELECTED"
                onClick={onSelect}
              >
                Waivers
              </Nav.Link>
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l grow b"
                href="#Prices-&-Promos"
                data-value="PRICES_PROMOS_SELCTED"
                onClick={onSelect}
              >
                Prices & Promos
              </Nav.Link>
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l grow b"
                href="#Parties-&-Events"
                data-value="PARTIES_EVENTS_SELECTED"
                onClick={onSelect}
              >
                Parties & Events
              </Nav.Link>
              <Nav.Link
                className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l grow b"
                href="#More"
                data-value="MORE_SELECTED"
                onClick={onSelect}
              >
                More
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col />
      </Row>
    </>
  );
};

export default MainNavbar;
