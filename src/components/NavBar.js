import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg" className="navbar-app" variant="dark">
        {/* <Navbar.Brand href="#home">
          Calculadora de horas de trabajo
        </Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">Calculadora de horas de trabajo</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavLink to="/service-reports" className="nav-link">Módulo de reporte de servicio</NavLink>
          <NavLink to="/work-hours" className="nav-link"> Módulo de cálculo de horas de trabajo</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
