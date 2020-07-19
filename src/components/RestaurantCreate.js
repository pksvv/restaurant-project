import React, { Component } from 'react';
import NavbarMenu from "./NavbarMenu";

const url = "http://127.0.0.1:3000/restaurant";

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            "id":null,
            "email":null,
            "address":null,
            "rating":null,
            "name":null
        }
    }

    create(){
        //console.warn(this.state);
        fetch(url,{
            method:"Post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp >>>",resp);
                alert("Restaurant Added")
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu />
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder="Restaurant ID" /><br /><br />
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" /><br /><br />
                    <button onClick={()=>{this.create()}}>Add Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;