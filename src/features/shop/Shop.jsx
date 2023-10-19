import { useState } from "react";
import "./Shop.css";

// eslint-disable-next-line
export const Shop = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const updatedCart = [...cart];

      if (cart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }

      setCart(updatedCart);
    }
  };

  return (
    <>
      <div className="shop">
        <ul className="product-list">
          {/* eslint-disable-next-line */}
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.username}</h3>
              <p>${product.price}</p>
              <button
                className="add"
                onClick={() => {
                  addToCart(product);
                }}
              >
                <span>+</span>
              </button>
            </li>
          ))}
        </ul>

        <div>
          <h2>Carrito</h2>
          <ul className="cart-list">
            {/* eslint-disable-next-line */}
            {cart
              .reduce(
                (acc, product) => {
                  const repeated = acc.find((item) => item.id === product.id);
                  if (repeated) {
                    repeated.quantity += 1;
                    return acc;
                  }
                  return [...acc, { ...product, quantity: 1 }];
                },

                []
              )
              .map((product) => (
                <li key={product.id}>
                  <p>({product.quantity})</p>
                  <h3>{product.username}</h3>
                  <p>
                    $
                    {product.quantity > 1
                      ? Math.round(product.price * product.quantity * 100) / 100
                      : product.price}
                  </p>
                  <button
                    className="remove"
                    onClick={() => {
                      removeFromCart(product);
                    }}
                  >
                    <span>🗑️</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
