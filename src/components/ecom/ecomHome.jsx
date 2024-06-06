import { useEffect, useState } from 'react';
import EcomProductCard from './productCard';
import Loader from '../loader';


const EcomHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        let jsonResponse = await response.json()
        setProducts(jsonResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product,i) => {
        return <EcomProductCard key={i} product={product} itemFrom={true}/>
})}
    </div>
  );
};

export default EcomHome;
