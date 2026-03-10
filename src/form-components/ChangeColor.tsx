import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, SetColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "black",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    id="chosenColor"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        SetColor(event.target.value);
                    }}
                />
            ))}

            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
