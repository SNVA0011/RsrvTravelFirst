import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './flightdeal.module.scss';
import Image from 'next/image';
import ButtonStyle from '../ButtonStyle/ButtonStyle';

const FlightOfferDl = ({ Title, Routes }) => {

    return (
        <section className={styles.FlightOfdeal}>
            <Container className='position-relative'>
                <SectionTitle title={Title} />
                {Routes?.length > 0 && <Row className={styles.FlightOfdealRow}>
                    {Routes.map((item, index) => {
                        return (
                            <Col xs={12} md={4} key={index} className={styles.FlightOfdealCol}>
                                <div className={`d-flex ${styles.FlightOfdealCard}`}>
                                    <Image
                                        alt={item.destination}
                                        src={`/images/${item.thumbnail}`}
                                        fill={true}
                                        layout={'fill'}
                                        objectFit={'cover'}
                                        className={styles.FlgdtSrcImg}
                                    />
                                    <div className={`d-flex flex-column flex-xl-row ${styles.FlightOCardInr}`}>
                                        <div className={styles.emptySpace}></div>
                                        <div className={`flex-grow-1 ${styles.FlightCardGrow}`}>

                                            <div className={styles.FlightCGrowIn}>
                                                <div className={styles.Destination}>{item.destination}</div>
                                                <div className={styles.DateField}>{item.date}</div>
                                                <div className={styles.Class}>
                                                    {item.class}
                                                    <div className="d-sm-none my-2"></div>
                                                    {item.offerapply && <span className={styles.Offerapply}>Offer Apply*</span>}
                                                </div>
                                                <div className={styles.Price}>{item.price}</div>

                                                <div>
                                                    <ButtonStyle
                                                        content={'Book Now'}
                                                        outline={true}
                                                        fullwidth={false}
                                                        onClick={()=>{console.log("Click Event")}}
                                                        className={styles.FldealBtn}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </Col>
                        )
                    })}

                </Row>}

                <ul className={`d-lg-none PopularRtsUl`}>
            <li className={'PopularRtsLi'}></li>
            <li className={`PopularRtsLi PopularRtsLiAct`}></li>
            <li className={'PopularRtsLi'}></li>
          </ul>
            </Container>
        </section>
    )
}

export default FlightOfferDl