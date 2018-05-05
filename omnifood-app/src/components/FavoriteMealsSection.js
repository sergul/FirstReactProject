import React from "react";
import image from '../img/1.jpg';

const FavoriteMealsSection = () => {
    var imgSrc = '../img/1.jpg';
    return (
        <section className="section-meals section-gap">
            <div>
                <img src={imgSrc}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
            </div>
            
        </section>
        );
};

export { FavoriteMealsSection };
