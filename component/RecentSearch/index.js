import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './recent.module.scss';
import Image from 'next/image';

const RecentSearch = ({ Title, Routes }) => {
    return (
        <section className={styles.TopRecentBlock}>
            <Container className={`position-relative ${styles.TopRecentContn}`}>
                <SectionTitle title={Title} />
                {Routes?.length > 0 && <Row className={styles.TopRecentRow}>
                    {Routes.map((item, index) => {
                        return (
                            <Col xs={12} md={4} key={index} className={styles.TopRecentCol}>
                                <div className={`d-flex align-items-center flex-column flex-lg-row flex-column-reverse ${styles.TopRecentCard}`}>
                                    <div className={`flex-grow-1 ${styles.TopRecentGrow}`}>  
                                        <div className={`d-flex flex-column flex-lg-row align-ites-center justifyc-ontent-center ${styles.TopRecentPlane}`}>
                                            {item.from}
                                            <div className={`flex-grow-1 text-center px-1 ${styles.TopRecentDashed}`}>
                                            <Image src="/images/plane-dashed-route.png" width={62} height={17} alt={`${item.from}-${item.to}`} />
                                            </div>
                                           <span className='text-lg-end'>{item.to}</span>
                                        </div>
 
                                        <div className={`d-flex flex-column flex-lg-row ${styles.TopRecentTrv}`}>
                                            {item.date}
                                            <div className='flex-grow-1 text-lg-end ps-lg-2 mt-1 mt-lg-0'>
                                                {item.traveller}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.TopRecentThumb}>
                                        <Image src={`/images/${item.thumbnail}`} width={80} height={80} className={styles.TopRecentImg}
                                            alt={`${item.from}-${item.to}`}
                                        />
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                </Row>}

                <ul className={`PopularRtsUl ${styles.PopularRtsUlOp}`}>
            <li className={'PopularRtsLi'}></li>
            <li className={`PopularRtsLi PopularRtsLiAct`}></li>
            <li className={'PopularRtsLi'}></li>
          </ul>
          
            </Container>
        </section>
    )
}

export default RecentSearch