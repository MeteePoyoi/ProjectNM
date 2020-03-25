import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FristForm from '../test/FristForm';
import { Switch, Route, Link } from 'react-router-dom';
import Layout31 from '../page/Layout31';
import Layout32 from '../page/Layout32';
import Layout34 from '../page/Layout34';
import Layout35 from '../page/Layout35';
import Layout36 from '../page/Layout36';
import Layout37 from '../page/Layout37';


const Layout33 = (props) => {
  return (
    <Route>
      <Switch>

      
    <Container>
      <Row>
        <Col>
        <div align='left' style={{ margin: 1 + 'em' }}>
            <Button color="secondary" size="sm" block tag={Link} to="/layout31">cramer's rule</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout32">gauss elimination method</Button>
            <Button color="primary" size="lg" block>gauss-jodan method</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout34">lu decomposition method</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout35">cholesky decomposition method</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout36">jacohi iteration method</Button>
            <Button color="secondary" size="sm" block tag={Link} to="/layout37">gauss-seidel iteration medthod</Button>
          </div>
          <div>
                <Route path='/layout31' component={Layout31} />
                <Route path='/layout32' component={Layout32} />
                <Route path='/layout34' component={Layout34} />
                <Route path='/layout35' component={Layout35} />
                <Route path='/layout36' component={Layout36} />
                <Route path='/layout37' component={Layout37} />
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

export default Layout33;






