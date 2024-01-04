import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './recent.module.scss';
import Image from 'next/image';

const RecentSearch = ({ Title, Routes }) => {
    return (
        <section className={styles.TopRecentBlock}>
            <Container>
                <SectionTitle title={Title} />
                {Routes?.length > 0 && <Row className={styles.TopRecentRow}>
                    {Routes.map((item, index) => {
                        return (
                            <Col xs={12} md={4} key={index} className={styles.TopRecentCol}>
                                <div className={`d-flex align-items-center ${styles.TopRecentCard}`}>
                                    <div className={`flex-grow-1 ${styles.TopRecentGrow}`}>  
                                        <div className={`d-flex ${styles.TopRecentPlane}`}>
                                            {item.from}
                                            <div className={`flex-grow-1 text-center px-2 ${styles.TopRecentDashed}`}>
                                            <Image src="/images/plane-dashed-route.png" width={62} height={17} alt={`${item.from}-${item.to}`} />
                                            </div>
                                            {item.to}
                                        </div>
 
                                        <div className={`d-flex ${styles.TopRecentTrv}`}>
                                            {item.date}
                                            <div className='flex-grow-1 text-end ps-2'>
                                                {item.traveller}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.TopRecentThumb}>
                                        <Image src={`/images/${item.thumbnail}`} width={80} height={80} className={styles.TopRecentImg}/>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                </Row>}
            </Container>
        </section>
    )
}

export default RecentSearch