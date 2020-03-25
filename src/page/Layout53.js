import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout51 from '../page/Layout51';
import Layout52 from '../page/Layout52';


const Layout53 = (props) => {
  return (
    <Route>
      <Switch>
        
    <Container>
      <Row>
        <Col>
          <div align='left' style={{ margin: 1 + 'em' }}>
            <Button color="secondary" size="sm" block tag={Link} to="/layout51">simple linear regression</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout52">multiple linear regression</Button>
            <Button color="primary" size="lg" block>polynomial regression</Button>
          </div>
          <div>
                <Route path='/layout51' component={Layout51} />
                <Route path='/layout52' component={Layout52} />
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

export default Layout53;






