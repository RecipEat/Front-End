import React from "react";
import "../css/styles.scss";

import NewRecipe from "../components/NewRecipe"; 


export default function Recipes()  {
    return (
    <div className="container">
        <NewRecipe />
    </div>
    )
}