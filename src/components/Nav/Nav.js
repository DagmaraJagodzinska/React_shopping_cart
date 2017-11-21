import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Nav-item Nav-cart">
                    <span className="fa fa-cart-plus"></span> 
                    Tyle elementów w twoim super koszyku: {this.props.cart.length}
                </div>
            </div>
        );
    }
}

export default Nav;