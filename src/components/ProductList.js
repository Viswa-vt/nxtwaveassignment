import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterSection = styled.div`
  width: 250px;
  padding-right: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Header>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.</p>
      </Header>

      <div style={{ display: 'flex' }}>
        <FilterSection>
          <h3>IDEAL FOR</h3>
          <ul>
            <li>All</li>
          </ul>

          <h3>OCCASION</h3>
          <ul>
            <li>All</li>
          </ul>

          <h3>WORK</h3>
          <ul>
            <li>All</li>
          </ul>

          {/* Add more filter sections */}
        </FilterSection>

        <ProductGrid>
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map(product => (
              <ProductCard key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Sign in or Create an account to see pricing</p>
                <button>♡</button>
              </ProductCard>
            ))
          )}
        </ProductGrid>
      </div>
    </Container>
  );
}

export default ProductList;