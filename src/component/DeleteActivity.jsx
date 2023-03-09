import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteActivity = ({id}) => {

    const deleteActivity = () => {
        fetch(`http://localhost:8000/api/v1/todo/${id}`, {
            method: 'DELETE'
        })
    }


    return (
        <div>
            <Button variant="danger" onClick={()=> deleteActivity()}><i className="fa-solid fa-trash" style={{ color: "white" }}></i></Button>{' '}
        </div>
    );
};

export default DeleteActivity;