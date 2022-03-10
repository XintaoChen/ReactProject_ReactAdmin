import {
  AppstoreOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  UserOutlined,
  SafetyOutlined,
  HomeOutlined,
  BarsOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export const menuList = [
  {
    title: "Home Page",
    key: "/home",
    icon: "HomeOutlined",
  },
  {
    title: "Commoditiy",
    key: "/commoditiy",
    icon: "AppstoreOutlined",
    children: [
      {
        title: "Categories",
        key: "/categories",
        icon: "BarsOutlined",
      },
      {
        title: "Products",
        key: "/products",
        icon: "ToolOutlined",
      },
    ],
  },
  {
    title: "Users",
    key: "/users",
    icon: "UserOutlined",
  },
  {
    title: "Roles",
    key: "/roles",
    icon: "SafetyOutlined",
  },
  {
    title: "Charts",
    key: "/charts",
    icon: "AreaChartOutlined",
    children: [
      {
        title: "Line Charts",
        key: "/lineCharts",
        icon: "LineChartOutlined",
      },
      {
        title: "Bar Charts",
        key: "/barCharts",
        icon: "BarChartOutlined",
      },
      {
        title: "Pie Charts",
        key: "/pieCharts",
        icon: "PieChartOutlined",
      },
    ],
  },
];

export const getIcon = (iconString) => {
  switch (iconString) {
    case "HomeOutlined":
      return <HomeOutlined />;
    case "AppstoreOutlined":
      return <AppstoreOutlined />;
    case "BarsOutlined":
      return <BarsOutlined />;
    case "ToolOutlined":
      return <ToolOutlined />;
    case "UserOutlined":
      return <UserOutlined />;
    case "SafetyOutlined":
      return <SafetyOutlined />;
    case "AreaChartOutlined":
      return <AreaChartOutlined />;
    case "LineChartOutlined":
      return <LineChartOutlined />;
    case "BarChartOutlined":
      return <BarChartOutlined />;
    case "PieChartOutlined":
      return <PieChartOutlined />;
    default:
      return <AppstoreOutlined />;
  }
};
