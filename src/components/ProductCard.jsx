import {useState} from "react";
export default function ProductCard({ product, addToCart }) {

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
                <button onClick = {decreaseQuantity} >-</button>
                <input type = 'number'
                    min="1"
                    step="1"
                    value={quantity}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value >= 1) {
                            setQuantity(value);
                        }
                    }}  
                />
                <button onClick = {increaseQuantity} >+</button>
            </div>
            <button className="add-to-cart" onClick = {() => addToCart(product, quantity)} >Add to Cart</button>
        </div>
    );
}