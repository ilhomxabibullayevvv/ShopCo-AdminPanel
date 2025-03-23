import { useEffect, useState } from 'react';
import axios from 'axios';
import TableTwo from '../../components/Tables/TableTwo';

const Product = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://e-commerce-api-v2.nt.azimumarov.uz/api/v1/products', {
          params: {
            page: 1,
            limit: 10
          }
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products', error)
      };
    }
    fetchProducts();
  }, []);


  return (
    <div>
      <h2>Products</h2>
      <TableTwo productData={products}/>
    </div>
  );
};

export default Product;
