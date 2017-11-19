import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Nav-item Nav-cart">
                    <span className="fa fa-cart-plus"></span> {this.props.cart.length}
                    {this.props.cart.name}
                </div>
            </div>
        );
    }
}

export default Nav;