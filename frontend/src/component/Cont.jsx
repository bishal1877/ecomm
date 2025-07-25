import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card.jsx';
import Spinner from 'react-bootstrap/Spinner';

function Cont() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://ecomm-3bxr.onrender.com");
        console.log('Fetched products:', response.data); // Log the fetched data
        setProducts(response.data); // Axios puts the actual data in .data
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  },[]); // The empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>
 <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 return (
    <div className="product-list"  style={{height:"88vh" ,  display:"grid",   gridTemplateColumns:"repeat(auto-fit,minmax(0px,18rem))",gap:"15px",padding:"0px"}} >
      {products.bata.filter(
        (item)=>{
        return (item.image!="NA")
        }
      ) .map((item) => (
       <Card key={item.id } name={item.name} price={item.price} image={item.image} id={item.id}  /> // Add a unique key
      ))}
    </div>
  );
}

export default Cont;
