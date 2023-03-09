import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import EditActivity from './EditActivity';

const NewInput = ({ setIsActivated, isEditing, setIsEditing }) => {

    const { handleSubmit, register, reset } = useForm();
    const inputNull = { title: "", description: "", status: "" }

    const submit = (data) => {
        if (data.title && data.description && data.status) {
            fetch('http://localhost:8000/api/v1/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(setIsActivated(false))
        }
        else {
            alert("Rellene los campos")
        }
    }

    const falseEdit = () => {
        setIsActivated(false)
        setIsEditing(false)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(submit)}>
                <Row>
                    <Col>
                        <Form.Control placeholder="Title" id="title" {...register("title")} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Description" id="description" {...register("description")} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Status" id="status" {...register("status")} />
                    </Col>
                    <Col>
                        {!isEditing &&
                            <Button type='submit' variant="success"><i className="fa-solid fa-check"></i></Button>
                        }
                        {isEditing &&
                            <Button variant="info"><i className="fa-sharp fa-solid fa-pen"></i></Button>
                        }
                        <Button onClick={() => falseEdit()} variant="danger"><i className="fa-solid fa-xmark"></i></Button>{' '}
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default NewInput;