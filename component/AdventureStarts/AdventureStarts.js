import React from 'react'
import styles from './adventure.module.scss'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'


const AdventureStarts = ({Title, SubTitle, BtnTitle}) => {
    return (
        <section className={`text-center ${styles.AdventureStart}`}>
            <Container className={styles.AdventureCont}>
                <Row className={`align-items-end mx-0 ${styles.AdvThRow}`}>
                    <Col md={3} className='px-0  text-start'>
                       <div className={styles.AdvTh}>
                        <Image src={"/images/adv-start-left.png"}
                            width={261.5}
                            height={160}
                            className={BtnTitle}
                            alt={Title}
                        />
                        </div>
                    </Col>
                    <Col className='align-self-center'>
                        <div className={styles.BtnStartAdv}>{Title}</div>
                        <div className={styles.BtnStartTrs}>{SubTitle}</div>
                        <div className={styles.BtnStart}>
                           {BtnTitle}
                        </div>
                    </Col>
                    <Col md={3} className='px-0 text-end'>
                        <div className={styles.AdvTh}>
                        <Image src={"/images/adv-start-right.png"}
                            width={224}
                            height={134}
                            alt={BtnTitle}
                        />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdventureStarts