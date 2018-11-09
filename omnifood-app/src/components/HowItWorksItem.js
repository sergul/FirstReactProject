import React from 'react'

const HowItWorksItem = ({ number, text }) => {
    return (
        <div className="how-it-works__list-item">
            <div className="how-it-works__list-item-number">{number}</div>
            <div className="how-it-works__list-item-p vertical-center">
                <p>{text}</p>
            </div>
            
            
        </div>
    );
}

export { HowItWorksItem };