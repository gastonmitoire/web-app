import { useState, useEffect } from "react";
import { Shop } from "./Shop";
import { fetchClient } from "../../utils/fetchClient";

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

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Shop products={products} />
    </>
  );
};
