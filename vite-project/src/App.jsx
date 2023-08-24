import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (

      <CartProvider>

        <BrowserRouter>
            <Header />        

            <Routes>
              <Route path="/" element={ <ItemListContainer /> }/>
              <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
              <Route path="/contacto" element={ <Contacto /> }/>
              <Route path="/cart" element={ <CartView /> }/>
              <Route path="/checkout" element={ <Checkout /> }/>
              <Route path="*" element={ <Navigate to="/"/> }/>
            </Routes>
            
        

            <Footer />
        </BrowserRouter>

      </CartProvider>


  )
}

export default App
