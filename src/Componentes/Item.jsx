import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="cardProductos">
            <img className="imgCard" src= {props.img} alt=""/>
            <p className="nameCard"> {props.nombre}</p><br/>
            <p className="priceCard">  {"$" + props.precio}</p><br/>
            <div>
                <Link to={/item/ + props.slug}><button className="Btn" variant="contained">Más Detalles</button></Link>
            </div>
        </div>
    )
}
export default Item