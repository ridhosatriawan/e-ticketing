import { Button, Layout, Menu, Typography } from "antd";
import PropTypes from "prop-types";
import {
  DashboardOutlined,
  DatabaseOutlined,
  FileOutlined,
  LogoutOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import "./style.css";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className="sider" width={250}>
        <Typography.Title className="sider-title" level={3}>
          E Ticketing
        </Typography.Title>
        <Menu
          onClick={onClick}
          className="menu"
          mode="inline"
          items={[
            {
              label: "Dashboard",
              key: "/dashboard",
              icon: <DashboardOutlined />,
            },
            {
              label: "Cetak Tiket",
              key: "/print-ticket",
              icon: <PrinterOutlined />,
            },
            {
              label: "Laporan",
              key: "/report",
              icon: <FileOutlined />,
            },
            {
              label: "Master",
              // type: "group",
              icon: <DatabaseOutlined />,
              children: [
                {
                  label: "Tiket",
                  key: "/master-ticket",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <Button type="text" icon={<LogoutOutlined />}>
            Logout
          </Button>
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
