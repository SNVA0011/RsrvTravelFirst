import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import FaqList from '../common/FaqList';


const WhyChooseServices = () => {
  return (
    <section className='why-choose-services overflow-hidden'>
      <Container className='spcmb-60 mt-2'>
        <Row>

          <Col xs={12} lg={7} xxl={8}>
            <div className="section-heading">
              <p>FAQ</p>
              <h3>Why you should choose our services?</h3>
            </div>
            <div className='stylereuse-1'>
              <p>Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate  lobortis lacus.</p>
            </div>
            <ul className='bullets-abtdis row'>
              <li className='col-12 col-sm-6 col-md-4 mb-3'><span className='d-inline-flex'><Icon icon="solar:star-bold" color="white" /></span> Quality Services</li>
              <li className='col-12 col-sm-6 col-md-4 mb-3'><span className='d-inline-flex'><Icon icon="solar:star-bold" color="white" /></span> Affordable Cost</li>
              <li className='col-12 col-sm-6 col-md-4 mb-3'><span className='d-inline-flex'><Icon icon="solar:star-bold" color="white" /></span> Professional</li>
            </ul>

            <FaqList content={[
              {
                "title": "How many people do they hold?",
                "paragraph": `<div className="tab-content">
                  <p>Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate  lobortis lacus. Semper ut lacinia vitae aliquam vulputate lobortis lacus. Semper ut </p>
                  </div>`
              },
              {
                "title": "How many people do they hold?",
                "paragraph": `<div className="tab-content">
                  <p>Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate  lobortis lacus. Semper ut lacinia vitae aliquam vulputate lobortis lacus. Semper ut </p>
                  </div>`
              },
              {
                "title": "How many people do they hold?",
                "paragraph": `<div className="tab-content">
                  <p>Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate  lobortis lacus. Semper ut lacinia vitae aliquam vulputate lobortis lacus. Semper ut </p>
                  </div>`
              },
              {
                "title": "How many people do they hold?",
                "paragraph": `<div className="tab-content">
                  <p>Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate  lobortis lacus. Semper ut lacinia vitae aliquam vulputate lobortis lacus. Semper ut </p>
                  </div>`
              },
              {
                "title": "How many people do they hold?",
                "paragraph": `<div className="tab-content">
                  <p>Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate  lobortis lacus. Semper ut lacinia vitae aliquam vulputate lobortis lacus. Semper ut </p>
                  </div>`
              },
            ]} />
          </Col>

          <Col xs={12} lg={5} xxl={4} className='d-none d-lg-block'>
            <img src='/images/airport-waiting.png' alt='Why you should choose our services?' className='airport-waiting' />
          </Col>

        </Row>

      </Container>
    </section>
  )
}

export default WhyChooseServices