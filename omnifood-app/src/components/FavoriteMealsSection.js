import React from "react";
import { FavoriteMealsItem } from "./index";
import getImage from '../img/index';

const FavoriteMealsSection = () => {
    let jsx = [];
    const createItems = (numItems) => {
        let index = 1;
        for (let i = 1; i < numItems; ++i) {
            index = i.toString();
            jsx.push(<FavoriteMealsItem key={index} img={getImage(`${index}.jpg`)} />);
        }
        return jsx;
    }
    
    return <section className="favorite__meals section-gap">{createItems(9)}</section>;
};

export { FavoriteMealsSection };
