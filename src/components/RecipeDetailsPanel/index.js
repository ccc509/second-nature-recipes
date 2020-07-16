import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import "./style.scss";

function RecipeDetailsPanel({ recipe }) {
  const { method, ingredients, imageUrl, cookingTime, servings } = recipe;

  const getStepString = (step, i) => `${i + 1}: ${step}`;

  return (
    <div className="recipe-details-panel">
      <PerfectScrollbar
        options={{
          minScrollbarLength: 50
        }}
      >
        <img src={imageUrl} alt="" />
        <table className="recipe-details-panel-section">
          <thead>
            <tr>
              <th>Cooking Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{cookingTime}</th>
            </tr>
          </tbody>
        </table>

        <table className="recipe-details-panel-section">
          <thead>
            <tr>
              <th>Servings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{servings}</th>
            </tr>
          </tbody>
        </table>

        <table className="recipe-details-panel-section">
          <thead>
            <tr>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {method.map((step, i) => (
              <tr rowKey={i}>
                <th>{getStepString(step, i)}</th>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="recipe-details-panel-section">
          <thead>
            <tr>
              <th colSpan="2">Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, i) => (
              <tr rowKey={i}>
                <th>{ingredient.ingredient}</th>
                <th>{ingredient.amount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </PerfectScrollbar>
    </div>
  );
}

export default RecipeDetailsPanel;
