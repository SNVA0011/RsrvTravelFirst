import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './airlinedl.module.scss';
import Image from 'next/image';

const TopAirlineDeal = ({ Title, Routes, ViewALLBtn }) => {
    return (
        <>
            <div className={styles.TopAirlineWave}></div>
            <section className={styles.TopAirlineBlock}>
                <Container className={styles.TopAirlineCont}>
                    <SectionTitle
                        title={Title}
                        ViewALLBtn={ViewALLBtn}
                    />
                    {Routes?.length > 0 && <Row className={styles.TopAirlineRow}>
                        {Routes.map((item, index) => {
                            return (
                                <Col xs={12} md={2} key={index} className={styles.TopAirlineCol}>
                                    <div className={`${styles.TopAirlineCard}`}>

                                        <div className={styles.TopAirlineThumb}>
                                            <Image src={`/images/${item.thumbnail}`}
                                                fill={true}
                                                layout={'fill'}
                                                objectFit={'contain'}
                                                objectPosition={'left'}
                                                className={styles.TopAirlineImg}
                                                alt={`${item.from}-${item.to}`} />
                                        </div>

                                        <div className={`${styles.TopAirlineGrow}`}>
                                            <div className={`${styles.TopAirlineDept} ${styles.TopAirDeptFirst}`}>
                                                {item.from}
                                            </div>
                                            <div className={`${styles.TopAirlineDate}`}>
                                                {item.date}
                                            </div>
                                            <div className={`${styles.TopAirlineDept}`}>
                                                {item.to}
                                            </div>
                                        </div>

                                        <div className={`${styles.TopAirlinePrice}`}>
                                            {item.price}
                                        </div>

                                    </div>
                                </Col>
                            )
                        })}

                    </Row>}

                    <ul className={`d-xl-none PopularRtsUl`}>
                        <li className={'PopularRtsLi'}></li>
                        <li className={`PopularRtsLi PopularRtsLiAct`}></li>
                        <li className={'PopularRtsLi'}></li>
                    </ul>

                </Container>
            </section>
        </>
    )
}

export default TopAirlineDeal