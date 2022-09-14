import { Product } from "../Model";
import "./DefaultLayout.scss";

interface Props {
  product: Product;
}

function HomePage(props: Props) {
  const { product } = props;
  return (
    <div className="productContainer">
      <div className="productImg">
        <img src={product.image} alt={product.id} />
      </div>
      <div className="productDetails">
        <div className="productName">{product.name}</div>
        <div className="productStocks">
          Còn {product.availableQuantity} sản phẩm
        </div>
        <div className="productPrices">
          <div className="productNormalPrice">
            {product.price.toLocaleString()}đ
          </div>
          <div className="productDiscount">
            <div className="productDiscountPrice">
              {(product.price / product.discountPercent).toLocaleString()}đ
            </div>
            <div className="productDiscountPercent">
              -{product.discountPercent}%
            </div>
          </div>
        </div>
      </div>

      <button>Thêm vào giỏ</button>
    </div>
  );
}

export default HomePage;
