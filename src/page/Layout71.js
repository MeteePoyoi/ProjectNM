import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout72 from '../page/Layout72';


const Layout71 = (props) => {
  return (
    <Route>
      <Switch>

        <Container>
          <Row>
            <Col>
              <div align='left' style={{ margin: 1 + 'em' }}>
                <Button color="primary" size="lg" block>first forward divided-difference</Button>
                <Button color="secondary" size="sm" block tag={Link} to="/layout72">highter derivatives</Button>
              </div>
              <div>
                <Route path='/layout72' component={Layout72} />
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

export default Layout71;






