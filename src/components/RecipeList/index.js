import React, {useState} from "react";
import recipeData from '../../data/recipes.json'
import RecipePreview from '../RecipePreview'
import Modal from "react-bootstrap/Modal";
import RecipeDetailsPanel from "../RecipeDetailsPanel"
import "./style.scss";

function RecipeList() {
  const { recipes } = recipeData;

  const [showRecipeDetails, setShowRecipeDetails] = useState(
    false
  );

  const [selectedRecipe, setSelectedRecipe] = useState(
    null
  );

  const handleRecipePreviewClick = (recipe) => {
    setShowRecipeDetails(true);
    setSelectedRecipe(recipe);
  };

  return (
    <div className="recipe-list" >
      <Modal
            show={showRecipeDetails}
            onHide={() => setShowRecipeDetails(false)}
          >
            <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          </Modal>
      <h1>Second Nature Recipes</h1>
      {recipes.map(recipe => 
      <RecipePreview  
        recipe = {recipe}
        handleRecipePreviewClick = {handleRecipePreviewClick}
      />)}
          
    </div>
  );
}

export default RecipeList
