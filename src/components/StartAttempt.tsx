import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function handleStart(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setInProgress(true);
        }
    }

    function handleStop(): void {
        setInProgress(false);
    }

    function handleMulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Attempts Remaining: {attempts}</div>

            <Button
                onClick={handleStart}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={handleStop} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={handleMulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
