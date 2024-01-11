import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './explore.module.scss';
import Image from 'next/image';

const ExploreSearch = ({ Title, Routes }) => {
    return (
        <section className={styles.ExploreSrcBlock}>
            <Container className='position-relative'>
                <SectionTitle title={Title} />
                {Routes?.length > 0 && <Row className={styles.ExploreSrcRow}>
                    {Routes.map((item, index) => {
                        return (
                            <Col xs={12} md={4} lg={3} key={index} className={styles.ExploreSrcCol}>
                                <div className={`d-flex flex-column flex-md-row align-items-center ${styles.ExploreSrcCard}`}>
                                <div className={styles.ExploreSrcThumb}>
                                        <Image src={`/images/${item.thumbnail}`} width={80} height={80} className={styles.ExploreSrcImg} alt={item.destination}/>
                                    </div>

                                    <div className={`flex-grow-1 ${styles.ExploreSrcGrow}`}>  
                                    <div className={`${styles.ExploreSrcDes}`}>
                                           {item.destination}
                                        </div> 
                                        <div className={`${styles.ExploreSrcDate}`}>
                                             {item.date}
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

export default ExploreSearch