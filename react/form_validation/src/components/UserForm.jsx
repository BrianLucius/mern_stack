import React, { useReducer } from 'react'

const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+[@][a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$');

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

function reducer(state, action) {
    return{
        ...state,
        [action.type]: action.payload
    };
}

const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function validateInput(e) {
        const { name, value } = e.target;
        let errorMsg;

        switch(name) {
            case 'firstName':
                value.length > 0 && value.length < 3 ? errorMsg='First name must be more than two characters' : errorMsg=null;
                break;
            case 'lastName':
                value.length > 0 && value.length < 3 ? errorMsg='Last name must be more than two characters' : errorMsg=null;
                break;
            case 'email':
                value.length > 0 && !validEmail.test(value) ? errorMsg='Provide a valid email address' : errorMsg=null;
                break;
        }

        dispatch({
            type: name,
            payload: {'value': value, 'error': errorMsg}
        })
    }

    return (
        <form> 
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" value={state.firstName.value} onChange={ validateInput }/>
                { state.firstName.error ? <p style={{color:'red'}}>{state.firstName.error}</p> : '' }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" value={state.lastName.value} onChange={ validateInput }/>
                { state.lastName.error ? <p style={{color:'red'}}>{state.lastName.error}</p> : '' }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" name="email" value={state.email.value} onChange={ validateInput }/>
                { state.email.error ? <p style={{color:'red'}}>{state.email.error}</p> : '' }
            </div>
        </form>
    )
}

export default UserForm