import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />

            {editMode ?
                <div>
                    <Form.Group controlId="enterName">
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="enterStudent">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={student}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setStudent(event.target.checked);
                            }}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {name} is {student ? "" : "not"} a student
                </div>
            }
        </div>
    );
}
