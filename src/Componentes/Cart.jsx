import CartContainer from "./CartContainer";
import { cartContext } from "./CartContext";
import { useContext } from 'react';
import { Link } from "react-router-dom"

const Cart = () => {
    const useCartContext = useContext(cartContext);
    const { carrito } = useCartContext;
    
    return (
        <div id="seccionCarrito">
            {carrito.length === 0
                ? <Link to="/"><button className="Btn">El carrito está vacío: haga click para volver a la tienda</button></Link>
                : <CartContainer carrito={carrito} />
            }
        </div>
    )
}
export default Cart