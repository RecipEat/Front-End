import React, { Component } from "react";
import RecipEAT from './assets/img/RecipEAT.svg';
import "./css/styles.scss";


class Recipe extends Component {

    constructor(props){
        super(props)
        this.state = {
            nameRecipe: "",
            ingredient: "",
            time: "",
            ingredientsMeasure: "",
            description: "",
            instructions: "",
            listIngredients: [],
            listIngredientsMeasure: [],
            listInstructions: []
        }
        this.updateState = this.updateState.bind(this)
        this.addToList = this.addToList.bind(this)
        this.addToListMeasure = this.addToListMeasure.bind(this)
        this.addToInstructions = this.addToInstructions.bind(this)
        this.postData = this.postData.bind(this)
    }

    updateState (e) {
        const {name, value} = e.target
        this.setState({[name]: value})
        console.log(this.state)
    }

    addToList(e) {
        e.preventDefault()
        const newItem = this.state.ingredient
        if (newItem) {
            const newItems=[...this.state.listIngredients, newItem]
            this.setState({listIngredients: newItems})
        }
        this.setState({ingredient: ""})
        console.log(this.state.listIngredients)
    }

    addToListMeasure(e) {
        e.preventDefault()
        const newItem = this.state.ingredientsMeasure
        if (newItem) {
            const newItems=[...this.state.listIngredientsMeasure, newItem]
            this.setState({listIngredientsMeasure: newItems})
        }
        this.setState({ingredientsMeasure: ""})
        console.log(this.state.listIngredientsMeasure)
    }

    addToInstructions(e) {
        e.preventDefault()
        const newItem = this.state.instructions
        if (newItem) {
            const newItems=[...this.state.listInstructions, newItem]
            this.setState({listInstructions: newItems})
        }
        this.setState({instructions: ""})
        console.log(this.state.listInstructions)
    }

    postData (e) {
        const data = {
            name: this.state.nameRecipe,
            ingredients: this.state.listIngredients,
            time: this.state.time,
            ingredientsMeasure: this.state.listIngredientsMeasure,
            instructions: this.state.listInstructions
        }
        localStorage.setItem("recipeAdd", JSON.stringify(data))
    }

    render() {
        document.title = 'Agregar Receta';
        return (
            <div className="container-receta" ref={this.props.containerRef}>
                <div className="header">Agregar Recetas</div>
                <div className="content">
                <div className="logo-recipeat">
                    <img src={RecipEAT} />
                </div>
                <form
                    className="form-box-recipes"
                    onSubmit={this.postData}>
                    <div className="box-fields">
                        <div className="form-recipes">
                            <label htmlFor="nameRecipe">Nombre de la Receta</label>
                            <input
                                className="input-fields"
                                type="text"
                                name="nameRecipe"
                                placeholder="Nombre"
                                value={this.state.name}
                                onChange={this.updateState} />
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="ingredient">Ingredientes</label>
                            <p>
                                <input
                                    className="input-fields"
                                    type="text"
                                    name="ingredient"
                                    placeholder="Ingredientes"
                                    value={this.state.ingredient}
                                    onChange={this.updateState} />
                                <button onClick={this.addToList}>+</button>
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
                                placeholder="Tiempo de Preparacion"
                                value={this.state.time}
                                onChange={this.updateState} />
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
                                    value={this.state.ingredientsMeasure}
                                    onChange={this.updateState}
                                    />
                                <button onClick={this.addToListMeasure}>+</button>
                            </p>
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="description">Descripcion</label>
                            <input
                                className="input-fields"
                                type="text"
                                name="description"
                                placeholder="De que se trata el Plato"
                                value={this.state.description}
                                onChange={this.updateState}/>
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
                                    placeholder="Como prepararlo?"
                                    value={this.state.instructions}
                                    onChange={this.updateState} />
                                <button onClick={this.addToInstructions}>+</button>
                            </p>
                        </div>
                        <div className="form-recipes">
                            <label htmlFor="image">Imagen</label>
                            <input className="input-fields" type="text" name="image" placeholder="Anade la URL de la Imagen" />
                        </div>
                    </div>
                    <div className="btn-box-recipe">
                        <input type="submit" className="btn-login" value="Enviar"/>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Recipe;