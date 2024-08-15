import React from 'react';
import { NavBar, Nav, Footer } from '../../components';
import { Card, Flex, Space } from 'antd';
import logo from '../../assets/images/default-logo-02.png'
import { pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic1, pic2, pic3 } from '../../assets/images';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

const About_us = () => {
  return (
    <>
      <NavBar />
      <Nav />
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <div className="container-fluid bgPicture ">
          {/* Welcome Section */}
          <div className="row bg-slate-950/90 justify-center h-96 py-5">
            <div className="col-sm col-md col-lg text-center py-5">
              <p className="text-uppercase font-black text-white text-6xl">About us</p>
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

        <div className="container-fluid hidden lg:block">
          <div className="row px-44">
            <div className="col-sm col-md col-lg text-white py-24">
              <Space size={'large'}>
                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Who we are</p>
              </Space>
              <motion.p variants={textVariant(1.0)}>
                <p className='text-sm'>
                  Today the competitive economic market requires that each company draw upon the maximum potential of all of their human resources in order to succed in this global marketplace.
                </p>
              </motion.p>
              <motion.p variants={textVariant(1.1)}>
                <p className='pt-5 text-slate-400'>
                  Higher Life Personnel Solutions is a 100% Black owned recruitment consultancy whose strategic focus is matching the right candidates to the right opportunities.
                  We focus on understanding and matching the expectations and cultures of our clients with the skills, experience and personalities of our candidates. This allows us to constantly deliver a world-class service to meet diverse customer and candidate needs.We have expertise in managing the entire life cycle of a recruitment flow. From concept to execution, from need identification to role defining, from budgeting to job offer,
                  from market research to interview, from sourcing to reference checks, we are capable of managing it all.
                </p>
              </motion.p>
              <motion.p variants={textVariant(1.2)}>
                <p className='text-slate-400 pt-5'>
                  Higher Life Personnel Solutions prides itself in offering dynamic pricing and cost-effective solutions for our valued clients.  As a member of APSO,
                  Higher Life Personnel  is ethically bound to render a professional service at all times to all our clients
                </p>
              </motion.p>
            </div>
            <div className="col-sm col-md col-lg text-white py-24">
              <span className='flex justify-center py-5'><img src={logo} className='w-16 img-fluid' alt="" srcset="" /></span>
              <motion.p variants={textVariant(1.4)}>
                <p className='text-slate-400'>
                  Higher Life Personnel focuses on placing professionals and skilled people in permanent and contract employment. At HLPS we tackle human resource challenges with confidence because our team is highly experienced across every industry we serve. Our talent management and recruitment efforts have no boundaries. As a regionally networked company, we benefit from an extensive network of talent across all major African markets. By blending our talent
                  management solutions with our recruiting techniques under one roof our clients can go from great people to great performances with confidences.
                </p>
              </motion.p>
            </div>
          </div>
          <div className="row px-44">
            <div className="col-sm col-md col-lg">
              <div className="row">
                <div className="col-sm col-md col-lg pb-4">
                  <motion.p variants={textVariant(1.0)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="col-sm col-md col-lg text-center text-white p-5">
                          <p><i class="bi bi-ticket text-6xl text-slate-400"></i></p>
                          <p className='text-3xl font-semibold'>Our Mission</p>
                          <motion.p variants={textVariant(1.1)}>
                            <p className='text-slate-400'>
                              Our commitment to our clients is directly tied with our mission- “To be the best and most efficient HR Consulting firm in the marketplace and provide our clients with the most effective resourcing solutions possible. We aim to create value and make a difference to the work of each of our clients by combining aggressive strategic marketing
                              with quality customer service. We strive to find the perfect company for each candidate and the perfect candidate for each company.
                            </p>
                          </motion.p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.1)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="col-sm col-md col-lg text-center text-white p-5">
                          <p><i class="bi bi-ticket text-6xl text-slate-400"></i></p>
                          <p className='text-3xl font-semibold'>Our Vision</p>
                          <motion.p variants={textVariant(1.2)}>
                            <p className='text-slate-400'>
                              Our vision is to be the world’s most dynamic recruitment company, which makes a difference. We believe that our comprehensive recruitment services add value to both clients and candidates. Attaining our vision requires
                              dedication to our clients and continually improving performance in every area and at every level of the organisation.
                            </p>
                          </motion.p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.3)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="col-sm col-md col-lg text-center text-white p-5">
                          <p><i class="bi bi-cpu text-6xl text-slate-400"></i></p>
                          <p className='text-3xl font-semibold'>Our Process</p>
                          <div className="timeline-main text-white">
                            <div className="timeline-wrap">

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Job Profiling</p>
                                  <p className='m-0 text-slate-400'>Development, update or authentication of the job profile to be recruited for.</p>
                                </div>
                              </div>

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Sourcing</p>
                                  <p className='m-0 text-slate-400'>Attraction of candidates through approved media</p>
                                </div>
                              </div>

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Interviewing and Assessing</p>
                                  <p className='m-0 text-slate-400'>Sifting of appicants to select most suitable, interviewing and possibly conducting psychometric assessments.</p>
                                </div>
                              </div>

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Reference Checking and Verification of Qualifications</p>
                                  <p className='m-0 text-slate-400'>Background checks including references and qualifications on the identified top candidates.</p>
                                </div>
                              </div>

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Shortlisting</p>
                                  <p className='m-0 text-slate-400'>Ranking candidates in order of <br />performance through the whole selection process.</p>
                                </div>
                              </div>

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Selection and Placement</p>
                                  <p className='m-0 text-slate-400'>Choosing the successful candidate for appointment and supporting the engagement process.</p>
                                </div>
                              </div>

                              <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                  <p className='m-0 yellow-gradient-text'>Follow Up</p>
                                  <p className='m-0 text-slate-400'>After appointment, follow up to establish client reaction to candicate fit.</p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
                <div className="col-sm col-md col-lg">
                  <motion.p variants={textVariant(1.4)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="col-sm col-md col-lg text-center text-white p-5">
                          <p><i class="bi bi-bank text-6xl text-slate-400"></i></p>
                          <p className='text-3xl font-semibold'>Our Values</p>
                          <p className='text-slate-400'>
                            <ul>
                              <div className="row">
                                <div className="col-sm col-md col-lg">
                                  <li>
                                    <p className='m-0 yellow-gradient-text'>Integrity</p>
                                    <p className='m-0 text-slate-400'>Authentic, honest, and transparent practice that fosters dependability, accountability and professionalism.</p>
                                  </li>
                                </div>
                                <div className="col-sm col-md col-lg">
                                  <li>
                                    <p className='m-0 yellow-gradient-text'>Best Practice</p>
                                    <p className='m-0 text-slate-400'>Defining, executing and enhancing methodologies for maximum efficiency towrds organizations strategic goals.</p>
                                  </li>
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div className="col-sm col-md col-lg">
                                  <li>
                                    <p className='m-0 yellow-gradient-text'>Tenacity</p>
                                    <p className='m-0 text-slate-400'>The strength of will driven by persistence, determination, resilience, commitment and passion to achieve professional excellence.</p>
                                  </li>
                                </div>
                                <div className="col-sm col-md col-lg">
                                  <li>
                                    <p className='m-0 yellow-gradient-text'>Achievement</p>
                                    <p className='m-0 text-slate-400'>Strategic intent with discipline and effort, and a deep sense of commitment, perseverance and accountability.</p>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                  <br />
                  <motion.p variants={textVariant(1.5)}>
                    <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                      <div className="row">
                        <div className="col-sm col-md col-lg text-center text-white p-5">
                          <p><i class="bi bi-person-rolodex text-6xl text-slate-400"></i></p>
                          <p className='text-3xl font-semibold'>Memberships</p>
                          <p><img src={pic1} className='w-50 img-fluid' alt="" /></p>
                          <p><img src={pic2} className='w-90 img-fluid' alt="" /></p>
                        </div>
                      </div>
                    </Card>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-44">
            <div className="col-sm col-md col-lg text-center">
              <Space size={'large'}>
                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Partnered with Success</p>
              </Space>
              <p className='text-white pb-5'>Business across Queensland rely on us for dedicated staffing solutions and career growth</p>
              <p className='backdrop-blur-sm bg-slate-900/60 hover:bg-slate-800/40'>
                <marquee behavior="sliding" direction="" scrollamount="10" className="p-2">
                  <span><img src={pic3} className='w-5  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic4} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic5} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic6} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic7} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic8} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic9} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic10} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic11} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic12} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic13} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic14} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic15} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic16} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                  <span><img src={pic17} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                </marquee>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Mobile */}
      <div className="container-fluid lg:hidden">
        <div className="row px-5">
          <div className="col-sm col-md col-lg text-white py-16">
            <Space size={'large'}>
              <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
              <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Who we are</p>
            </Space>
            <p className='text-sm'>
              Today the competitive economic market requires that each company draw upon the maximum potential of all of their human resources in order to succed in this global marketplace.
            </p>
            <p className='pt-5 text-slate-400'>
              Higher Life Personnel Solutions is a 100% Black owned recruitment consultancy whose strategic focus is matching the right candidates to the right opportunities.
              We focus on understanding and matching the expectations and cultures of our clients with the skills, experience and personalities of our candidates. This allows us to constantly deliver a world-class service to meet diverse customer and candidate needs.We have expertise in managing the entire life cycle of a recruitment flow. From concept to execution, from need identification to role defining, from budgeting to job offer,
              from market research to interview, from sourcing to reference checks, we are capable of managing it all.
            </p>
            <p className='text-slate-400 pt-5'>
              Higher Life Personnel Solutions prides itself in offering dynamic pricing and cost-effective solutions for our valued clients.  As a member of APSO,
              Higher Life Personnel  is ethically bound to render a professional service at all times to all our clients
            </p>
          </div>
          <div className="col-sm col-md col-lg text-white py-24">
            <span className='flex justify-center py-5'><img src={logo} className='w-16 img-fluid' alt="" srcset="" /></span>
            <p className='text-slate-400'>
              Higher Life Personnel focuses on placing professionals and skilled people in permanent and contract employment. At HLPS we tackle human resource challenges with confidence because our team is highly experienced across every industry we serve. Our talent management and recruitment efforts have no boundaries. As a regionally networked company, we benefit from an extensive network of talent across all major African markets. By blending our talent
              management solutions with our recruiting techniques under one roof our clients can go from great people to great performances with confidences.
            </p>

          </div>
        </div>
        <div className="row px-5">
          <div className="col-sm col-md col-lg">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg pb-4">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="col-sm col-md col-lg text-center text-white p-5">
                      <p><i class="bi bi-ticket text-6xl text-slate-400"></i></p>
                      <p className='text-3xl font-semibold'>Our Mission</p>
                      <p className='text-slate-400'>
                        Our commitment to our clients is directly tied with our mission- “To be the best and most efficient HR Consulting firm in the marketplace and provide our clients with the most effective resourcing solutions possible. We aim to create value and make a difference to the work of each of our clients by combining aggressive strategic marketing
                        with quality customer service. We strive to find the perfect company for each candidate and the perfect candidate for each company.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-sm-12 col-md-12 col-lg  pb-4">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="col-sm col-md col-lg text-center text-white p-5">
                      <p><i class="bi bi-ticket text-6xl text-slate-400"></i></p>
                      <p className='text-3xl font-semibold'>Our Vision</p>
                      <p className='text-slate-400'>
                        Our vision is to be the world’s most dynamic recruitment company, which makes a difference. We believe that our comprehensive recruitment services add value to both clients and candidates. Attaining our vision requires
                        dedication to our clients and continually improving performance in every area and at every level of the organisation.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg  pb-4">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="col-sm col-md col-lg text-center text-white p-5">
                      <p><i class="bi bi-cpu text-6xl text-slate-400"></i></p>
                      <p className='text-3xl font-semibold'>Our Process</p>
                      <div className=" text-white">
                        <div className="">

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Job Profiling</p>
                              <p className='m-0 text-slate-400'>Development, update or authentication of the job profile to be recruited for.</p>
                            </div>
                          </div>

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Sourcing</p>
                              <p className='m-0 text-slate-400'>Attraction of candidates through approved media</p>
                            </div>
                          </div>

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Interviewing and Assessing</p>
                              <p className='m-0 text-slate-400'>Sifting of appicants to select most suitable, interviewing and possibly conducting psychometric assessments.</p>
                            </div>
                          </div>

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Reference Checking and Verification of Qualifications</p>
                              <p className='m-0 text-slate-400'>Background checks including references and qualifications on the identified top candidates.</p>
                            </div>
                          </div>

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Shortlisting</p>
                              <p className='m-0 text-slate-400'>Ranking candidates in order of <br />performance through the whole selection process.</p>
                            </div>
                          </div>

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Selection and Placement</p>
                              <p className='m-0 text-slate-400'>Choosing the successful candidate for appointment and supporting the engagement process.</p>
                            </div>
                          </div>

                          <div className="timeline-card">
                            <div className="timeline-card-wrap">
                              <p className='m-0 yellow-gradient-text'>Follow Up</p>
                              <p className='m-0 text-slate-400'>After appointment, follow up to establish client reaction to candicate fit.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-sm-12 col-md-12 col-lg  pb-4">
                <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="col-sm col-md col-lg text-center text-white p-5">
                      <p><i class="bi bi-bank text-6xl text-slate-400"></i></p>
                      <p className='text-3xl font-semibold'>Our Values</p>
                      <p className='text-slate-400'>
                        <ul>
                          <div className="row">
                            <div className="col-sm col-md col-lg">
                              <li>
                                <p className='m-0 yellow-gradient-text'>Integrity</p>
                                <p className='m-0 text-slate-400'>Authentic, honest, and transparent practice that fosters dependability, accountability and professionalism.</p>
                              </li>
                            </div>
                            <div className="col-sm col-md col-lg">
                              <li>
                                <p className='m-0 yellow-gradient-text'>Best Practice</p>
                                <p className='m-0 text-slate-400'>Defining, executing and enhancing methodologies for maximum efficiency towrds organizations strategic goals.</p>
                              </li>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-sm col-md col-lg">
                              <li>
                                <p className='m-0 yellow-gradient-text'>Tenacity</p>
                                <p className='m-0 text-slate-400'>The strength of will driven by persistence, determination, resilience, commitment and passion to achieve professional excellence.</p>
                              </li>
                            </div>
                            <div className="col-sm col-md col-lg">
                              <li>
                                <p className='m-0 yellow-gradient-text'>Achievement</p>
                                <p className='m-0 text-slate-400'>Strategic intent with discipline and effort, and a deep sense of commitment, perseverance and accountability.</p>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Card>
                <br />
                <Card bordered={false} className='backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/40'>
                  <div className="row">
                    <div className="col-sm col-md col-lg text-center text-white p-5">
                      <p><i class="bi bi-person-rolodex text-6xl text-slate-400"></i></p>
                      <p className='text-3xl font-semibold'>Memberships</p>
                      <p><img src={pic1} className='w-50 img-fluid' alt="" /></p>
                      <p><img src={pic2} className='w-90 img-fluid' alt="" /></p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-44">
          <div className="col-sm col-md col-lg text-center">
            <Space size={'large'}>
              <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
              <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Partnered with Success</p>
            </Space>
            <p className='text-white pb-5'>Business across Queensland rely on us for dedicated staffing solutions and career growth</p>
            <p className='backdrop-blur-sm bg-slate-900/60 hover:bg-slate-800/40'>
              <marquee behavior="sliding" direction="" scrollamount="10" className="p-2">
                <span><img src={pic3} className='w-5  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic4} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic5} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic6} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic7} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic8} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic9} className='w-32  mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic10} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic11} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic12} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic13} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic14} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic15} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic16} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
                <span><img src={pic17} className='w-32 mx-16 img-fluid' alt="logos" srcset="" /></span>
              </marquee>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About_us;