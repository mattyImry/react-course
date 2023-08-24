import { Link } from "react-router-dom";

const PRODUCTS = [
    {
        id: "p1",
        tittle: "product 1",
    },
    {
        id: "p2",
        tittle: "product 2",
    },
    {
        id: "p3",
        tittle: "product 3",
    },
];

function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                {PRODUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={prod.id}>{prod.tittle}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products;
