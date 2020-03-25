import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout71 from '../page/Layout71';


const Layout72 = (props) => {
  return (
    <Route>
      <Switch>
        
    <Container>
      <Row>
        <Col>
          <div align='left' style={{ margin: 1 + 'em' }}>
            <Button color="secondary" size="sm" block tag={Link} to="/layout71">first forward divided-difference</Button>
            <Button color="primary" size="lg" block>highter derivatives</Button>
          </div>
          <div>
                <Route path='/layout71' component={Layout71} />
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

export default Layout72;






