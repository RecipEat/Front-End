const BASE_URL = "https://sigueuwc04.execute-api.us-east-1.amazonaws.com/dev/item";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randoNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randoNumber(min, max));

async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();
    options.header = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
} 

const api = {
    recipes: {
        list() {
            return callApi('/recipes');
        },
        create(recipe) {
            return callApi(`/recipes`, {
                method: 'POST',
                body: JSON.stringify(recipe),
            });
        },
        read(recipeID) {
            return callApi(`/recipes/${recipeID}`);
        },
        update(recipeID, updates) {
            return callApi(`/recipes/${recipeID}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        remove(recipeID) {
            return callApi(`/recipes/${recipeID}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;