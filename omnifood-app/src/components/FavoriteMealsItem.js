import React from "react";

const FavoriteMealsItem = ({ img }) => {
    return (
    <div className="favorite__meals-item">
        <img alt="img" src={img} />
    </div>
    );
};

export { FavoriteMealsItem };
