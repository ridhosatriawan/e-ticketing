import { Typography } from "antd";
import CardSales from "./card-sales";

function Dashboard() {
  const { Title } = Typography;
  return (
    <div>
      <Title>Dashboard</Title>
      <CardSales />
    </div>
  );
}

export default Dashboard;
