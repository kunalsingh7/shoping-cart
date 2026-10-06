import {useState, useEffect} from "react";
import ProductCard from "../components/ProductCard";
export default function Shop({addToCart}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setError("Unable to load products. Please try again.");
                setLoading(false);
            });
    }, []);

    if (error) {
    return (
        <main>
            <h1>Shop Page</h1>
            <p className="error">{error}</p>
        </main>
    );
}
        if (loading) {
            return (
                <main>   
                    <h1>Shop Page</h1>
                    <p className="loading">Loading products...</p>
                </main>
                );
           
        }
    return (
        <main >
            <h1>Shop Page</h1>
            <div className="products-grid">
                 {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))
            }
            </div>
           

        </main>
    );
}