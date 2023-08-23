import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>The Products Page</h1>
            <p>Product descritpion: {params.productId}</p>
        </>
    );
}

export default ProductDetailPage;
