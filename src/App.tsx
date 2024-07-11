import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <CustomNavbar />
      <Routes>
      <Route path="/" element={<Home/>}/>

    </Routes>
    </div>
  </BrowserRouter>
);

}

export default App
