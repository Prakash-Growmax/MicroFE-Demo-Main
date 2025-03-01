import { Button } from "analyticsApp/SharedButton";
import { Card } from "analyticsApp/SharedCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const ProductCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  margin-top: 0;
`;

const ProductStock = styled.div`
  margin: 0.5rem 0;
  color: ${(props) => (props.low ? "#dc3545" : "#198754")};
  font-weight: ${(props) => (props.low ? "bold" : "normal")};
`;

const ActionButtons = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const InventoryModule = () => {
  // Mock product data
  const products = [
    { id: 1, name: "Product A", stock: 42, price: 29.99 },
    { id: 2, name: "Product B", stock: 7, price: 49.99 },
    { id: 3, name: "Product C", stock: 0, price: 19.99 },
    { id: 4, name: "Product D", stock: 16, price: 34.99 },
  ];

  return (
    <Container>
      <h1>Inventory Management</h1>

      <div>
        <Button primary>Add New Product</Button>
        <Button>Export Inventory</Button>
      </div>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductName>{product.name}</ProductName>
            <div>Price: ${product.price}</div>
            <ProductStock low={product.stock < 10}>
              {product.stock === 0
                ? "Out of stock"
                : `${product.stock} units in stock${
                    product.stock < 10 ? " (Low)" : ""
                  }`}
            </ProductStock>
            <ActionButtons>
              <Button>Edit</Button>
              <Button primary>Restock</Button>
            </ActionButtons>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default InventoryModule;
