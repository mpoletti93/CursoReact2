import { useContext } from 'react';
import { cartContext } from "./CartContext";

const CartItem = (props) => {
    const useCartContext = useContext(cartContext);
    const { deleteFromCart } = useCartContext;
    
    return (
        <div key={props.item.product.id} id="containerProdsCarrito" className="dropShadow">
            <div className="prodsCarrito">
                <img alt="" className="imgProd" src={props.item.product.img} />
                <span><p>{props.item.product.nombre}</p></span>
                <span><p>${props.item.product.precio} x {props.item.count} unidades</p></span>
                <button onClick={() => deleteFromCart(props.item.product)} >Eliminar producto</button>
            </div>

        </div>
    )
}
export default CartItem