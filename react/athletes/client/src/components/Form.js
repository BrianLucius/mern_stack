import React, { useState} from 'react';


const Form = props => {
    const { onSubmitHandler, initialFirstName, initialLastName, initialSport, initialTeam } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [sport, setSport] = useState(initialSport);
    const [team, setTeam] = useState(initialTeam);

    return (
        <form onSubmit={e => {onSubmitHandler(e, {firstName, lastName, sport, team})}}>
            <p>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
            </p>
            <p>
                <label>Sport</label>
                <input type="text" name="sport" onChange={(e)=>{setSport(e.target.value)}} value={sport}/>
            </p>
            <p>
                <label>Team</label>
                <input type="text" name="team" onChange={(e)=>{setTeam(e.target.value)}} value={team}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Form;