import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout61 from '../page/Layout61';
import Layout63 from '../page/Layout63';
import Layout64 from '../page/Layout64';



const Layout62 = (props) => {
  return (
    <Route>
      <Switch>
        
    <Container>
      <Row>
        <Col>
          <div align='left' style={{ margin: 1 + 'em' }}>
            <Button color="secondary" size="sm" block tag={Link} to="/layout61">trarezoidal rule</Button>
            <Button color="primary" size="lg" block>composite trapezoidal rule</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout63">simpson's rule</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout64">composite simpson's rule</Button>
          </div>
          <div>
                <Route path='/layout61' component={Layout61} />
                <Route path='/layout63' component={Layout63} />
                <Route path='/layout64' component={Layout64} />
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

export default Layout62;






