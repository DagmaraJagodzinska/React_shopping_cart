import React, { Component } from 'react';

import PhoneItem from '../PhoneItem/PhoneItem.js'

class PhoneList extends Component {
    constructor(props) {
        super(props)
        this.renderphoneItems = this.renderphoneItems.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(phone) {
        this.props.handleAddToCart(phone)
    }

    renderphoneItems(phone) {
        return (
            <div className="col-md-6" key={phone.id}>
            <PhoneItem
                phone={phone}
                handleClick={this.handleClick}
            ></PhoneItem>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.phones.map(this.renderphoneItems)}
            </div>
        );
    }
}

export default PhoneList;