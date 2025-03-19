import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(() => {
        let first = d6();
        let second = d6();
        while (first === second) {
            second = d6();
        }
        return first;
    });
    const [rightDie, setRightDie] = useState<number>(() => {
        let first = d6();
        let second = d6();
        while (first === second) {
            second = d6();
        }
        return second;
    });
    function rollLeft() {
        setLeftDie(d6());
    }
    function rollRight() {
        setRightDie(d6());
    }
    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <p>
                {" "}
                Left Die: <span data-testid="left-die">{leftDie}</span>
            </p>
            <p>
                {" "}
                Right Die: <span data-testid="right-die">{rightDie}</span>
            </p>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {isLose && <p>Lose</p>}
            {isWin && <p>Win</p>}
        </div>
    );
}
