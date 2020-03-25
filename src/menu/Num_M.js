


import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Layout11 from '../page/Layout11';

const Num_M = (props) => {
  return (
    <Route>
      <Switch>
        <Container>
          <Row>
            <Col>
              <div align='center' style={{ margin: 10 + 'em' }}>
                <Button color="secondary" size="lg" block tag={Link} to="/layout11">bisection method</Button>
                <Button color="secondary" size="lg" block>solution of linear algebraic equations</Button>
                <Button color="secondary" size="lg" block >interpolation and extrapolation</Button>
                <Button color="secondary" size="lg" block>least-squares regression</Button>
                <Button color="secondary" size="lg" block >numertical integration</Button>
                <Button color="secondary" size="lg" block >numertical differntion</Button>
              </div>
              <div>
                <Route path='/layout11' component={Layout11} />
              </div>
            </Col>
          </Row>
        </Container>
      </Switch>
    </Route>
  );
}

export default Num_M;






