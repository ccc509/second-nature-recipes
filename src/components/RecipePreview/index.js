import React from "react";
import "./style.scss";

function RecipePreview({ recipe, handleRecipePreviewClick }) {
  const { title, imageUrl } = recipe;

  return (
    <div
      className="recipe-preview"
      onClick={() => handleRecipePreviewClick(recipe)}
    >
      <img src={imageUrl} alt="" />
      <div className="title">{title}</div>
    </div>
  );
}

export default RecipePreview;
