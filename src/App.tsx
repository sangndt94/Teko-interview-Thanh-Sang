import React from "react";
import HomePage from "./Layout/HomePage";
import "./App.scss";
import { Product } from "./Model";

function App() {
  const mockup: Product[] = [
    {
      id: "sa1",
      name: 'Laptop Lenovo (14" 4GB/128GB SSD/Intel UHD)',
      image:
        "https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300",
      discountPercent: 10,
      availableQuantity: 3,
      price: 12000000,
    },
    {
      id: "sa2",
      name: "Apple Macbook Pro 16 inch Retina display",
      image:
        "https://lh3.googleusercontent.com/TsvY9ecw4JYAwF0Ez-M5h_xc1qtX2bwLS21Zc_CbKy_qgIB0OEkbSnEREiXqxZEgnaPCyhLvSh04q7Z1GQlRFeyh5sprWto=rw-w300",
      discountPercent: 20,
      availableQuantity: 10,
      price: 200000000,
    },
  ];
  return (
    <div className="app">
      <div className="mainProduct">
        <div className="mainProductImg">
          <img
            src="https://lh3.googleusercontent.com/TvxcE7fes0NtPyjDUqmvVlbdgj63tujZtJCroBtrrMXu1j-MC1Rns56ia6z2USjinoa5gp_GfbthX5BRThBHEdBXFbWXBQ4K=rw-w300"
            alt="Hello"
          />
        </div>

        <div className="mainProductDetails">
          <div className="mainProductPrice">
            <div className="mainProductNormalPrice">258.000đ</div>
            <div className="mainProductDiscount">
              <div className="mainProductDiscountPrice">120.000đ</div>
              <div className="mainProductDiscountPercent">-10%</div>
            </div>
          </div>

          <div className="mainProductName">
            Laptop ASUS VivoBook 14 A412FA-EK734T (14\" FHD/i5-10210U/8GB/512GB
            SSD/Intel UHD)
          </div>
          <div className="mainProductSeller">
            By <a href="#">XiaoMi</a>
          </div>
        </div>
      </div>
      <div className="products">
        <p>Sản phẩm liên quan</p>
        <div className="productsContainer">
          {mockup.map((item) => (
            <HomePage key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
