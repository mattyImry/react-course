import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
    {
        id: "P1",
        price: 8,
        title: "book",
        description: "The main book",
    },
    {
        id: "P2",
        price: 4,
        title: "pen",
        description: "The pen",
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
