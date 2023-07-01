import {createContext, useContext, useState, useEffect} from "react";
import {recipes} from '../db/recipes.js'
import {v4 as uuid} from "uuid";

const recipeContext = createContext()

const RecipeProvider = ({children}) => {
    const [inputData, setInputData] = useState({
        recipeName: '',
        ingredients: [],
        cookingInstructions: [],
        cuisineType: '',
        mediaUrl: ''
    })
    const [allRecipes, setAllRecipes] = useState(recipes);

    useEffect(()=>{
        localStorage.setItem('allRecipe', JSON.stringify(allRecipes))
    }, [allRecipes])

    useEffect(()=>{
        setAllRecipes(JSON.parse(localStorage.getItem('allRecipe')))
    }, [])

    const inputChangeHandler = (e) => {
        const {name, value} = e.target
        if(name === 'ingredients' || name === 'cookingInstructions'){
            setInputData(prevState => ({...prevState, [name]: value}))
        }else{
            setInputData(prevState => ({...prevState, [name]: value}))
        }
    }

    const recipeDetails = (id) => {
        return allRecipes.find(recipe => recipe.id === id)
    }

    const addRecipe = (recipe) => {
        setAllRecipes(prevState => [...prevState, {id: uuid(), ...recipe}])
    }

    const deleteRecipe = (recipeId) => {
        setAllRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId))
    }

    return(
        <recipeContext.Provider value={{allRecipes, recipeDetails, inputChangeHandler, addRecipe, inputData, setInputData, deleteRecipe}}>
            {children}
        </recipeContext.Provider>
    )
}

const useGlobalRecipe = () => useContext(recipeContext)

export {RecipeProvider, useGlobalRecipe}