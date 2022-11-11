import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
 
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1); //setCounter((c)=>c+1);
    };

    const handlerSubstract = () => setCounter(counter - 1);
    const handlerReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handlerSubstract}>-1</button>
            <button onClick={handlerReset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
