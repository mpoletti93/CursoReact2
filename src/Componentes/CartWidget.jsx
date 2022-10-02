import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Badge } from '@mui/material';
import { cartContext } from "./CartContext";
import { useContext } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

const CartWidget = () =>  {
    const useCartContext = useContext(cartContext);
    const { prodsTotal } = useCartContext;
    
    return(
        <>
            <Badge badgeContent={prodsTotal} color="info">
            <MDBIcon className='ms-1' icon='cart-plus' size='3x' />
            </Badge>
        </>
    )
}
export default CartWidget
