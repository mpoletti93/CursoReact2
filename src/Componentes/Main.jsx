import React   from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailsContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import { Routes, Route} from "react-router-dom";

const Main = (props) => {
    return (
    <main className="container">      
        <br/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route  path="/item/:slug" element={<ItemDetailsContainer/>}/>
        </Routes>
    </main>
    )
}

export default Main