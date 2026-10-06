import {Link} from "react-router-dom";
export default function Navbar({ cart }) {

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(cart);
    return (
        <nav>
            <Link to="/">Home</Link> 
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
    );
}