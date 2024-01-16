import React from 'react'
import { Col, Row } from 'react-bootstrap'

const RatebyTrust = () => {
  return (
    <div className='rate-by-trustpilot mbchk-20'>
        <Row className='align-items-center'>
            <Col xs={6}>
                <img src='/images/rateby-trustpilot.png' alt='rateby-trustpilot' className='rateby-trustpilot' />
            </Col>
            <Col xs={6}>
            <img src='/images/rateby-google.png' alt='rateby-google' className='rateby-google' /> 
            </Col>
        </Row> 
    </div>
  )
}

export default RatebyTrust