import React from 'react';
import { compile } from 'mathjs';
import { Table } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Container, Row, Col, Button } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Layout11 from '../page/Layout11';
import Layout13 from '../page/Layout13';
import Layout21 from '../page/Layout21';
import Layout22 from '../page/Layout22';

const columns = [
    {
        title: 'Iteration',
        dataIndex: 'iteration',
        width: 100,
    },
    {
        title: 'XL',
        dataIndex: 'xl',
        width: 180,
    },
    {
        title: 'XR',
        dataIndex: 'xr',
        width: 180,
    },
    {
        title: 'Error',
        dataIndex: 'error',
    },
];

var data = [];

class Layout12 extends React.Component {
    constructor() {
        super();
        this.state = {
            XL: 0,
            XR: 0,
            fx: "",
            er: 0.000001,
            tables: false,
        }
        this.handleChage = this.handleChage.bind(this);
        this.fxfl = this.fxfl.bind(this);
    }

    handleChage(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    fxfl(xl, xr) {
        var sum = parseFloat(0.000000);
        var xi = 0;
        var Xl = [];
        var Xr = [];
        var Er = [];
        var ii = 0;
        sum = 10.000000
        while (sum > this.state.er) {
            Xl[ii] = xl;
            Xr[ii] = xr;
            var fxl = this.F(xl);
            var fxr = this.F(xr);
            xi = ((xl * fxr) - (xr * fxl)) / (fxr - fxl);
            var xm1 = fxr * this.F(xi);

            if (xm1 > 0) {
                sum = this.E(xi, xr);
                if (xl < xr) {
                    xr = xi;
                }
                else {
                    xl = xi;
                }
            }
            else {
                sum = this.E(xi, xl);
                if (xl < xr) {
                    xl = xi;
                }
                else {
                    xr = xi;
                }
            }
            sum = Math.abs(sum).toFixed(8);
            Er[ii] = sum;
            ii++;
        };
        this.setdata(Xl, Xr, Er);
        this.setState({
            tables: true
        })
    }

    F(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }

    E(n, m) {
        return (n - m) / n;
    }

    setdata(Xl, Xr, Er) {
        data = []
        for (let i = 0; i < Xl.length; i++) {
            data.push({
                iteration: i + 1,
                xl: Xl[i],
                xr: Xr[i],
                error: Er[i],
            });
        }

    }

    render() {
        return (

            <div align="left" style={{ margin: 2 + 'em' }} >
                <div >
                    <Route>
                        <Switch>
                            <Container>
                                <Row >
                                    <Col xs="5">
                                        <div align='left'>
                                            <Button color="secondary" size="sm" block tag={Link} to="/layout11">bisection method</Button>
                                            <Button color="primary" size="lg" block >false-position method</Button>
                                            <Button color="secondary" size="sm" block tag={Link} to="/layout13">one-point iterwation method</Button>
                                            <Button color="secondary" size="sm" block tag={Link} to="/layout21">layer series</Button>
                                            <Button color="secondary" size="sm" block tag={Link} to="/layout22">newton-raphson method</Button>
                                        </div>
                                        <div>
                                            <Route path='/layout11' component={Layout11} />
                                            <Route path='/layout13' component={Layout13} />
                                            <Route path='/layout21' component={Layout21} />
                                            <Route path='/layout22' component={Layout22} />
                                        </div>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 1 }}>
                                        <div style={{ margin: 1 + 'em' }}>
                                            <div >
                                                <label>Fx :&ensp;</label>
                                                <input name="fx" onChange={this.handleChage} value={this.state.value} />
                                            </div>
                                            <div>
                                                <label>XL :&ensp;</label>
                                                <input name="XL" onChange={this.handleChage} value={this.state.value} />
                                            </div>
                                            <div>
                                                <label>XR :&ensp;</label>
                                                <input name="XR" value={this.state.value} onChange={this.handleChage} />
                                            </div>
                                            <Button onClick={() => this.fxfl(parseFloat(this.state.XL), parseFloat(this.state.XR))} 
                                                type="primary" style={{ margin: 1 + 'em' }}>Enter</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div align='center'>
                                            <Table columns={columns} dataSource={data} />
                                        </div >
                                    </Col>
                                    <Col>
                                        <div align='center'>
                                            <LineChart width={500} height={250} data={data}>
                                                <Line type="monotone" dataKey="error" stroke="#8884d8" />
                                                <CartesianGrid stroke="#ccc" />
                                                <XAxis dataKey="error" />
                                                <YAxis />
                                            </LineChart>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Switch>
                    </Route>
                </div>
            </div >
        );

    }
}
export default Layout12;