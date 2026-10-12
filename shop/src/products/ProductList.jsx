import products from "../datas/products";
import { Link } from "react-router-dom";

const ProductList = () => {
    return(
        <div className="product-list">
            <h2>상품 리스트</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>상품명</th><th>가격</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </td>
                                <td>{product.price}</td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    )
}

export default ProductList;