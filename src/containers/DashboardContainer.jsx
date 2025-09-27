import React from 'react';
import { useGetProductsListQuery } from '../store/ApiCalls/dashboardApis';
import Loader from '../components/commonComponents/Loader';

const DashboardContainer = () => {
  const { data: products, error, isLoading } = useGetProductsListQuery();

  if (isLoading) return <Loader />;
  if (error) return <p>Error fetching products</p>;

  return (
    <div style={{ padding: '2rem', backgroundColor:"red"}}>
      <h2>Products List</h2>
      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ height: '150px', objectFit: 'contain' }}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Discounted: ${product.discountedPrice}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DashboardContainer;
