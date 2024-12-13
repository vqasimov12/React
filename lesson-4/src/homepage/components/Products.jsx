import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [searcTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const getProductData = async () => {
    try {
      const baseUrl = `http://localhost:3000/api/products?pageSize=${pageSize}`;
      const url = searcTerm ? baseUrl + `&searchTerm=${searcTerm}` : baseUrl;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [searcTerm, pageSize]);

  return (
    <>
      <SearchBar searcTerm={searcTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-3 gap-10 p-10">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
        <button
          onClick={() => {
            setPageSize((prevState) => prevState + 5);
          }}
          className="text-white w-fit col-span-3 justify-self-center bg-red-500 px-5 py-3"
        >
          View More
        </button>
      </div>
    </>
  );
};

export default Products;
