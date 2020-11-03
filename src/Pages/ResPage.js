import React, {useEffect, useState, Component} from 'react';
/*import ReactPaginate from 'react-paginate';*/
import PopOutCard from "../components/PopOutCard"
import { CardDeck } from 'react-bootstrap';
import QueueItems from "../components/QueueComponent"
import axios from "axios"
import "../css/myResultPage.css";



export default function ResPage() {
    document.title = 'Search';
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
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item/search?search=${query}`)
        //const res = await axios.get(`https://cors-anywhere.herokuapp.com/sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item`)
        // const response = await axios.get(`https://sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item/search?search=${query}`, Headers={'Access-Control-Allow-Origin':'request-originating server addresses'})
        setRecipes(res.data)
        console.log(res.data)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
        if (search === "" && listItems.length > 0) {
            setQuery(listItems.join(" "))
        }
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

    function toCamelCase(str) {
        return str
            .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
    }

    function funPreparacion(preparacion) {
        const list = []
        preparacion.map((item, index) => {
            const obj ={
                text: item,
                key: index,
                completed: false
            }
            return list.push(obj)
        })
        return list
    }

    return (
        <div className="myRpage">
            <div className="formDiv">
                <div className="container form-container">
                    <form
                        className="form-inline"
                        onSubmit={getSearch}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Search recipe"
                                    autoComplete="off"
                                    className="form-control"
                                    onChange={updateSearch}
                                    value={search}/>
                                    <button
                                        onClick={addItem}
                                        className="addButton"
                                >+</button>
                            </div>  
                            <div className="form-group">
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="search"/>
                            </div>
                    </form>
                    <div>
                        <QueueItems
                        items={listItems}
                        deleteItem={deleteItem}
                        setUpdate={setUpdate}
                        />
                    </div>
                </div>
                <div className="container">
                    <CardDeck className="myCardDeck">
                        {recipes.map((item) =>
                            <PopOutCard
                            key = {item.data.id}
                            label = {toCamelCase(item.data.titulo)}
                            image = {item.data.imagen}
                            totalTime = {item.data.tiempo}
                            source = {item.data.usuario}
                            ingredients= {item.data.ingredientes_medidas}
                            description= {item.data.descripcion}
                            instructions= {funPreparacion(item.data.preparacion)}
                            saveData = {saveData}
                        />)}
                    </CardDeck>
                </div>
            </div>
        </div>
    )
}