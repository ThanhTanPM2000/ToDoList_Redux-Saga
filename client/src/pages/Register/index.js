import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../store/ducks/auth/actions";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user && auth.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleSubmit = (values) => {
    const { email, username, password } = values;
    dispatch(register(email, username, password));
  };

  return (
    <div className='Register'>
      <div className='Register__Container'>
        <div className='Card'>
          <div className='Card__Header'>
            <div className='Card_Title'>ToDo App</div>
            <div className='Card_SubTitle'>Register Page</div>
          </div>
          <Form
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
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
                label='Username'
                name='username'
                rules={[
                  { required: true, message: "Please input your username!" },
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
              <div className='Card__Footer'>
                <div className='Card__Actions'>
                  <Form.Item>
                    <div className='Form__Btn'>
                      <Button type='primary' htmlType='submit'>
                        Register Account
                      </Button>
                    </div>
                  </Form.Item>
                  <div className='Form__Nav'>
                    I don't have an account! so <Link to='/login'> Login </Link>{" "}
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

export default Register;
