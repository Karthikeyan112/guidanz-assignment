import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Input, Row, Space, Typography } from 'antd';
import { useHistory } from "react-router-dom";

const authData = {
  user1: {
    name: 'Admin',
    password: 'Admin',
    permission: 'all'
  },
  user2: {
    name: 'MyName',
    password: 'test',
    permission: 'none'
  },
}

const LoginComponent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { Title } = Typography;
  const history = useHistory();

  useEffect(() => {
    sessionStorage.removeItem('user');
  }, [])

  const handleLogin = () => {
    const authArr = Object.values(authData);
    const userDetail = authArr.filter(authItem => authItem.name === userName && authItem.password === password);
    if(userDetail.length > 0) {
      history.push('/home');
      sessionStorage.setItem('user', JSON.stringify(userDetail[0]));

    }
  }

  return (
    <Space style={{marginTop: 30, display:'flex', justifyContent: 'center', flexDirection:'column'}}> 
      <Card style={{width: 400, height: 300, textAlign: 'center', boxShadow: '1px 2px 2px #F0F0F0'}}>
        <Title>Login</Title>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Input type='text' placeholder='user name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          </Col>
          <Col span={24}>
            <Input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </Col>
          <Col span={24}>
            <Button onClick={handleLogin}>Submit</Button>
          </Col>
        </Row>
      </Card>
    </Space>
  )
}

export default LoginComponent;
