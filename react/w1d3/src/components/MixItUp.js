import React, { Component } from 'react';

class MixItUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            likes: 0
        }
    }

    render() {
        const addLikes = () => {
            this.setState({likes: this.state.likes+1});
        }

        return (
            <div>
                <h1>State / Prop Demo</h1>
                <button onClick={() => this.setState({count: this.state.count+1})}>Add Count</button>
                <button onClick={() => addLikes()}>Add likes</button>
                <h1>Count: {this.state.count}</h1>
                <h2>Likes: {this.state.likes}</h2>
                <h3>Like from props: {this.props.likes}</h3>

            </div>
        );
    }
}

export default MixItUp;
