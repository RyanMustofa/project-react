import React,{ Component } from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            token: ''
        }
        this.changeHandle = this.changeHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)

    }
        changeHandle = e => {
            this.setState({
                [e.target.name] : e.target.value
            })
        }
    submitHandle = e => {
        e.preventDefault();
        const data = {
            email:this.state.email,
            password:this.state.password
        }
        this.setState({isiL: true})
        axios.post("https://fathomless-fjord-35419.herokuapp.com//api/login",data)
            .then(res => {
                localStorage.setItem('api_token',res.data.api_token)
                localStorage.setItem('id',res.data.id)
                console.log(res)
                this.setState({
                    token: res.data.api_token,
                    isiL: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render(){
        if(this.state.isiL === false){ 
            return <Redirect to="/dashboard" />
        }else if(localStorage.getItem('api_token') && localStorage.getItem('id')){
            return <Redirect to="/dashboard" />
        }else if(this.state.isiL === true){
            return <h1>incorrect</h1>
        }

        return(
            <div className="container mar" >
                <form onSubmit={this.submitHandle}>
                     <h3>Sign In</h3>

                      <div className="form-group">
                      <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.changeHandle} required />
                      </div>

                      <div className="form-group">
                      <label>Password</label>
                           <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.changeHandle} required />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <Link to="/register" className="btn btn-primary btn-block" >Register</Link>
                     
                  </form>
            </div>
        )
    }
}

export default Login;
