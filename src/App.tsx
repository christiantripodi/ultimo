import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import Article from './components/Article'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <CustomNavbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Article/>}/>

    </Routes>
    </div>
  </BrowserRouter>
);

}

export default App
