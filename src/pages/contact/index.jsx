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
        <div className="row bg-slate-950/90 justify-center py-5">
          <div className="col-sm col-md col-lg text-center py-5">
            <p className="text-uppercase font-black text-white text-6xl">contact us</p>
            {/* Double Lines */}
            <div className="row justify-center mt-4">
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
            <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40 p-5 rounded-3xl'>
              <div className="row">
                <div className="col-sm col-md col-lg">
                  <Flex justify='center' align="center" vertical='vertical'>
                    <p className='text-5xl text-white font-bold'>Get Intouch</p>
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
                    <Button className='bg-yellow-500 text-black border-0' htmlType='submit' >Send message</Button>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
          <div className="col-sm col-md col-lg bg-yellow-500 rounded-3xl ">

            <Flex className='p-16' vertical='vertical'>
              <p className='font-black text-3xl'>INFORMTION</p>
              <div className="col-sm col-md col-lg ">
                <Space>
                  <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                  <span>
                    <p className='m-0 font-semibold'>Phone No</p>
                    <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                  </span>
                </Space>
              </div>
              <br />
              <div className="col-sm col-md col-lg">
                <Space>
                  <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                  <span>
                    <p className='m-0 font-semibold'>Email Address</p>
                    <p className='m-0 text-color-primary'>michael@micfix.co.zw</p>
                  </span>
                </Space>
              </div>
              <br />
              <div className="col-sm col-md col-lg">
                <Space>
                  <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                  <span>
                    <p className='m-0 font-semibold'>Address</p>
                    <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
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