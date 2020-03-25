import React from 'react';
import { compile, derivative } from 'mathjs';
import { Table } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Container, Row, Col, Button } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Layout11 from '../page/Layout11';
import Layout12 from '../page/Layout12';
import Layout13 from '../page/Layout13';
import Layout21 from '../page/Layout21';

var data = [];
const columns = [
  {
    title: 'Iteration',
    dataIndex: 'iteration',
    width: 100,

  },
  {
    title: 'X',
    dataIndex: 'x',
    width: 180,

  },
  {
    title: 'Error',
    dataIndex: 'error',
  },
];

class Layout22 extends React.Component {
  constructor() {
    super();
    this.state = {
      fx: "",
      X: 0,
      err: 0.000001,
      tables: false,
    }
    this.handleChage = this.handleChage.bind(this);
    this.N = this.N.bind(this);
  }

  handleChage(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  N(x) {
    let sum = parseFloat(0.000000);
    let X = [];
    let Er = [];
    let i = 0;
    sum = 10.000000
    while (sum > this.state.err) {
      X[i] = x;
      let x_new = x - (this.changfuntion(x) / this.diff(x));
      sum = this.E(x_new, x);
      sum = Math.abs(sum).toFixed(6);
      Er[i] = sum;
      i++;
      x = x_new;
    };
    this.settable(X, Er);
    this.setState({
      tables: true
    })
  }

  changfuntion(X) {
    var expr = compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  diff(X) {
    var expr = derivative(this.state.fx, 'x');
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  E(n, m) {
    return (n - m) / n;
  }

  settable(X, Er) {
    data = []
    for (let i = 0; i < X.length; i++) {
      data.push({
        iteration: i + 1,
        x: X[i],
        error: Er[i],
      });
    }

  }

  render() {
    return (
      <div align="left" style={{ margin: 2 + 'em' }}>
        <Route>
          <Switch>
            <Container>
              <Row>

                <Col xs="5">
                  <div align='left' style={{ margin: 1 + 'em' }}>
                    <Button color="secondary" size="sm" block tag={Link} to="/layout11">bisection method</Button>
                    <Button color="secondary" size="sm" block tag={Link} to="/layout12">false-position method</Button>
                    <Button color="secondary" size="sm" block tag={Link} to="/layout13">one-point iterwation method</Button>
                    <Button color="secondary" size="sm" block tag={Link} to="/layout21">layer series</Button>
                    <Button color="primary" size="lg" block >newton-raphson method</Button>
                  </div>
                  <div>
                    <Route path='/layout11' component={Layout11} />
                    <Route path='/layout12' component={Layout12} />
                    <Route path='/layout13' component={Layout13} />
                    <Route path='/layout21' component={Layout21} />
                  </div>
                </Col>


                <Col sm={{ size: 'auto', offset: 1 }}>

                  <div style={{ margin: 1 + 'em' }}>
                    <div>
                      <label>Fx :&ensp;</label>
                      <input name="fx" onChange={this.handleChage} value={this.state.value} />
                    </div>

                    <div>
                      <label>X :&ensp;</label>
                      <input name="X" onChange={this.handleChage} value={this.state.value} />
                    </div>

                  </div>

                  <Button onClick={() => this.N(parseFloat(this.state.X))} 
                  style={{ margin: 1 + 'em' }} color="primary">Enter</Button>
                </Col>
              </Row>
              <Row>
                <Col >
                  <div >
                    <Table columns={columns} dataSource={data} />
                  </div>
                </Col>
                <Col>
                  <div style={{ margin: 1 + 'em' }}>
                    <LineChart width={500} height={300} data={data}  >
                      <Line type="monotone" dataKey="error" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="x" />
                      <YAxis />
                    </LineChart>
                  </div>

                </Col>
              </Row>
            </Container>
          </Switch>
        </Route>
      </div>
    );

  }
}
export default Layout22;
