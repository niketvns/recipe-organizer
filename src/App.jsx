import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/recipe-detail/:id'} element={<RecipeDetailPage/>}/>
      </Routes>
    </>
  )
}

export default App
