import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "christmas"
    | "halloween"
    | "independence_day"
    | "new_year"
    | "thanksgiving";

const holidayEmoji: Record<Holiday, string> = {
    christmas: "🎄",
    halloween: "🎃",
    independence_day: "🎆",
    new_year: "🎉",
    thanksgiving: "🦃",
};

const nextAlphabet: Record<Holiday, Holiday> = {
    christmas: "halloween",
    halloween: "independence_day",
    independence_day: "new_year",
    new_year: "thanksgiving",
    thanksgiving: "christmas",
};

const nextYear: Record<Holiday, Holiday> = {
    new_year: "independence_day",
    independence_day: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "christmas",
    christmas: "new_year",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("new_year");

    function advanceAlphabet(): void {
        setHoliday(nextAlphabet[holiday]);
    }

    function advanceYear(): void {
        setHoliday(nextYear[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holidayEmoji[holiday]}</div>

            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>

            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
