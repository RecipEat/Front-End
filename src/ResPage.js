import React, { useEffect, useState } from 'react';
/*import ReactPaginate from 'react-paginate';*/
import PopOutCard from "./components/PopOutCard"
import { CardDeck } from 'react-bootstrap';
import QueueItems from "./components/QueueComponent"
import axios from "axios"
import "./css/myResultPage.css";


export default function ResPage() {
    const APP_ID = "a2799540"
    const APP_KEY = "f7e5e87ff82ab6a8b20afe314169bdde"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const [listItems, setList] = useState([])


    useEffect(() => {
        const savedData = localStorage.getItem('query')
        if (savedData) {
            setQuery(JSON.parse(savedData))
        }
    }, [])

    useEffect(() => {
        getRecipes()
        window.scrollTo(0, 0)
        localStorage.setItem('query', JSON.stringify(query))
    }, [query])

    const getRecipes = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${10}`)
        setRecipes(response.data.hits)
        console.log(response.data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
        saveData("ingredientList", listItems)
        setList([])
    }

    const saveData = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data))
    }

    const addItem = e => {
        e.preventDefault()
        const newItem = search
        if (newItem) {
            const newItems=[...listItems, newItem]
            setList(newItems)
        }
        setSearch("")
    }
    const deleteItem = (key) => {
        const filteredItems = listItems.filter(item =>
            item !== key)
            setList(filteredItems)
    }

    const setUpdate = (text, key) => {
        const items = listItems
        items.map((item) => {
            if (item.index === key) {
                item.item = text
            }
            setList(items)
        })
    }

    return (
        <div className="myRpage">
            <div className="formDiv">
                    <form
                        className="search-form"
                        onSubmit={getSearch}
                        >
                            <input
                                type="text"
                                placeholder="Search recipe"
                                autoComplete="off"
                                onChange={updateSearch}
                                value={search}
                                />
                            <button
                                onClick={addItem}
                                className="addButton"
                            >Add</button>
                            <input
                                type="submit"
                                value="search"/>
                    </form>
                    <div>
                        <QueueItems
                        items={listItems}
                        deleteItem={deleteItem}
                        setUpdate={setUpdate}
                        />
                    </div>
            </div>
            <CardDeck className="myCardDeck">
                {recipes.map((item, index) =>
                    <PopOutCard
                    key = {index}
                    label = {item.recipe.label}
                    image = {item.recipe.image}
                    totalTime = {item.recipe.totalTime}
                    source = {item.recipe.source}
                    ingredients= {item.recipe.ingredientLines}
                    saveData = {saveData}
                />)}
            </CardDeck>
        </div>
    )
}