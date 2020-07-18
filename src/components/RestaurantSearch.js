import React, { Component } from 'react';
import { Table, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const url = "http://127.0.0.1:3000/restaurant?q=";
const delurl = "http://127.0.0.1:3000/restaurant/";

class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state={
            searchData:null,
            noData:false,
            lastSearch:""
        }
    }

    search(key){ 
        //console.warn(key);
        this.setState({lastSearch:key});
        fetch(url+key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp>>>>",resp);
                if (resp.length>0)
                {
                    this.setState({searchData:resp, noData:false});
                }
                else{
                    this.setState({noData:true,searchData:null})
                }
            })
        })
    }

    delete(id){
        //alert("delete");
        fetch(delurl+id,{
            method:"Delete",
            headers:{
                "Content-Type":"application/json"
            },
            //body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been Deleted")
            })
        })
        this.search(this.state.lastSearch)
    }

    render() {
        return (
            <Container>
                <h1>Restaurant Search</h1>
                {/*<input type="text" onChange={(event)=>this.search(event.target.value)}/>*/}
                <Form.Control type="text" placeholder="Search Restaurant..." onChange={(event)=>this.search(event.target.value)}/>
                {
                    this.state.searchData ?
                        <div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.searchData.map((item, i) =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.rating}</td>
                                                    <td>
                                                    <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/> </Link>
                                                    <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/> </span>
                                                    </td>
                                                </tr>
                                            )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : ""
                }
                {
                    this.state.noData?<h3>No Data Found</h3>
                    :null
                }



            </Container>
        );
    }
}

export default RestaurantSearch;