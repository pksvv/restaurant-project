import React, { Component } from 'react';
import NavbarMenu from "./NavbarMenu";

const url = "http://localhost:3000/login?q=";
//http://localhost:3000/login?q=gaurvipul

class Login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }

    login(){
        console.warn(this.state)
        fetch(url+this.state.username).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp >>>>",resp);
                if (resp.length>0){
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))

                }
                else{
                    alert("Please check your username and password.")
                }
            })
        })
   }

    render() {
        return (
            <div>
                <NavbarMenu />
                <br/><br/>
                <input type="text" name="username" placeholder="Enter UserName" onChange={(event)=>this.setState({username:event.target.value})}/> <br/><br/>
                <input type="password" name="password" placeholder="Enter Password" onChange={(event)=>this.setState({password:event.target.value})}/> <br/><br/>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;