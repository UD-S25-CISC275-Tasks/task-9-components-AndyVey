import React, { useState } from "react";
import { Button } from "react-bootstrap";
enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    IndependenceDay = "🎆",
    NewYear = "🎉",
    Thanksgiving = "🦃"
}
const alphabetical: Record<Holiday, Holiday> = {
    [Holiday.Christmas]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.IndependenceDay,
    [Holiday.IndependenceDay]: Holiday.NewYear,
    [Holiday.NewYear]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Christmas
};
const byYear: Record<Holiday, Holiday> = {
    [Holiday.NewYear]: Holiday.IndependenceDay,
    [Holiday.IndependenceDay]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.NewYear
};
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);
    function advAlphabet() {
        setHoliday(alphabetical[holiday]);
    }
    function advByYear() {
        setHoliday(byYear[holiday]);
    }

    return (
        <div>
            <p> Holiday: {holiday}</p>
            <Button onClick={advAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advByYear}>Advance by Year</Button>
        </div>
    );
}
