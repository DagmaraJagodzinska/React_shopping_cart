import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js'
import PhoneList from './components/PhoneList/PhoneList.js'
import data from './data'

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          phones: data,
          cart: []
      }

      this.handleAddToCart = this.handleAddToCart.bind(this);
}

 handleAddToCart(phone) {
    this.setState({cart: [...this.state.cart, phone]})
    var a = this.state.cart;
    var cartValue = a.push(phone.name);
    console.log(cartValue + " " + phone.name);
  }

render() {
    return (
    <div className="container">
        <div className="row">
            <div className="App">
                <div className="col-md-6">
                    <div className="App-main">
                        <PhoneList phones={this.state.phones} handleAddToCart={this.handleAddToCart}>
                         </PhoneList>
                    </div>
                </div>  
                <div className="col-md-6">
                    <Nav cart={this.state.cart}/>
                </div> 
            </div> 
        </div>
    </div>
    );
  }
}

export default App;

