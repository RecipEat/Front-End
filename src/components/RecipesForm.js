import React, { Component } from "react";
import RecipEAT from '../assets/img/RecipEAT.svg';
import "../css/styles.scss";


export default class RecipesForm extends Component{

    render (){
        return (
            <div className="container-receta" ref={this.props.containerRef}>
                <div className="header">Agregar Recetas</div>
                <div className="content">
                    <div className="logo-recipeat">
                        <img src={RecipEAT} />
                    </div>
                    <form className="form-box-recipes" onSubmit={this.props.onSubmit}>
                        <div className="box-fields">
                            <div className="form-recipes">
                                <label htmlFor="titulo">Nombre de la Receta</label>
                                <input className="input-fields" type="text" 
                                name="title" 
                                value={this.props.title} 
                                onChange={this.props.onChange} placeholder="Nombre" />
                            </div>
                            <div className="form-recipes">
                                <label htmlFor="ingredientes">Ingredientes</label>
                                <p> 
                                    <input className="input-fields" type="text" 
                                    name="ingredients" 
                                    value={this.props.ingredients} 
                                    onChange={this.props.onChange} 
                                    placeholder="Ingredientes" />
                                    <button onClick={this.props.addToList}>+</button>
                                </p>
                            </div>
                        </div>
                        <div className="box-fields">
                            <div className="form-recipes">
                                <label htmlFor="time">Time</label>
                                <input className="input-fields" type="text" name="time" 
                                value={this.props.time} 
                                onChange={this.props.onChange} 
                                placeholder="Tiempo de Preparacion" />
                            </div>
                            <div className="form-recipes">
                                <label htmlFor="ingredienstsize">Cantidad de Ingredientes</label>
                                <input className="input-fields" type="number" 
                                name="ingredients_size" 
                                value={this.props.ingredients_size} 
                                onChange={this.props.onChange} 
                                placeholder="Cantidad de Ingredientes" />
                            </div>
                        </div>
                        <div className="box-fields">
                            <div className="form-recipes">
                                <label htmlFor="measure">Ingredientes Medidas</label>
                                <p>
                                    <input className="input-fields" type="text" 
                                    name="ingredients_measure" 
                                    value={this.props.ingredients_measure} 
                                    onChange={this.props.onChange} 
                                    placeholder="Medidas de Ingredientes" />
                                    <button onClick={this.props.addToListMeasure}>+</button>
                                </p>
                            </div>
                            <div className="form-recipes">
                                <label htmlFor="description">Descripcion</label>
                                <input className="input-fields" type="text" 
                                name="description" 
                                value={this.props.description} 
                                onChange={this.props.onChange} 
                                placeholder="De que se trata el Plato" />
                            </div>
                        </div>
                        <div className="box-fields">
                            <div className="form-recipes">
                                <label htmlFor="preparation">Preparacion</label>
                                <p>
                                    <textarea type="text" name="instruction" 
                                    value={this.props.instruction} 
                                    onChange={this.props.onChange} 
                                    placeholder="Como prepararlo?" />
                                    <button onClick={this.props.addToInstructions}>+</button>
                                </p>
                            </div>
                            <div className="form-recipes">
                                <label htmlFor="image">Imagen</label>
                                <input className="input-fields" type="text" 
                                name="image" 
                                value={this.props.image} 
                                onChange={this.props.onChange} 
                                placeholder="Anade la URL de la Imagen" />
                            </div>
                        </div>
                        <div className="btn-box-recipe">
                            <button type="submit" className="btn-login"> Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
    )}
}