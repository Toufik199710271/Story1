import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div>
      <h2>قائمة المنتجات</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>السعر: {product.price} دج</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
