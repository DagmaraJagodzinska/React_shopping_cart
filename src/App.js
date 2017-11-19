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
      const cartItem = this.state.cart.find(x => x.id === phone.id);
      !cartItem > 0 && this.setState({cart: [...this.state.cart, phone]})

      //nie działa dodawanie wielokrotne
  }

render() {
    return (
      <div className="App">
        <Nav cart={this.state.cart}/>
        <div className="App-main">
            <PhoneList
                phones={this.state.phones}
                handleAddToCart={this.handleAddToCart}
            ></PhoneList>
        </div>
      </div>
    );
  }
}

export default App;

