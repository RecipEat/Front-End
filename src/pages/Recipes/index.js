import React, { useState } from 'react';
import RecipesForm from '../../containers/RecipeForm';

const Recipes = () => {
  const [listIngredients, setListIngredients] = useState([]);
  const [listIngredientsMeasure, setListIngredientsMeasure] = useState([]);
  const [listInstructions, setListInstructions] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState({});
  const [time, setTime] = useState(0);
  const [ingredients_size, setIngredientsSize] = useState("");
  const [ingredients_measure, setIngredientsMeasure] = useState("");
  const [instructions, setInstructions] = useState({});
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e, _name) => {
    const { name, value } = e.target
    if (_name !== null) {
      this.setState({
        [name]: {
          text: e.target.value,
          key: Date.now()
        }
      })
    } else {
      this.setState({ [name]: e.target.value })
    }
  };

  const addToList = (e, list) => {
    e.preventDefault()
    // const newItem = this.state.ingredients;
    const name = eval("this.state." + list)
    let newItem
    if (list === "listIngredients") {
      newItem = ingredients
    } else if (list === "listIngredientsMeasure") {
      newItem = ingredients_measure
    } else if (list === "listInstructions") {
      newItem = instructions
    }
    if (newItem) {
      console.log(newItem)
      const newItems = [...name, newItem]
      if (list === "listIngredients") {
        setIngredients(newItems)
      } else if (list === "listIngredientsMeasure") {
        setListIngredientsMeasure(newItems);
      } else if (list === "listInstructions") {
        setListInstructions(newItems);
      }
    }
  }

  const deleteItem = (key, name) => {
    let filteredItems
    if (name === "listIngredients") {
      filteredItems = listIngredients.filter(item =>
        item.key !== key)
      setListIngredients(filteredItems);
    } else if (name === "listIngredientsMeasure") {
      filteredItems = listIngredientsMeasure.filter(item =>
        item.key !== key)
      setListIngredientsMeasure(filteredItems);
    } else if (name === "listInstructions") {
      filteredItems = listInstructions.filter(item =>
        item.key !== key);
      setListInstructions(filteredItems);
    }
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    alert('Recipe Added Successfully');
    const data = {
      usuario: "RecipEAT",
      titulo: title,
      ingredientes: listIngredients,
      tiempo: time,
      cantidad_ingredientes: ingredients_size,
      ingredientes_medidas: listIngredientsMeasure,
      descripcion: description,
      preparacion: listInstructions,
      imagen: image
    }
    fetch("https://sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(function (response) {
      console.log(response)
      return response.json();
    });
  }

  return (
    <RecipesForm
      handleChange={handleChange}
      addToList={addToList}
      deleteItem={deleteItem}
      handlePostSubmit={handlePostSubmit}
    />
  )
}

export default Recipes;