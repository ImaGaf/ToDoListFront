import { Button } from 'react-bootstrap';

const Add = ({setIsActivated}) => {

    const addState = () =>{
        setIsActivated(true)
    }

    return (
        <div>
            <Button onClick={()=> addState()} variant="warning">Add New Activity</Button>{' '}
            <br />
            <br />
        </div>
    );
};

export default Add;