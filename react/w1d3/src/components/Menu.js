// import React
// define the class
// export the class

import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
        }
    }
    render() {
        return (
            <div>
                 <h3>Dish: {this.props.dishName}</h3>
                 <h4>Price: ${this.state.price}</h4>
                 {this.props.children}
                 <button className="btn" onClick={()=>this.setState({price: this.state.price*2})}> Increase Price</button>
            </div>
        );
    }
}

export default Menu;

