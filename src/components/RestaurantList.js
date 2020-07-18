import React, { Component } from 'react';
import { Table,Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

const url = "http://127.0.0.1:3000/restaurant/";

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData(){
        fetch(url).then((response) => {
            response.json().then((result) => {
                //console.log(result);
                this.setState({ list: result });
            })
        })
    }

    delete(id){
        //alert("delete");
        fetch(url+id,{
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
        this.getData()
    }

    /** Why 2 console.warn appear? */
    render() {
        //console.warn(this.state);
        return (
            <Container>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
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
                                        this.state.list.map((item, i) =>
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
                        : <p>Loading...</p>
                }
            </Container>
        );
    }
}

export default RestaurantList;