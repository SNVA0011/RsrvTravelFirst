import Link from 'next/link';
import React from 'react'
import { Row, Col } from "react-bootstrap";
import Countdown from 'react-countdown';

const ExclusOffer = ({ endsIn, title, subtitle, expiryTimestamp }) => {
  return (
    <>
    <Link href="/">
        <a className='timeoffer-ends flashsanimated'>
            <Row className='align-items-center'>
                <Col xs={12} sm={5}>
                    <div className='d-inline-flex align-items-center time-ticking-red'>
                        <div className='icon'>
                            <img src='/images/time-ticking-red.png' />
                        </div>
                        <div className='time'>
                            <span className='badge-lg'>
                                <span className='ends'>{endsIn}</span>  <span className='time-jk'><Countdown date={Date.now() + expiryTimestamp} /></span></span>
                        </div>

                    </div>

                </Col>
                <Col xs={12} sm={7}>
                    <h4>{title}</h4>
                    <span className='badge-sm'>{subtitle}</span>
                </Col>
            </Row>

        </a>
    </Link>
</>
  )
}

export default ExclusOffer