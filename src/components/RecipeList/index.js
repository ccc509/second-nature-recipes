import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import recipeData from "../../data/recipes.json";
import RecipePreview from "../RecipePreview";
import RecipeDetailsPanel from "../RecipeDetailsPanel";
import "./style.scss";

function RecipeList() {
  const { recipes } = recipeData;

  const [showRecipeDetails, setShowRecipeDetails] = useState(false);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipePreviewClick = recipe => {
    setSelectedRecipe(recipe);
    setShowRecipeDetails(true);
  };

  return (
    <div className="recipe-list">
      {selectedRecipe && (
        <Modal
          show={showRecipeDetails}
          onHide={() => setShowRecipeDetails(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RecipeDetailsPanel recipe={selectedRecipe} />
          </Modal.Body>
        </Modal>
      )}
      <h1>Second Nature Recipes</h1>
      {recipes.map((recipe, i) => (
        <RecipePreview
          recipe={recipe}
          key={i}
          handleRecipePreviewClick={handleRecipePreviewClick}
        />
      ))}
    </div>
  );
}

export default RecipeList;
