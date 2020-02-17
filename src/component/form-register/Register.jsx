import React,{ Component } from 'react';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.changeHandle = this.changeHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }
    changeHandle = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandle = e => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("https://fathomless-fjord-35419.herokuapp.com//api/register",data)
            .then(res => this.props.history.push('/'))
    }
    render(){
        return(
            <div className="container" >
                <form onSubmit={this.submitHandle}>
                     <h3>Register</h3>

                      <div className="form-group">
                      <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" name="name" onChange={this.changeHandle} required />
                      </div>

                      <div className="form-group">
                      <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.changeHandle} required />
                      </div>

                      <div className="form-group">
                      <label>Password</label>
                           <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.changeHandle} required />
                      </div>


                      <button type="submit" className="btn btn-primary btn-block">register</button>
                     
                  </form>
            </div>
        )
    }
}

export default Register;
