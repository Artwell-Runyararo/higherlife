import { Card, Space } from 'antd';
import React, { useState } from 'react';
import {
  specConstruction, specDigital, specEngineering, specFinance, specHumanResources,
  specLegal,
  specMarketing, specMedical, specSales, specTechnology, specTrades
} from '../../assets/images/index';
import { Footer, Nav, NavBar } from '../../components';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

const { Meta } = Card;
const cardData = [
  {
    key: '1',
    image: specEngineering,
    title: 'Engineering',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Mechanical Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Electrical Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Civil Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Chemical Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Manufacturing Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Quality Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Design Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Process Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Industrial Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Production Manager</li>
      </ul>
    </>
  },
  {
    key: '2',
    image: specLegal,
    title: 'Legal',
    description: <>
      <ul>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Corporate Lawyer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Litigation Lawyer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Commercial Lawyer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> In-House Counsel</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Regulatory Lawyer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Employment Lawyer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Intellectual Property Lawyer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Compliance Officer</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Paralegal</li>
        <li className='text-black'> <i className="bi bi-check text-yellow-500"></i> Legal Secretary</li>
      </ul>
    </>
  },
  {
    key: '3',
    image: specFinance,
    title: 'Finance and Accounting',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Accounting and Finance</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Compliance and Legal</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Corporate Finance / Mergers & Acquisitions</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Credit Analysis</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Investment Banking</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Risk Management</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Sales and Trading</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Treasury</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Asset Management</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Retail Banking - Financial Advisory / Personal</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Operations / Middle Office</li>
      </ul>
    </>
  },
  {
    key: '4',
    image: specConstruction,
    title: 'Construction',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Project Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Site Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Quantity Surveyor</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Construction Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Estimator</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Health and Safety Officer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Site Engineer</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Building Surveyor</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Contracts Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Civil Engineer</li>
      </ul>
    </>
  },
  {
    key: '5',
    image: specTrades,
    title: 'Trades',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Millwright</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Electrical Technician</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Welders</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Mechanical Assembler</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Machinist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Industrial/Heavy Equipment Mechanic</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Service Technician</li>
      </ul>
    </>
  },
  {
    key: '6',
    image: specHumanResources,
    title: 'Human Resources',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> HR Manager / Director</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Talent Acquisition Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> HR Business Partner</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Employee / Industrial Relations Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Compensation and Benefits Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Learning and Development Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Payroll professionals</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Recruitment Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Organisational Development Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Workplace Health and Safety Specialist</li>
      </ul>
    </>
  },
  {
    key: '7',
    image: specSales,
    title: 'Sales',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Sales Manager / Director</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Business Development Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Account Manager / Executive</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Sales Representative</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Key Account Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Sales Analyst</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Channel Sales Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Internal Sales Representative</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Sales Operations Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Customer Success Manager</li>
      </ul>
    </>
  },
  {
    key: '8',
    image: specMarketing,
    title: 'Marketing',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Marketing Manager / Director</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Brand Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Digital Marketing Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Social Media Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Content Manager / Copywriter</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Marketing Analyst</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Market Research Analyst</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Marketing Communications Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Public Relations Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Event Manager / Coordinator</li>
      </ul>
    </>
  },
  {
    key: '9',
    image: specTechnology,
    title: 'Technology',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Software Development / Engineering</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> IT Project Managers</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Cybersecurity</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Data Science / Data Analysis</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Cloud Computing / DevOps</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Network Engineering / Systems Administration</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Product Management</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> UX/UI Design</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Business / Systems Analysis</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Artificial Intelligence / Machine Learning</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> IT Risk Management / Compliance</li>
      </ul>
    </>
  },
  {
    key: '10',
    image: specDigital,
    title: 'Digital',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Digital Marketing Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> SEO / SEM / PPC Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Social Media Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Content Marketing Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Digital Analytics Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Email Marketing Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> E-commerce / Website Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Digital Analytics Specialist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Digital Project Manager</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Marketing Automation Specialist</li>
      </ul>
    </>
  },
  {
    key: '11',
    image: specMedical,
    title: 'Medical and Pharmaceutical',
    description: <>
      <ul>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Registered/Licensed Practical Nurses</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Nurses</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Clinical Nurse</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Nurse Coordinator</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Physiotherapist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Occupational Therapist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Hospital, Clinic And Office Managers</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Clinical Or Operational Managers (Any Healthcare Specialization)</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Pharmacy Technical Assistant/Laboratory Support</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Pharmacy Assistant</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Pharmacist</li>
        <li className='text-black'><i className="bi bi-check text-yellow-500"></i> Pharmacy Manager</li>
      </ul>
    </>
  },
]

const Specialties = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />
      <Nav />
      <div className="container-fluid bgPicture">
        {/* Welcome Section */}
        <div className="row bg-slate-950/90 justify-center h-96 py-5">
          <div className="col-sm col-md col-lg text-center py-5">
            <p className="text-uppercase font-black text-white text-6xl">SPECIALTIES</p>
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
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <div className="container-fluid py-4">
          <div className="row px-10 md:px-44">
            {cardData?.map((feature, index) => (
              <div key={index.key} className="col-sm-12 col-md-12 col-lg-3 my-3">
                <motion.p variants={textVariant(1.0)}>
                  <Card hoverable style={{ width: '100%', }}
                    cover={
                      <img
                        alt="example"
                        onClick={() => handleClick(index)}  // Pass the index to the handleClick function
                        srcSet={feature.image}
                      />
                    }
                  >
                    <Meta title={feature.title} description={activeIndex === index ? null : <span onClick={() => handleClick(index)}>Click to read more or less</span>} />
                    {/* Show description only if the card is the active one */}
                    {activeIndex === index ? (
                      <div className='py-3'><Space>{feature.description}</Space></div>
                    ) : null}
                  </Card>
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default Specialties