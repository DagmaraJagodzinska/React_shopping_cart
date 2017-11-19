import React, { Component } from 'react';

class PhoneItem extends Component {
    render() {
        const phone = this.props.phone;
        return (
            <div>
                <div>
                    <img src={phone.picture} alt="phone Item"/>
                </div>
                <div>
                    <h4>{phone.name}</h4>
                    <p>${phone.price}</p>
                    <button onClick={this.props.handleClick.bind(this, phone)}>
                        <span className="fa fa-cart-plus"></span> Buy
                    </button>
                </div>
            </div>
        );
    }
}

export default PhoneItem;