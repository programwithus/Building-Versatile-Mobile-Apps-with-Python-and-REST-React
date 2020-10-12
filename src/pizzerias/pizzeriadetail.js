import React, { Component } from 'react';
import axios from "axios";
import PizzaUpdate from './pizzeriaupdate';

class PizzaDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
        this.deletePizzeria=this.deletePizzeria.bind(this);
      }
    updatePizzeriaDetails() {
        this.setState({ showComponent: true });
      }
    deletePizzeria(obj){
        console.log(obj);
        axios.delete("http://127.0.0.1:8000".concat(obj))
        .then((response) => {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
      }
    render(){
        const obj = this.props.pizzariaDetail;
        return(
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.pizzeria_name}</h4>
                <h1>hjjh</h1>
                <h4>{obj.street} {obj.city}{obj.state}{obj.zip_code}</h4>
                <h4>{obj.description}</h4>
                <button
                    style={{ backgroundColor: "white" }}
                    onClick={()=> this.updatePizzeriaDetails()}>
                    Update
                </button> 
                <button
                    style={{ backgroundColor: "white" }}
                    onClick={() => this.deletePizzeria(obj.delete)}>
                    Delete
                </button> 
                {this.state.showComponent ? <PizzaUpdate pizzariaUpdate={obj}/> : null }     
            </div>
        )
    }
}



export default PizzaDetail;