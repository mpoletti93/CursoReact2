import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import CircularProgress from '@mui/material/CircularProgress';
import { query, where, getDocs, collection, getFirestore } from "firebase/firestore";


const ItemDetailContainer = (props) => {
    const [object, setObject] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const { slug } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const filteredDocuments = getDocs(query(collection(db, "Productos"), where("slug", "==", slug)));

        filteredDocuments.then((resp) => {
            setObject(resp.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))[0]);
        })

        .catch ((rej) =>{
            setError (true);
        })
        .finally (() => setLoading(false));
    }, [slug]);
    
    return (
        <>
            {loading ? < CircularProgress color="primary"/> : <ItemDetail key={object.id} object={object} />}
            {error ? <h2>Error, intente nuevamente</h2> : null}
        </>
    )
}
export default ItemDetailContainer