import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout41 from '../page/Layout41';
import Layout42 from '../page/Layout42';
import Layout43 from '../page/Layout43';
import Layout45 from '../page/Layout45';



const Layout44 = (props) => {
  return (
    <Route>
      <Switch>
        
    <Container>
      <Row>
        <Col>
          <div align='left' style={{ margin: 1 + 'em' }}>
            <Button color="secondary" size="sm" block tag={Link} to="/layout41">quadratic interpolation</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout42">polynamial</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout43">lagrange interpolation</Button>
            <Button color="primary" size="lg" block>linear spline</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout45">quadratic spline</Button>
          </div>
          <div>
                <Route path='/layout41' component={Layout41} />
                <Route path='/layout42' component={Layout42} />
                <Route path='/layout43' component={Layout43} />
                <Route path='/layout45' component={Layout45} />
          </div>
        </Col>
        <Col>
            <FristForm />
        </Col>
      </Row>
      
    </Container>
      </Switch>
    </Route>
  );
}

export default Layout44;






