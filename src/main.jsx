import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RecipeProvider} from "./contexts/recipeContext.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <RecipeProvider>
                <App/>
            </RecipeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
