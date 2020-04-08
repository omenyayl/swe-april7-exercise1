import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import ParamCards from './Components/ParamCards';
import Link from "@material-ui/core/Link";

function App() {
    const numCards = 5;

    return (
    <Container className="App">
        <h1>April 7 Exercise 1</h1>
        <h2 style={{marginBlockEnd: '0'}}>Echo Servlet URL: </h2>
        <h3 style={{marginBlockStart: '0'}}>https://olegs-tech.space/echo</h3>
        <h2><Link href='https://github.com/omenyayl/SWE432-apps-omenyayl/blob/master/src/main/java/springservlet/deployer/servlets/Echo/Echo.java'>Echo Servlet Source</Link></h2>
        <h2><Link href='https://github.com/omenyayl/swe-april7-exercise1'>React App Source</Link></h2>
        <h2 style={{textAlign: 'center'}}>Param Cards</h2>
        <ParamCards numCards={numCards}/>
    </Container>
    );
}

export default App;
