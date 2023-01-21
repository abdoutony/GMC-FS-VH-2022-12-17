import './App.css'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import SingleProduct from './pages/SingleProduct'
import Cart from './components/Cart'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <HomePage/>
          </>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
