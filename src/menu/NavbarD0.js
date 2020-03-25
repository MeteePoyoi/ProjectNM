import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText
} from 'reactstrap';

import { Switch, Route, Link } from 'react-router-dom';
import Num_M from './Num_M';
import Layout11 from '../page/Layout11';
import Layout12 from '../page/Layout12';
import Layout13 from '../page/Layout13';
import Layout21 from '../page/Layout21';
import Layout22 from '../page/Layout22';
import Layout31 from '../page/Layout31';
import Layout32 from '../page/Layout32';
import Layout33 from '../page/Layout33';
import Layout34 from '../page/Layout34';
import Layout35 from '../page/Layout35';
import Layout36 from '../page/Layout36';
import Layout37 from '../page/Layout37';
import Layout41 from '../page/Layout41';
import Layout42 from '../page/Layout42';
import Layout43 from '../page/Layout43';
import Layout44 from '../page/Layout44';
import Layout45 from '../page/Layout45';
import Layout51 from '../page/Layout51';
import Layout52 from '../page/Layout52';
import Layout53 from '../page/Layout53';
import Layout61 from '../page/Layout61';
import Layout62 from '../page/Layout62';
import Layout63 from '../page/Layout63';
import Layout64 from '../page/Layout64';
import Layout71 from '../page/Layout71';
import Layout72 from '../page/Layout72';



const NavbarD0 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md" className="myNavbar">
        <NavbarBrand tag={Link} to="/num_m" >NumerticaMethod</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                roots of eqation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/layout11">
                bisection method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout12">
                  false-position method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout13">
                  one-point iterwation method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout21">
                  layer series
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout22">
                  newton-raphson method
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                solution of linear algebraic equations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/layout31">
                  cramer's rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout32">
                  gauss elimination method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout33">
                  gauss-jodan method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout34">
                  lu decomposition method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout35">
                  cholesky decomposition method
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/layout36" >
                  jacohi iteration method
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout37">
                  gauss-seidel iteration medthod
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                interpolation and extrapolation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/layout41">
                  quadratic interpolation
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout42">
                  polynamial
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout43">
                  lagrange interpolation
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout44">
                  linear spline
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout45">
                  quadratic spline
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                least-squares regression
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/layout51">
                  simple linear regression
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout52">
                  multiple linear regression
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout53">
                  polynomial regression
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                numertical integration
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/layout61">
                  trarezoidal rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout62">
                  composite trapezoidal rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout63">
                  simpson's rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout64">
                  composite simpson's rule
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                numertical differntion
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/layout71">
                  first forward divided-difference
                </DropdownItem>
                <DropdownItem tag={Link} to="/layout72">
                  highter derivatives
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <div align="left">

        <Switch>
          <Route path='/num_m' component={Num_M} />
          <Route path='/layout11' component={Layout11} />
          <Route path='/layout12' component={Layout12} />
          <Route path='/layout13' component={Layout13} />
          <Route path='/layout21' component={Layout21} />
          <Route path='/layout22' component={Layout22} />
          <Route path='/layout31' component={Layout31} />
          <Route path='/layout32' component={Layout32} />
          <Route path='/layout33' component={Layout33} />
          <Route path='/layout34' component={Layout34} />
          <Route path='/layout35' component={Layout35} />
          <Route path='/layout36' component={Layout36} />
          <Route path='/layout37' component={Layout37} />
          <Route path='/layout41' component={Layout41} />
          <Route path='/layout42' component={Layout42} />
          <Route path='/layout43' component={Layout43} />
          <Route path='/layout44' component={Layout44} />
          <Route path='/layout45' component={Layout45} />
          <Route path='/layout51' component={Layout51} />
          <Route path='/layout52' component={Layout52} />
          <Route path='/layout53' component={Layout53} />
          <Route path='/layout61' component={Layout61} />
          <Route path='/layout62' component={Layout62} />
          <Route path='/layout63' component={Layout63} />
          <Route path='/layout64' component={Layout64} />
          <Route path='/layout71' component={Layout71} />
          <Route path='/layout72' component={Layout72} />

        </Switch>

      </div>
    </div>
  );
}

export default NavbarD0;