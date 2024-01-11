import React from 'react'
import styles from './proutes.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../SectionTitle/SectionTitle'
import Image from 'next/image'

const PopularRoutes = ({ Title, Routes,SecondTab }) => {
  return (
    <section className={`${styles.PopularRts} ${SecondTab ? styles.PopularRtsTop : ''}`}>
      <Container className={styles.PopularRtsCont}>
        <SectionTitle
          title={Title} 
        />
        {Routes?.length > 0 && <Row className={styles.PopularRtsRow}>
          {Routes.map((item, index) => {
            return (
              <Col xs={12} md={2} key={index} className={styles.PopularRtsCol}>
                <div className={`text-center ${styles.PopularRtsCard}`}>

                  <div className={styles.PopularRtsWrp}>
                    <div className={styles.PopularRtsImg}>
                      <Image src={`/images/${item.thumbnail}`} width={100} height={100} alt={`${item.from}-${item.to}`} />
                    </div>

                    <div className={styles.PFootRtsDate}>
                      {item.date}
                    </div>

                    <div className={`d-flex align-items-center justify-content-center ${styles.PFootRtsFrom}`}>
                      {item.from}
                      <span  className={styles.PFootSwap}>
                        <Image src={`/images/switch-route.png`} width={30} height={30} alt='swap-icon' />
                      </span>
                      {item.to}
                    </div>

                    <hr></hr>
                    <Row className={styles.PFootRtsRow}>
                      <Col xs={6} className={`text-start ${styles.PFootRtsClass} ${styles.PFootRtsCol}`}>{item.class}</Col>
                      <Col xs={6} className={`text-end ${styles.PFootRtsPrice} ${styles.PFootRtsCol}`}>{item.price}</Col>
                    </Row>
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
  )
}

export default PopularRoutes