import ItemList from "./ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { query, where, getDocs, collection, getFirestore  } from "firebase/firestore";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const { categoria } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
      if (categoria !== undefined) {
        const filteredDocuments = getDocs(query(collection(db, "Productos"), where("categoria", "==", categoria)));
        filteredDocuments.then((resp) => {
            setProducts(resp.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })));
        })
        
        .catch ((rej) => {
        setError (true);
        })
        
        .finally (() => { 
        setLoading(false);
        })
        
    } else {
        const documents = getDocs(collection(db, "Productos"));
        documents.then((resp) => {
            setProducts(resp.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })));
        })
        
        .catch ((rej) => {

        setError (true);
        })
        
        .finally (() => {
        setLoading(false);
        })
    }
}, [categoria])
    
    return (
        <>
        {loading ? < CircularProgress color="inherit"/> : <ItemList products={products}/>}
        {error ? <h2>Error, intente nuevamente</h2> : null}
        </>
    )
}
export default ItemListContainer