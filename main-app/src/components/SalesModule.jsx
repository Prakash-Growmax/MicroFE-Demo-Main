import { Button } from "analyticsApp/SharedButton";
import { Card } from "analyticsApp/SharedCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

const TableHeader = styled.th`p
  text-align: left;
  padding: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const OrderRow = styled.tr`
  &:hover {
    background-color: #f8f9fa;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${(props) => {
    switch (props.status) {
      case "completed":
        return "#d1e7dd";
      case "pending":
        return "#fff3cd";
      case "cancelled":
        return "#f8d7da";
      default:
        return "#e2e3e5";
    }
  }};

  color: ${(props) => {
    switch (props.status) {
      case "completed":
        return "#0f5132";
      case "pending":
        return "#664d03";
      case "cancelled":
        return "#842029";
      default:
        return "#41464b";
    }
  }};
`;

const SalesModule = () => {
  // Mock orders data
  const orders = [
    {
      id: "1001",
      date: "2023-06-10",
      customer: "John Doe",
      total: 129.99,
      status: "completed",
    },
    {
      id: "1002",
      date: "2023-06-11",
      customer: "Jane Smith",
      total: 89.95,
      status: "pending",
    },
    {
      id: "1003",
      date: "2023-06-12",
      customer: "Bob Johnson",
      total: 59.99,
      status: "completed",
    },
    {
      id: "1004",
      date: "2023-06-13",
      customer: "Alice Williams",
      total: 199.95,
      status: "cancelled",
    },
  ];

  return (
    <Container>
      <h1>Sales Management</h1>

      <div>
        <Button primary>Create New Order</Button>
        <Button>View Reports</Button>
      </div>

      <Card>
        <h2>Recent Orders</h2>
        <OrdersTable>
          <thead>
            <tr>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                {/* <TableCell>{formatDate(order.date)}</TableCell> */}
                <TableCell>{order.customer}</TableCell>
                {/* <TableCell>{formatCurrency(order.total)}</TableCell> */}
                <TableCell>
                  <StatusBadge status={order.status}>
                    {order.status}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <Button>View</Button>
                </TableCell>
              </OrderRow>
            ))}
          </tbody>
        </OrdersTable>
      </Card>
    </Container>
  );
};

export default SalesModule;
