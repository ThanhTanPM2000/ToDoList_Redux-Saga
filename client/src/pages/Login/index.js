import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../store/ducks/auth/actions";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) {
      navigate("/");
    }
  }, [auth.token, navigate]);

  const handleLogin = (values) => {
    const { email, password } = values;
    dispatch(login(email, password));
  };

  return (
    <div className='Login'>
      <div className='Login__Container'>
        <div className='Card'>
          <div className='Card__Header'>
            <div className='Card_Title'>ToDo App</div>
            <div className='Card_SubTitle'>Login Page</div>
          </div>
          <Form
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            autoComplete='off'>
            <div className='Card__Body'>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}>
                <Input.Password />
              </Form.Item>
              {/* <Form.Item name='remember' valuePropName='checked'>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <div className='Card__Footer'>
                <div className='Card__Actions'>
                  <Form.Item>
                    <Button type='primary' htmlType='submit'>
                      Login
                    </Button>
                  </Form.Item>
                  <div className='Form__Nav'>
                    I have an account! so <Link to='/register'>Register</Link>{" "}
                    Instead
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
