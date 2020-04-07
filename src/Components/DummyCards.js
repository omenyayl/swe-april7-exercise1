import DummyCard from "./DummyCard";
import PropTypes from "prop-types";
import React from "react";

const DummyCards = ({numCards}) => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(
            <div key={i}>
                <DummyCard delay={1000 + i * 200}/>
                <br/>
            </div>
        )
    }
    return cards;
};

DummyCards.propTypes = {
    numCards: PropTypes.number.isRequired
};

export default DummyCards;
