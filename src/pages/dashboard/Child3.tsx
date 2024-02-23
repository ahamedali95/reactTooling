import React, {memo, useContext} from 'react';
import {CounterContext} from "./Dashboard";

const Child3 = () => {
    const { a, b } = useContext(CounterContext);
    console.log("third child rerendering")

    return (
        <>
            <h5>Child 3</h5>
            {/*<h5>{`Counter: ${value}`}</h5>*/}
            {`a: ${a} b: ${b}`}
        </>
    );
};

export default Child3;