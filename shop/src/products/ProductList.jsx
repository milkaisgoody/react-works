import products from "../datas/products";

const ProductList = () => {
    return(
        <div className="product-list">
            <h2>상품 리스트</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>가격: {product.price}</p>
                        <p>설명: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;