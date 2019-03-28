import React, { Component } from 'react';
import Counter from './Counter';

const Counters = (props) => {

    const { onReset, counters, onDelete, onIncrement } = props

    return (
        
        <div>
            <button className='btn btn-primary btn-md m-2'
                onClick={onReset}
            >Reset
            </button>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}
                >
                    <h4>Counter #{counter.id}</h4>
                </Counter>
            ))}
        </div>
    );
}
export default Counters;
