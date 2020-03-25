import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

export default class FristForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
          email: "",
          username: ""
      }
      this.handleChange=this.handleChange.bind(this);
  }


  handleChange(event){
     console.log(event.target.name);
     this.setState({[event.target.name]: event.target.value});
  }

render(){
    return (
        <div style={{margin: 1 + 'em'}}>    
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={this.state.email} onChange={this.handleChange}/>
      </FormGroup> 
    
      <FormGroup>
        <Label for="username">UserName</Label>
        <Input type="text" name="username" id="userName" placeholder="placeholder" value={this.state.username} onChange={this.handleChange}/>
      </FormGroup>
    </Form>
    </div>

    
    );
  } 
}
