export default function Cart({ cart, removeFromCart, updateQuantity }) {
    const cartIsEmpty = cart.length === 0;
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    return (
        <>
            <h1>Cart Page</h1>
            {
                cartIsEmpty 
                ?   (
                        <p>Your cart is empty.</p>
                    ) 
                :   (
                        <div>
                            <ul className="cart-list">
                                {cart.map((item) => (
                                    <li key={item.id} className="cart-item">
                                        <img src={item.thumbnail} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                       <div className="cart-quantity">
                                            <button
                                                onClick={() => {
                                                    if (item.quantity > 1) {
                                                        updateQuantity(item.id, item.quantity - 1);
                                                    }
                                                }}
                                            >
                                                -
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                            <br />
                            <h2 className = "cart-total">
                                Total: ${totalPrice}
                            </h2>
                        </div>
                    )
            }
            
        </>
    );
}