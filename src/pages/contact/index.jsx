import React from 'react';
import { NavBar, Nav, Footer } from '../../components';
import { Flex, Card, Button, Form, Input, Space, Divider } from 'antd';

const { TextArea } = Input;

const Contact_us = () => {
  return (
    <>
      <NavBar />
      <Nav />
      <div className="container-fluid bgPicture">
        {/* Welcome Section */}
        <div className="justify-center py-5 row bg-slate-950/90 h-96">
          <div className="py-5 text-center col-sm col-md col-lg">
            <p className="text-6xl font-black text-white text-uppercase">contact us</p>
            {/* Double Lines */}
            <div className="justify-center mt-4 row">
              <div className="col-6">
                <div className="flex justify-center">
                  <div className="col-sm col-md col-lg">&ensp;</div>
                  <div className="col-sm col-md col-lg">
                    <div style={{ height: 2 }} className='bg-white w-100'></div>
                  </div>
                  <div className="col-sm col-md col-lg">&ensp;</div>
                </div>
              </div>
            </div>
            {/* End of Double Lines */}
          </div>
        </div>
        {/* End of Welcome Section */}
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm col-md col-lg">
            <Card bordered={false} className='p-5 backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40 rounded-3xl'>
              <div className="row">
                <div className="col-sm col-md col-lg">
                  <Flex justify='center' align="center" vertical='vertical'>
                    <p className='text-5xl font-bold text-white'>Get Intouch</p>
                  </Flex>
                </div>
              </div>
              <Form className="p-2 sm:p-4" layout="vertical" hideRequiredMark>
                <div className="row">
                  <div className="col-sm col-md col-lg">
                    <Form.Item name={'from_name'} rules={[{ required: true, message: 'Please input your full name!', },]}>
                      <Input size="large" placeholder="Complete Name" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm col-md col-lg">
                    <Form.Item name={'email'} rules={[{ type: 'email', message: 'The input is not valid e-mail!', }, { required: true, message: 'Please input your e-mail address!', },]}>
                      <Input size="large" placeholder="Email Address" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm col-md col-lg">
                    <Form.Item name={'message'} rules={[{ required: true, message: 'Please input your message body!', },]}>
                      <TextArea placeholder='Descriptions ...' rows={4} />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className='col-sm col-md col-lg'>
                    <Button className='text-black bg-yellow-500 border-0' htmlType='submit' >Send message</Button>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
          <div className="bg-yellow-500 col-sm col-md col-lg rounded-3xl ">

            <Flex className='p-16' vertical='vertical'>
              <p className='text-3xl font-black'>INFORMTION</p>
              <div className="col-sm col-md col-lg ">
                <Space>
                  <span className=''><i className="text-3xl bi bi-telephone-fill text-color-primary"></i></span>
                  <span>
                    <p className='m-0 font-semibold'>Phone No</p>
                    <p className='m-0 text-color-primary'>011 568 0825</p>
                  </span>
                </Space>
              </div>
              <br />
              <div className="col-sm col-md col-lg">
                <Space>
                  <span className=''><i className="text-3xl bi bi-envelope-fill text-color-primary"></i></span>
                  <span>
                    <p className='m-0 font-semibold'>Email Address</p>
                    <p className='m-0 text-color-primary'>info@higherlifepersonnel.co.za</p>
                  </span>
                </Space>
              </div>
              <br />
              <div className="col-sm col-md col-lg">
                <Space>
                  <span className=''><i className="text-3xl bi bi-geo-alt-fill text-color-primary"></i></span>
                  <span>
                    <p className='m-0 font-semibold'>Address</p>
                    <p className='m-0 text-color-primary'>Clearwater Office Park, Building 3 ,Millenium Road, West Rand, 1735</p>
                  </span>
                </Space>
              </div>
            </Flex>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact_us