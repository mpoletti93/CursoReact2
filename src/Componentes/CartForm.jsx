import { cartContext } from "./CartContext";
import { collection, addDoc, serverTimestamp,getFirestore } from "firebase/firestore";
import { useContext, useState } from 'react';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';


const CartCheckoutForm = (props) => {
    const useCartContext = useContext(cartContext);
    const { clear, precioTotal, prodsTotal, cartCheckout } = useCartContext;
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [telefono, setTelefono] = useState("");

const db = getFirestore();

    const handleCheckout = () => {
        const newOrder = {
            comprador: {
                nombre: nombre,
                telefono: telefono,
                email: email
            },
            items: props.carrito,
            date: serverTimestamp(),
            total: precioTotal
        }
        const ordersCollection = collection(db, "orders");
        const order = addDoc(ordersCollection, newOrder);
        order.then((res) => {
            const orderId = res.id;
            cartCheckout(orderId);
        });
    }

    const handleNameChange = (e) => {
        setNombre(e.target.value);

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleEmailConfChange = (e) => {
        setEmailConf(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setTelefono(e.target.value);
    }

    return (
        <>
            <h2 className="h2Form">Verificar información:</h2>
            <TextField className="itemForm"  required variant="filled" label="Nombre Completo" onChange={handleNameChange} value={nombre} />
            <TextField className="itemForm"  required variant="filled" label="Numero de telefono" onChange={handlePhoneChange} value={telefono} />
            <TextField className="itemForm" required variant="filled" label="Correo electronico" onChange={handleEmailChange} value={email} />
            <TextField className="itemForm"  required variant="filled" label="Confirmar correo electronico" onChange={handleEmailConfChange} value={emailConf} />
            <div className="dropShadow">
                <div className="textoForm">
                    <h3 className="h3Form">Total: ${precioTotal} </h3>
                    <h3 className="h3Form">Total Productos: {prodsTotal}</h3>
                </div>
                <div className="containerBtnForm">
                    <Button className="btnForm" onClick={handleCheckout} variant="contained"  color="success"> Finalizar Compra</Button>
                    <Button className="btnForm" onClick={clear} variant="contained" color="error">Vaciar carrito</Button>
                </div>
            </div>
        </>
    )
}
export default CartCheckoutForm