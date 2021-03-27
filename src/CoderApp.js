import React from 'react';
import { CounterContainer } from './components/counter/CounterContainer';
import RouterApp from './routes/RouterApp';

const CoderApp = () => {
    
    return (
        <>
            <RouterApp />
            <CounterContainer />
        </>
    )
}

export default CoderApp;
