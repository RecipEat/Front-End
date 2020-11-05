import React, { Component } from "react";
// import RecipesForm from './RecipesForm'
import RecipEAT from '../assets/img/RecipEAT.svg';
import api from "../api";

import "../css/styles.scss";

function QueueItems (props) {
    const trash = "https://www.flaticon.com/svg/static/icons/svg/753/753345.svg"
    const items = props.items

    const listItems = items.map((item) => {
        return <div className="addRecipe" key={item.key}>
            <p>
                {/* <input
                    type="text"
                    id={item.key}
                    value={item}
                    onChange={(e) => props.setUpdate(e.target.value, item.key)}
                /> */}
                {item.text}
                <img
                    onClick={() => props.deleteItem(item.key, props.name)}
                    src={trash}
                    alt=""/>
            </p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

class NewRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            listIngredients: [],
            listIngredientsMeasure: [],
            listInstructions: [],
            title: "",
            ingredients: {text: "", key: ""},
            time: "",
            ingredients_size: "",
            ingredients_measure: {text: "", key: ""},
            description: "",
            instruction: {text: "", key: ""},
            image: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.addToList = this.addToList.bind(this)
        this.handlePostSubmit = this.handlePostSubmit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    };

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: {
                text: e.target.value,
                key: Date.now()
            }
        })
    };

    addToList(e, list) {
        e.preventDefault()
        // const newItem = this.state.ingredients;
        const name = eval("this.state." + list)
        let newItem
        if (list === "listIngredients") {
            newItem = this.state.ingredients
        } else if (list === "listIngredientsMeasure") {
            newItem = this.state.ingredients_measure
        } else if (list === "listInstructions") {
            newItem = this.state.instruction
        }
        if (newItem) {
            console.log(newItem)
            const newItems=[...name, newItem]
            if (list === "listIngredients") {
                this.setState({
                    listIngredients : newItems,
                    ingredients: {
                        text: "",
                        key: ""
                    }
                })
            } else if (list === "listIngredientsMeasure") {
                this.setState({
                    listIngredientsMeasure: newItems,
                    ingredients_measure: {
                        text: "",
                        key: ""
                    }
                })
            } else if (list === "listInstructions") {
                this.setState({
                    listInstructions: newItems,
                    instruction: {
                        text: "",
                        key: ""
                    }
                })
            }
        }
    }

    deleteItem = (key, name) => {
        let filteredItems
        if (name === "listIngredients") {
            filteredItems = this.state.listIngredients.filter(item =>
                item.key !== key)
                this.setState({listIngredients : filteredItems})
        } else if (name === "listIngredientsMeasure") {
            filteredItems = this.state.listIngredientsMeasure.filter(item =>
                item.key !== key)
                this.setState({listIngredientsMeasure : filteredItems})
        } else if (name === "listInstructions"){
            filteredItems = this.state.listInstructions.filter(item =>
                item.key !== key)
                this.setState({listInstructions : filteredItems})
        }
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
                                        value={this.state.ingredients.text} 
                                        onChange={this.handleChange} 
                                        placeholder="Ingredientes" />
                                        <button 
                                            onClick={(e) => this.addToList(e, "listIngredients")}>
                                        +</button>
                                    </div>
                                    <div>
                                    <QueueItems
                                        items={this.state.listIngredients}
                                        deleteItem={this.deleteItem}
                                        name="listIngredients"
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
                                        value={this.state.ingredients_measure.text} 
                                        onChange={this.handleChange} 
                                        placeholder="Medidas de Ingredientes" />
                                        <button onClick={(e) => this.addToList(e, "listIngredientsMeasure")}>+</button>
                                    </div>
                                    <div className="queueItem">
                                        <QueueItems
                                            items={this.state.listIngredientsMeasure}
                                            deleteItem={this.deleteItem}
                                            name="listIngredientsMeasure"
                                            />
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
                                        value={this.state.instruction.text} 
                                        onChange={this.handleChange} 
                                        placeholder="Como prepararlo?" />
                                        <button onClick={(e) => this.addToList(e, "listInstructions")}>+</button>
                                    </div>
                                    <div>
                                        <QueueItems
                                            items={this.state.listInstructions}
                                            deleteItem={this.deleteItem}
                                            name="listInstructions"
                                            />
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