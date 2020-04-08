import ParamCard from "./ParamCard";
import PropTypes from "prop-types";
import React from "react";

const ParamCards = ({numCards}) => {
    numCards = Math.min(5, numCards);
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        const params = {
            id: i + '',
            randomNumber: Math.random() + ''
        };
        cards.push(
            <div key={i}>
                <ParamCard params={params} />
                <br/>
            </div>
        )
    }
    return cards;
};

ParamCards.propTypes = {
    numCards: PropTypes.number.isRequired
};

export default ParamCards;
