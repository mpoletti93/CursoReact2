/*
import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    const restarCantidad = () => {
        setCount(previousCount => previousCount - 1);
    }
    const sumarCantidad = () => {
        setCount(previousCount => previousCount + 1);
    }
const agregarProducto = () => {
        if (props.stock < count) {
        } else {
            agregar();
        }
    }
    const agregar = () => {
    }
    return (
        <>
            <div className="contador">
                <button onClick={restarCantidad} disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={sumarCantidad} disabled={count === props.stock}>+</button>
            </div>   
            <button className="productBtn" onClick={agregarProducto} disabled={count === 0}>Comprar</button>
        </>
    )
}
export default ItemCount;
*/

import { useState } from "react";
const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const restarCantidad = () => {
        setCount(previousCount => previousCount - 1);
    }
    const sumarCantidad = () => {
        setCount(previousCount => previousCount + 1);
    }
    const addToCart = () => {
        props.onAdd(count);
    }
    
    return (
            <div className="card">
                <button className="Btn" onClick={sumarCantidad} disabled={count === props.stock}>+</button>
                <p className="card-text">{count}</p>
                <button className="Btn" onClick={restarCantidad} disabled={count === 0}>-</button>
                <button className="Btn" onClick={addToCart} disabled={count === 0}>Agregar al carrito</button>
            </div> 
    )
}
export default ItemCount; 