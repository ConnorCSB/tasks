import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setValue] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group className="mb-3" controlId="enterAnswer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    placeholder="Enter answer"
                    onChange={updateAnswer}
                />
                {answer === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
