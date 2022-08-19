import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Avatar, Menu, Popover } from "antd";
import { useSelector, useDispatch } from "react-redux";

import items from "../consts/itemsSidebar.js";
import { logout } from "../store/ducks/auth/actions";

const MainLayout = () => {
  const auth = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = auth?.user;

  useEffect(() => {
    if (!auth.user || !auth.token) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className='MainLayout__Root'>
        <header className='MainLayout__Header'>
          <div className='Header__Container'>
            <Button
              className='Header__Menu'
              type='text'
              icon={<MenuOutlined />}
            />
            <NavLink to='/' className='Header__Logo'>
              ToDo App
            </NavLink>
            <div className='Header__Account'>
              <Popover
                placement='topLeft'
                content={
                  <>
                    <Button onClick={handleLogout} type='text'>
                      Logout
                    </Button>
                  </>
                }
                trigger='click'>
                <Avatar style={{ cursor: "pointer" }} icon={<UserOutlined />}>
                  User
                </Avatar>
              </Popover>
              <span className='Account__Name'>{user.username}</span>
            </div>
          </div>
        </header>
        <main className='MainLayout__View'>
          <div className='Sidebar'>
            <Sidebar />
          </div>
          <div className='Content'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className='Sidebar'>
        <Menu
          mode='inline'
          openKeys='tasks'
          style={{ width: 256 }}
          items={items}
        />
      </div>
    </>
  );
};

export default MainLayout;
