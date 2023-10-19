import { useState, useEffect } from "react";
import { Shop } from "./Shop";
import { fetchClient } from "../../utils/fetchClient";
import jwt from "jwt-decode";

export const ShopWrapper = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetchClient("getProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await response;
    setProducts(data);
  };

  const handleConfirmCart = async (cart) => {
    const response = await fetchClient("checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: {
        userId: jwt(localStorage.getItem("accessToken")).sub,
        products: cart,
      },
    });
    const data = await response;
    alert(data.message);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Shop products={products} handleConfirmCart={handleConfirmCart} />
    </>
  );
};
