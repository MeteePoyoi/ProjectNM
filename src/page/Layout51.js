import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout52 from '../page/Layout52';
import Layout53 from '../page/Layout53';

const Layout51 = (props) => {
  return (
    <Route>
      <Switch>
        
    <Container>
      <Row>
        <Col>
          <div align='left' style={{ margin: 1 + 'em' }}>
            <Button color="primary" size="lg" block>simple linear regression</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout52">multiple linear regression</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout53">polynomial regression</Button>
          </div>
          <div>
                <Route path='/layout52' component={Layout52} />
                <Route path='/layout53' component={Layout53} />
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

export default Layout51;






