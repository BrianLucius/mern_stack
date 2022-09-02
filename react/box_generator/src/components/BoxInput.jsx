import React, { useState }  from 'react'

const BoxInput = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        setColor("");
    };

  return (
    <form onSubmit={ handleSubmit }> 
        <div>
            <label>Color: </label>
            <input type="text" name="color" value={ color } onChange={ (e) => setColor(e.target.value) }/>
            <input type="submit" value="Add"/>
        </div>
    </form>
  )
}

export default BoxInput