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
                <div className="form">
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="nameRecipe">Nombre de la Receta</label>
                            <input type="text" name="nameRecipe" placeholder="Nombre" />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <input type="text" name="ingredients" placeholder="Ingredientes" />
                        </div>
                    </div>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="time">Time</label>
                            <input type="text" name="time" placeholder="Tiempo de Preparacion" />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="ingredienstsize">Cantidad de Ingredientes</label>
                            <input type="number" name="ingredienstsize" placeholder="Cantidad de Ingredientes" />
                        </div>
                    </div>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="measure">Ingredientes Medidas</label>
                            <input type="text" name="measure" placeholder="Medidas de Ingredientes" />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="description">Descripcion</label>
                            <input type="text" name="description" placeholder="De que se trata el Plato" />
                        </div>
                    </div>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="preparation">Preparacion</label>
                            <textarea type="text" name="preparation" placeholder="Como prepararlo?" />
                        </div>
                        <div className="style-radio">
                            <div className="radio-sl">
                                <label htmlFor="score">1</label>
                                <input type="radio" name="score" />
                            </div>
                            <div className="radio-sl">
                                <label htmlFor="score">2</label>
                                <input type="radio" name="score" />
                            </div>
                            <div className="radio-sl">
                                <label htmlFor="score">3</label>
                                <input type="radio" name="score" />
                            </div>
                            <div className="radio-sl">
                                <label htmlFor="score">4</label>
                                <input type="radio" name="score" />
                            </div>
                            <div className="radio-sl">
                                <label htmlFor="score">5</label>
                                <input type="radio" name="score" />
                            </div>
                        </div>
                    </div>
                    <div className="form-recipes">
                        <label htmlFor="image">Imagen</label>
                        <input type="text" name="image" placeholder="Anade la URL de la Imagen" />
                    </div>
                </div>
                </div>
                <div className="footer-btn">
                <button type="button" className="btn-login">
                    Enviar
                </button>
                </div>
            </div>
        );
    }
}

export default Recipe;