import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DeleteActivity from './DeleteActivity';
import EditActivity from './EditActivity';
import NewActivity from './newActivity';


const List = () => {

    const [listData, setListData] = useState([])
    const [isActivated, setIsActivated] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/todo')
            .then((response) => response.json())
            .then(data => setListData(data))
    }, [listData])

    return (
        <div className='table'>
            <NewActivity 
            isActivated={isActivated}
            setIsActivated={setIsActivated}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            setListData={setListData}
            />
            <Table striped>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Descripcion</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listData.map(data => (
                            <tr key={data.id} >
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.status}</td>
                                <td><DeleteActivity id={data.id} /></td>
                                <td><EditActivity id={data.id} 
                                setIsActivated={setIsActivated}
                                isActivated={isActivated}
                                setIsEditing={setIsEditing}
                                isEditing={isEditing}
                                /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default List;