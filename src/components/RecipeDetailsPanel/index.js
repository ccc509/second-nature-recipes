import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
// import QualityControlResultRows from "./QualityControlResultRows";

function RecipeDetailsPanel(recipe) {
  const { method, ingredients, imageUrl, cookingTime, title} = recipe;
  return (
    <div className="metadata">
      <PerfectScrollbar
        options={{
          minScrollbarLength: 50
        }}
      >
          <h1>{title}</h1>

      </PerfectScrollbar>
    </div>
  );
}

export default RecipeDetailsPanel;
