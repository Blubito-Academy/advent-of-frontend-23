import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

interface ProductSearch {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
  total: number;
  skip: number;
  limit: number;
}

const AutocompleteSearch = () => {
  // sanitized search term hooked to the input field
  const [searchTerm, setSearchTerm] = useState("");

  // debounce the search input with a hook
  const debouncedSearchTerm = useDebounce(searchTerm);

  // fetch the data with a hook
  const { data, loading } = useFetch<ProductSearch>(
    `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`,
    debouncedSearchTerm.length > 2
  );

  // Removes whitespaces at the beginning and end before changing the state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value.replace(/^\s+|\s+$/g, "");
    setSearchTerm(inputText);
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type at least 3 characters"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #333",
          outline: "none",
          backgroundColor: "#333",
          color: "#fff",
          boxSizing: "border-box",
        }}
      />
      {loading && <Spinner />}
      {data?.products?.length ? (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#333",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            marginTop: "5px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {data.products.map((result) => (
            <div
              key={result.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #555",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              {result.title} | Price: {result.price}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AutocompleteSearch;
