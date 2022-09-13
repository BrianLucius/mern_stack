import React, { useState } from 'react';
import axios from 'axios';

const Component = () => {
    const [componentState, SetComponentState] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Component Form</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Component