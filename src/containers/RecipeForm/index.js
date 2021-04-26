import React from 'react';

import RecipEAT from '../../assets/img/RecipEAT.svg';

const RecipeForm = ({ postData, addToList, addToListMeasure, addToInstructions }) => {

  return (
    <div className="container-receta">
      <div className="header">Agregar Recetas</div>
      <div className="content">
        <div className="logo-recipeat">
          <img src={RecipEAT} />
        </div>
        <form
          className="form-box-recipes"
          onSubmit={postData}>
          <div className="box-fields">
            <div className="form-recipes">
              <label htmlFor="nameRecipe">Nombre de la Receta</label>
              <input
                className="input-fields"
                type="text"
                name="nameRecipe"
                placeholder="Nombre" />
            </div>
            <div className="form-recipes">
              <label htmlFor="ingredient">Ingredientes</label>
              <p>
                <input
                  className="input-fields"
                  type="text"
                  name="ingredient"
                  placeholder="Ingredientes" />
                <button onClick={addToList}>+</button>
              </p>
            </div>
          </div>
          <div className="box-fields">
            <div className="form-recipes">
              <label htmlFor="time">Time</label>
              <input
                className="input-fields"
                type="text"
                name="time"
                placeholder="Tiempo de Preparacion" />
            </div>
            {/* <div className="form-recipes">
                    <label htmlFor="ingredienstsize">Cantidad de Ingredientes</label>
                    <input
                        className="input-fields"
                        type="number"
                        name="ingredienstsize"
                        placeholder="Cantidad de Ingredientes"
                         />
                </div> */}
          </div>
          <div className="box-fields">
            <div className="form-recipes">
              <label htmlFor="measure">Ingredientes Medidas</label>
              <p>
                <input
                  className="input-fields"
                  type="text"
                  name="ingredientsMeasure"
                  placeholder="Medidas de Ingredientes"
                />
                <button onClick={addToListMeasure}>+</button>
              </p>
            </div>
            <div className="form-recipes">
              <label htmlFor="description">Descripcion</label>
              <input
                className="input-fields"
                type="text"
                name="description"
                placeholder="De que se trata el Plato" />
            </div>
          </div>
          <div className="box-fields">
            <div className="form-recipes">
              <label htmlFor="preparation">Preparacion</label>
              <p>
                <input
                  className="input-fields"
                  type="text"
                  name="instructions"
                  placeholder="Como prepararlo?" />
                <button onClick={addToInstructions}>+</button>
              </p>
            </div>
            <div className="form-recipes">
              <label htmlFor="image">Imagen</label>
              <input className="input-fields" type="text" name="image" placeholder="Anade la URL de la Imagen" />
            </div>
          </div>
          <div className="btn-box-recipe">
            <input type="submit" className="btn-login" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;