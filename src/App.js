import NavBar from "./Componentes/NavBar";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Componentes/CartContext";

function App () {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Main greeting="TuVinito" />
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App