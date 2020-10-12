import React, { Component } from "react";
import axios from "axios";

class PizzaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pizzeria_name: " ",
          street: " ",
          city: " ",
          state: " ",
          zip_code: " ",
          website: " ",
          phone_number: " ",
          description: " ",
          email: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
          }
    handleSubmit(event) {
        event.preventDefault();
        axios
        .post("process.env.REACT_APP_URL/create/", {
                pizzeria_name: this.state.pizzeria_name,
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zip_code: this.state.zip_code,
                website: this.state.website,
                phone_number: this.state.phone_number,
                description: this.state.description,
                email: this.state.email,
              })
              .then((response) => {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
    render() {
        const {
          pizzeria_name,
          street,
          city,
          state,
          zip_code,
          website,
          phone_number,
          description,
          email,
        } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
            Pizzeria
              <input
                type="text"
                name="pizzeria_name"
                value={pizzeria_name}
                onChange={this.handleChange}
              />
            </div>
            <div>
            Address
              <input
                type="text"
                name="street"
                value={street}
                onChange={this.handleChange}
              />
            </div>
            <div>
            City
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.handleChange}
              />
            </div>
            <div>
            Zip
              <input
                type="text"
                name="zip_code"
                value={zip_code}
                onChange={this.handleChange}
              />
            </div>
            <div>
            Website
              <input
                type="text"
                name="website"
                value={website}
                onChange={this.handleChange}
              />
            </div>
            <div>
            Phone
              <input
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={this.handleChange}
              />
            </div>
            <div>
            Description
              <input
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </div>
            <div>
            Email
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <input style={{backgroundColor:'white'}} type="submit" value="Submit" />
          </form>
        );
      }
}
export default PizzaForm;