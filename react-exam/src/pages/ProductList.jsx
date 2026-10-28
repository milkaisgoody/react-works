
import { products } from "../datas/products";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  return (
    <main>
      <h2>상품 목록</h2>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductList;
