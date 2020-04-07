import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import DummyCards from './Components/DummyCards';
import Link from "@material-ui/core/Link";

function App() {
    const numCards = 50;

    return (
    <Container className="App">
        <h1>April 7 Exercise 1 <Link href={'https://github.com/omenyayl/swe-april7-exercise1'}>SOURCE</Link> </h1>
        <DummyCards numCards={numCards}/>
    </Container>
    );
}

export default App;
