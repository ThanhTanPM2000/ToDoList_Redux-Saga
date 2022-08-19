import {
  TeamOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "owned_rooms",
    icon: <TeamOutlined />,
    label: "Rooms owned",
  },
  {
    key: "shared_rooms",
    icon: <UsergroupAddOutlined />,
    label: "Rooms shared to you",
  },
  {
    key: "profile",
    icon: <UserOutlined />,
    label: "Profile",
  },
];

export default items;
