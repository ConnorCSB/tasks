import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, requestAttempt] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {numAttempts}</div>
            <Form.Group controlId="requestAttemptsBox">
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (!isNaN(Number(event.target.value))) {
                            requestAttempt(Number(event.target.value));
                        }
                    }}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setAttempts(numAttempts - 1);
                }}
                disabled={numAttempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(numAttempts + requestedAttempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
