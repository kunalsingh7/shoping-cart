import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="home">
            <h1>Welcome to My Shop</h1>

            <p>
                Find products you love and add them to your shopping cart.
            </p>

            <Link to="/shop">Start Shopping</Link>
        </main>
    );
}