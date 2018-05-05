import React from 'react';
import { Next5DaysDisplayItem } from './index';

/**
 * Represents the UI for Next 5 days weather list
 * 
 */

const Next5DaysDisplay = ({ list }) => {
    return (
        <div className="next-five-days-container">
        {
            list && list.map(item => {
                return <Next5DaysDisplayItem key={item.date} {...item}/>;
            })
        }
            
        </div>
    );
}

export { Next5DaysDisplay };