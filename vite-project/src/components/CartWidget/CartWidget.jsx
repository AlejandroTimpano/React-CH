import { useContext } from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className='text-white text-3xl cursor-pointer flex gap-1'>
            <FaShoppingBag />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget