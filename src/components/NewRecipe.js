import React, { Component } from "react";
// import RecipesForm from './RecipesForm'
import RecipEAT from '../assets/img/RecipEAT.svg';
import api from "../api";
import QueueItems from './QueueComponent'

import "../css/styles.scss";


class NewRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            ingredients: "",
            time: "",
            ingredients_size: "",
            ingredients_measure: "",
            description: "",
            instruction: "",
            image: "",
            listIngredients: [],
            listIngredientsMeasure: [],
            listInstructions: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.addToList = this.addToList.bind(this)
        this.addToListMeasure = this.addToListMeasure.bind(this)
        this.addToInstructions = this.addToInstructions.bind(this)
        this.handlePostSubmit = this.handlePostSubmit.bind(this)
        // this.deleteItem = this.deleteItem.bind(this)
        this.setKeys = this.setKeys.bind(this)
    };

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
        console.log(this.state)
    };

    addToList(e) {
        e.preventDefault()
        const newItem = this.state.ingredients;
        if (newItem) {
            const newItems=[...this.state.listIngredients, newItem];
            this.setState({listIngredients: newItems});
        }
        this.setState({ingredients: ""});
        console.log(this.state.listIngredients);
    }

    addToListMeasure(e) {
        e.preventDefault()
        const newItem = this.state.ingredients_measure;
        if (newItem) {
            const newItems=[...this.state.listIngredientsMeasure, newItem];
            this.setState({listIngredientsMeasure: newItems});
        }
        this.setState({ingredients_measure: ""});
        console.log(this.state.listIngredientsMeasure);
    }

    addToInstructions(e) {
        e.preventDefault()
        const newItem = this.state.instruction;
        if (newItem) {
            const newItems=[...this.state.listInstructions, newItem]
            this.setState({listInstructions: newItems})
        }
        this.setState({instruction: ""})
        console.log(this.state.listInstructions)
    }

    // deleteItem = (key, list) => {
    //     const filteredItems = list.filter(item =>
    //         item !== key)
    //         setList(filteredItems)
    // }

    setKeys(array){
        const list = []
        array.map((item, index) => {
            const obj ={
                text: item,
                key: index,
            }
            return list.push(obj)
        })
        return list
    }

    handlePostSubmit = async (e) => {
        e.preventDefault();
        alert('Recipe Added Successfully');
        const data = {
            usuario: "RecipEAT",
            titulo: this.state.title,
            ingredientes: this.state.listIngredients,
            tiempo: this.state.time,
            cantidad_ingredientes: this.ingredients_size,
            ingredientes_medidas: this.state.listIngredientsMeasure,
            descripcion: this.state.description,
            preparacion: this.state.listInstructions,
            imagen: this.state.image
        }
        fetch("https://sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item", {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
    }
    //     this.setState({ loading: true, error: null });
    //     try {
    //         await  fetch("https://sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item", {
    //                 method: 'POST',
    //                 body: JSON.stringify(data)
    //             }).then(function(response) {
    //                 console.log(response)
    //                 return response.json();
    //             });
    //         this.setState({ loading: false });
    //     } catch (error) {
    //         this.setState({ loading: false, error: error})
    //     }
    // }

    render() {
        document.title = 'Agregar Receta';
        return (
            <React.Fragment>
                {/* <RecipesForm 
                onSubmit={this.handlePostSubmit}
                onChange={this.handleChange} 
                title={this.state.title}
                ingredients={this.state.ingredients}
                addToList={this.addToList}
                time={this.state.time}
                ingredients_size={this.state.ingredients_size}
                ingredients_measure={this.state.ingredients_measure}
                addToListMeasure={this.addToListMeasure}
                description={this.state.description}
                instruction={this.state.instruction}
                addToInstructions={this.addToInstructions}
                image={this.state.image} */}
                
                <div className="container-receta" ref={this.props.containerRef}>
                    <div className="header">Agregar Recetas</div>
                    <div className="content">
                        <div className="logo-recipeat">
                            <img src={RecipEAT} />
                        </div>
                        <form className="form-box-recipes" onSubmit={this.handlePostSubmit}>
                            <div className="box-fields">
                                <div className="form-recipes">
                                    <label htmlFor="titulo">Nombre de la Receta</label>
                                    <input className="input-fields" type="text" 
                                    name="title" 
                                    value={this.state.title} 
                                    onChange={this.handleChange} placeholder="Nombre" />
                                </div>
                                <div className="form-recipes">
                                    <label htmlFor="ingredientes">Ingredientes</label>
                                    <div className="btn-box-list"> 
                                        <input className="input-fields" type="text" 
                                        name="ingredients" 
                                        value={this.state.ingredients} 
                                        onChange={this.handleChange} 
                                        placeholder="Ingredientes" />
                                        <button onClick={this.addToList}>+</button>
                                    </div>
                                    <div>
                                    <QueueItems
                                        items={this.setKeys(this.state.listIngredients)}
                                        deleteItem={this.deleteItem}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="box-fields">
                                <div className="form-recipes">
                                    <label htmlFor="time">Time</label>
                                    <input className="input-fields" type="text" name="time" 
                                    value={this.time} 
                                    onChange={this.handleChange} 
                                    placeholder="Tiempo de Preparacion" />
                                </div>
                                <div className="form-recipes">
                                    <label htmlFor="ingredienstsize">Cantidad de Ingredientes</label>
                                    <input className="input-fields" type="number" 
                                    name="ingredients_size" 
                                    value={this.state.ingredients_size} 
                                    onChange={this.handleChange} 
                                    placeholder="Cantidad de Ingredientes" />
                                </div>
                            </div>
                            <div className="box-fields">
                                <div className="form-recipes">
                                    <label htmlFor="measure">Ingredientes Medidas</label>
                                    <div className="btn-box-list">
                                        <input className="input-fields" type="text" 
                                        name="ingredients_measure" 
                                        value={this.state.ingredients_measure} 
                                        onChange={this.handleChange} 
                                        placeholder="Medidas de Ingredientes" />
                                        <button onClick={this.addToListMeasure}>+</button>
                                    </div>
                                </div>
                                <div className="form-recipes">
                                    <label htmlFor="description">Descripcion</label>
                                    <input className="input-fields" type="text" 
                                    name="description" 
                                    value={this.state.description} 
                                    onChange={this.handleChange} 
                                    placeholder="De que se trata el Plato" />
                                </div>
                            </div>
                            <div className="box-fields">
                                <div className="form-recipes">
                                    <label htmlFor="preparation">Preparacion</label>
                                    <div className="btn-box-list">
                                        <textarea type="text" name="instruction" 
                                        value={this.state.instruction} 
                                        onChange={this.handleChange} 
                                        placeholder="Como prepararlo?" />
                                        <button onClick={this.addToInstructions}>+</button>
                                    </div>
                                </div>
                                <div className="form-recipes">
                                    <label htmlFor="image">Imagen</label>
                                    <input className="input-fields" type="text" 
                                    name="image" 
                                    value={this.state.image} 
                                    onChange={this.handleChange} 
                                    placeholder="Anade la URL de la Imagen" />
                                </div>
                            </div>
                            <div className="btn-box-recipe">
                                <button type="submit" className="btn-login"> Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewRecipe;