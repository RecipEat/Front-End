import React, { Component } from "react";
import RecipEAT from './assets/img/RecipEAT.svg';
import "./css/styles.scss";


class Recipe extends Component {
    render() {
        return (
            <div className="container-receta" ref={this.props.containerRef}>
                <div className="header">Agregar Recetas</div>
                <div className="content">
                <div className="logo-recipeat">
                    <img src={RecipEAT} />
                </div>
                <form className="form-box-recipes">
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="nameRecipe">Nombre de la Receta</label>
                            <input className="input-fields" type="text" name="nameRecipe" placeholder="Nombre" />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <input className="input-fields" type="text" name="ingredients" placeholder="Ingredientes" />
                        </div>
                    </div>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="time">Time</label>
                            <input className="input-fields" type="text" name="time" placeholder="Tiempo de Preparacion" />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="ingredienstsize">Cantidad de Ingredientes</label>
                            <input className="input-fields" type="number" name="ingredienstsize" placeholder="Cantidad de Ingredientes" />
                        </div>
                    </div>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="measure">Ingredientes Medidas</label>
                            <input className="input-fields" type="text" name="measure" placeholder="Medidas de Ingredientes" />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="description">Descripcion</label>
                            <input className="input-fields" type="text" name="description" placeholder="De que se trata el Plato" />
                        </div>
                    </div>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="preparation">Preparacion</label>
                            <textarea type="text" name="preparation" placeholder="Como prepararlo?" />
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
}

export default Recipe;