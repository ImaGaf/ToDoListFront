import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const EditActivity = ({id, setIsActivated, isActivated, setIsEditing, isEditing}) => {

    const [auxData, setAuxData] = useState([])

    const edit =()=>{
        fetch(`http://localhost:8000/api/v1/todo/${id}`)
        .then((response) => response.json())
        .then(data => setAuxData(data))
        setIsActivated(!isActivated)
        setIsEditing(!isEditing)
    }



    return (
        <div>
            <Button variant="info" onClick={()=> edit ()}><i className="fa-sharp fa-solid fa-pen"></i></Button>{' '}
        </div>
    );
};

export default EditActivity;