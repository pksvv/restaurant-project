import React, { Component } from 'react';
import NavbarMenu from "./NavbarMenu";

const url = "http://localhost:3000/restaurant/";

class RestaurantUpdate extends Component {

    constructor(){
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }

    componentDidMount(){
        fetch(url+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                this.setState({
                    id:result.id, 
                    name: result.name,
                    email: result.email,
                    address: result.address,
                    rating: result.rating 
                });
            })
        })
    }

    update(){
        fetch(url+this.state.id,{
            method:"Put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("body:JSON.stringify(this.state) >>> ",JSON.stringify(this.state))
                console.warn("Response >>> ",resp);
                alert("Restaurant has been updated")
            })
        })
    }


    render() {
        console.warn("State >> ",this.state);
        return (
            <div>
                <NavbarMenu />
                <h1>Restaurant Update</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" value={this.state.name}/><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" value={this.state.address}/><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" value={this.state.rating}/><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" value={this.state.email}/><br /><br />
                    <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;