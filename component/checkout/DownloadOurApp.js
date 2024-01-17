import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DownloadOurApp = () => {
    return (
        <div className='getour-app'>
            <div className='app-content'>
                <h4>Download our App Now!</h4>
                <p>Get flight booking super app, join 100 million+ happy travellers.</p>
            </div>
            <hr className='sepr-hrprice'></hr>
            <div className='app-url'>
                <Row className='align-items-center'>
                    <Col xs={6}>
                      <Link href={'#'}><a  target='_blank' className='ripple-wv d-inline-block'><img src='/images/getit-appstore.png' alt='getit-appstore' className='getit-appstore' /></a></Link>
                    </Col>
                    <Col xs={6}>
                      <Link href={'https://play.google.com/store/apps/details?id=com.snva.ReservationsDeal&pli=1'}><a  target='_blank' className='ripple-wv d-inline-block'><img src='/images/getit-google.png' alt='getit-google' className='getit-google' /></a></Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DownloadOurApp