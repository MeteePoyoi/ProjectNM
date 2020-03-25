


import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout11 from '../page/Layout11';
import Layout12 from '../page/Layout12';
import Layout13 from '../page/Layout13';
import Layout22 from '../page/Layout22';


const Layout21 = (props) => {
  return (
    <Route>
      <Switch>
        <Container>
          <Row>
            <Col>
              <div align='left' style={{ margin: 1 + 'em' }}>
                <Button color="secondary" size="sm" block tag={Link} to="/layout11">bisection method</Button>
                <Button color="secondary" size="sm" block tag={Link} to="/layout12">false-position method</Button>
                <Button color="secondary" size="sm" block tag={Link} to="/layout13">one-point iterwation method</Button>
                <Button color="primary" size="lg" block>layer series</Button>
                <Button color="secondary" size="sm" block tag={Link} to="/layout22">newton-raphson method</Button>
              </div>
              <div>
                <Route path='/layout11' component={Layout11} />
                <Route path='/layout12' component={Layout12} />
                <Route path='/layout13' component={Layout13} />
                <Route path='/layout22' component={Layout22} />
              </div>
            </Col>

            <Col sm={{ size: 'auto', offset: 1 }}>
              <FristForm />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Route>
  );
}

export default Layout21;






