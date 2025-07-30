import { ClockCircleOutlined, CloseCircleOutlined, DollarOutlined, StarOutlined } from '@ant-design/icons';
import { Card, Space } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';
import { Footer, Nav, NavBar } from '../../components';
import { staggerContainer, textVariant } from '../../utils/motion';

const Services = () => {
  const features = [
    {
      name: 'Faster recruitment.',
      description: 'Higher Life Personnel Solutions takes about 72 hours to source and short list qualified candidates for you, as compared to 30 days taken by most internal pre-selection recruiting processes.',
      icon: ClockCircleOutlined,
    },
    {
      name: 'Lower Cost Per Hire.',
      description: 'Higher Life Personnel Solutions offers a highly competitive cost per hire for each candidate. The cost is significantly lower than internal recruiting,because you only pay for the right hire. In most cases there are no costly retainer fees or other costs involved.',
      icon: DollarOutlined,
    },
    {
      name: 'You get the best people for the job.',
      description: 'Higher Life Personnel Solutions finds the most qualified people for the job.These people may not necessarily be looking for another job. Higher Life Personnel Solutions will source these people and put them to work for your organization.',
      icon: StarOutlined,
    },
    {
      name: 'No hiring mistakes.',
      description: 'The cost can be quite high if things do not work out with your new hire. The entire process will have to be repeated all over. With Higher Life Personnel Solutions should a consultant not meet your expectations within 90 days, we will replace the resource at no additional cost to you.',
      icon: CloseCircleOutlined,
    },
  ]

  return (
    <>
      <NavBar />
      <Nav />
      <div className="container-fluid bgPicture">
        {/* Welcome Section */}
        <div className="justify-center py-5 row bg-slate-950/90 h-96">
          <div className="py-5 text-center col-sm col-md col-lg">
            <p className="text-6xl font-black text-white text-uppercase">Services</p>
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
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <div className="hidden container-fluid lg:block">
          <div className="row px-44">
            <div className="p-5 col-sm col-md col-lg">
              <Space size={'large'}>
                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                <p className='text-4xl font-semibold yellow-gradient-text text-uppercase'>what we can do</p>
              </Space>
              <p className='text-sm text-white'>
                Higher Life Personnel Solutions RPO provides business
                with the power to rapidly acquire high performing staff,
                optimize your workforce, and reduce operational costs
                and risks, whilst accessing best of breed technology and
                recruitment expertise.
              </p>
            </div>
          </div>
          <div className="row px-44">
            <div className="col-sm col-md col-lg">
              <div className="row">
                <div className="pb-4 col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.0)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <i className="text-6xl bi bi-crosshair text-slate-400"></i>
                          <p className='m-0 my-4 text-xl yellow-gradient-text'>Executive Search and Headhunting</p>
                          <p className='text-slate-400'>
                            Our executive search service engages expert Consultants who utilize their market and
                            situational knowledge combined with their recruitment expertise to shape a solution with the Client.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.1)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <i class="bi bi-award text-6xl text-slate-400"></i>
                          <p className='m-0 my-4 text-xl yellow-gradient-text'>Talent Management</p>
                          <p className='text-slate-400'>
                            We help companies to develop and implement effective talent management strategies,
                            to ensure that they have the right people in the right roles, to achieve their business objectives.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.2)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <i class="bi bi-bag-check text-6xl text-slate-400"></i>
                          <p className='m-0 my-4 text-xl yellow-gradient-text'>Onboarding</p>
                          <p className='text-slate-400'>
                            We provide support to ensure a smooth transition for new hires, and to ensure that they
                            are fully integrated into the company's culture and goals
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="pb-4 col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.3)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <i class="bi bi-calendar4-week text-6xl text-slate-400"></i>
                          <p className='m-0 my-4 text-xl yellow-gradient-text'>Response Handling and Management</p>
                          <p className='text-slate-400'>
                            Higher Life Personnel Solutions has formulated a tailored response handling solution that addresses your specific needs in the most effective manner possible.
                            Our team was carefully selected based on their specific skill set and experience in delivering similar Ad Response Handling projects in South Africa across
                            the different companies.
                            Our experts have the capacity, know-how and relevant experience to deliver a high-quality project which we are confident will exceed your very high expectations.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.4)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <i class="bi bi-chat-left-text text-6xl text-slate-400"></i>
                          <p className='m-0 my-4 text-xl yellow-gradient-text'>Permanent and Temporary / Contract Recruitment</p>
                          <p className='text-slate-400'>
                            We maximize recruitment process efficiency by significantly reducing time to hire. We manage the recruitment process 100%,
                            providing you with a series of back-to-back qualified candidate interviews. We also provide professional insights on the outcomes of the interviews.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.5)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <i class="bi bi-check2-square text-6xl text-slate-400"></i>
                          <p className='m-0 my-4 text-xl yellow-gradient-text'>HR Advisory</p>
                          <p className='text-slate-400'>
                            Our Advisory professionals seek provide strategies to help our clients to
                            reduce costs and sustain value. Our HR Consulting services include but are not limited to:
                          </p>
                          <div className='text-slate-400 text-start'>
                            <p className='m-0 text-slate-400'>•	End-to end Organizational Development</p>
                            <p className='m-0 text-slate-400'>•	Strategic Performance Management </p>
                            <p className='m-0 text-slate-400'>•	Change Management and Transformation</p>
                            <p className='m-0 text-slate-400'>•	Business Process Re-Engineering</p>
                            <p className='m-0 text-slate-400'>•	Patterson Accredited Job Grading</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="pb-4 col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.6)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="p-5 text-center text-white col-sm col-md col-lg">
                          <p className='m-0 text-xl yellow-gradient-text'>Training</p>
                          <p className='text-slate-400'>
                            Higher Life Personnel Solutions offers our clients unrivalled Training services aligned to international
                            standards and best practice. Our Talent Management Solutions include but are not limited to:
                          </p>
                          <p className='text-slate-400 text-start'>
                            <p className='m-0'>•	Leadership Development Programmes (LDP)</p>
                            <p className='m-0'>•	Management Development Programmes (MDP)</p>
                            <p className='m-0'>•	Junior Management Development Programmes (JMDP)</p>
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="p-5 col-sm col-md col-lg">
                  <div className="p-5">
                    <h2 className="py-3 text-base font-semibold leading-7 text-white">Higherlife Services</h2>
                    <Space size={'large'}>
                      <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                      <p className='text-4xl font-semibold yellow-gradient-text text-uppercase'>Our Benefits</p>
                    </Space>
                    <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-slate-400 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-white">
                            <feature.icon aria-hidden="true" className="absolute w-5 h-5 left-1 top-1 text-slate-400" />
                            {feature.name}
                          </dt>
                          <dd className="inline">&ensp;{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Mobile */}
      <div className="container-fluid lg:hidden">
        <div className="px-5 row">
          <div className="p-5 col-sm col-md col-lg">
            <Space size={'large'}>
              <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
              <p className='text-4xl font-semibold yellow-gradient-text text-uppercase'>what we can do</p>
            </Space>
            <p className='text-sm text-white'>
              Higher Life Personnel Solutions RPO provides business
              with the power to rapidly acquire high performing staff,
              optimize your workforce, and reduce operational costs
              and risks, whilst accessing best of breed technology and
              recruitment expertise.
            </p>
          </div>
        </div>
        <div className="px-5 row">
          <div className="col-sm col-md col-lg">
            <div className="row">
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <i className="text-6xl bi bi-crosshair text-slate-400"></i>
                      <p className='m-0 my-4 text-xl yellow-gradient-text'>Executive Search and Headhunting</p>
                      <p className='text-slate-400'>
                        Our executive search service engages expert Consultants who utilize their market and
                        situational knowledge combined with their recruitment expertise to shape a solution with the Client.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <i class="bi bi-award text-6xl text-slate-400"></i>
                      <p className='m-0 my-4 text-xl yellow-gradient-text'>Talent Management</p>
                      <p className='text-slate-400'>
                        We help companies to develop and implement effective talent management strategies,
                        to ensure that they have the right people in the right roles, to achieve their business objectives.
                      </p>
                    </div>
                  </div>
                </Card>

              </div>
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <i class="bi bi-bag-check text-6xl text-slate-400"></i>
                      <p className='m-0 my-4 text-xl yellow-gradient-text'>Onboarding</p>
                      <p className='text-slate-400'>
                        We provide support to ensure a smooth transition for new hires, and to ensure that they
                        are fully integrated into the company's culture and goals
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <i class="bi bi-calendar4-week text-6xl text-slate-400"></i>
                      <p className='m-0 my-4 text-xl yellow-gradient-text'>Response Handling and Management</p>
                      <p className='text-slate-400'>
                        Higher Life Personnel Solutions has formulated a tailored response handling solution that addresses your specific needs in the most effective manner possible.
                        Our team was carefully selected based on their specific skill set and experience in delivering similar Ad Response Handling projects in South Africa across
                        the different companies.
                        Our experts have the capacity, know-how and relevant experience to deliver a high-quality project which we are confident will exceed your very high expectations.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <i class="bi bi-chat-left-text text-6xl text-slate-400"></i>
                      <p className='m-0 my-4 text-xl yellow-gradient-text'>Permanent and Temporary / Contract Recruitment</p>
                      <p className='text-slate-400'>
                        We maximize recruitment process efficiency by significantly reducing time to hire. We manage the recruitment process 100%,
                        providing you with a series of back-to-back qualified candidate interviews. We also provide professional insights on the outcomes of the interviews.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <i class="bi bi-check2-square text-6xl text-slate-400"></i>
                      <p className='m-0 my-4 text-xl yellow-gradient-text'>HR Advisory</p>
                      <p className='text-slate-400'>
                        Our Advisory professionals seek provide strategies to help our clients to
                        reduce costs and sustain value. Our HR Consulting services include but are not limited to:
                      </p>
                      <div className='text-slate-400 text-start'>
                        <p className='m-0 text-slate-400'>•	End-to end Organizational Development</p>
                        <p className='m-0 text-slate-400'>•	Strategic Performance Management </p>
                        <p className='m-0 text-slate-400'>•	Change Management and Transformation</p>
                        <p className='m-0 text-slate-400'>•	Business Process Re-Engineering</p>
                        <p className='m-0 text-slate-400'>•	Patterson Accredited Job Grading</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="pb-4 col-sm-12 col-md-12 col-lg">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-800/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="p-5 text-center text-white col-sm col-md col-lg">
                      <p className='m-0 text-xl yellow-gradient-text'>Training</p>
                      <p className='text-slate-400'>
                        Higher Life Personnel Solutions offers our clients unrivalled Training services aligned to international
                        standards and best practice. Our Talent Management Solutions include but are not limited to:
                      </p>
                      <p className='text-slate-400 text-start'>
                        <p className='m-0'>•	Leadership Development Programmes (LDP)</p>
                        <p className='m-0'>•	Management Development Programmes (MDP)</p>
                        <p className='m-0'>•	Junior Management Development Programmes (JMDP)</p>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="p-5 col-sm-12 col-md-12 col-lg">
                <div className="p-5">
                  <h2 className="py-3 text-base font-semibold leading-7 text-white">Higherlife Services</h2>
                  <Space size={'large'}>
                    <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                    <p className='text-4xl font-semibold yellow-gradient-text text-uppercase'>Our Benefits</p>
                  </Space>
                  <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-slate-400 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white">
                          <feature.icon aria-hidden="true" className="absolute w-5 h-5 left-1 top-1 text-slate-400" />
                          {feature.name}
                        </dt>
                        <dd className="inline">&ensp;{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services