import React, { useState } from 'react';
import Add from './Add';
import EditActivity from './EditActivity';
import NewInput from './NewInput';


const NewActivity = ({setIsActivated, isActivated, setIsEditing, isEditing}) => {


    return (
        <div className='new_activity'>
            <div >
                {!isActivated &&
                    <Add
                        setIsActivated={setIsActivated}
                    />
                }
                {isActivated &&
                    <NewInput
                        setIsActivated={setIsActivated}
                        isEditing={isEditing}  
                        setIsEditing={setIsEditing}
                    />
                }
            </div>
        </div>

    );
};

export default NewActivity;