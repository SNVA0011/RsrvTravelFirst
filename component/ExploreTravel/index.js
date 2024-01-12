import React from 'react'
import styles from './expl.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import EngineFields from '../EngineFields'


const ExploreTravel = ({ Title, SubTitle, ImgAlt }) => {
  return (
    <section className={styles.ExploreTravel}>
      <Container>
        <Row>
          <Col md={7} lg={6}>
            <div className={styles.TrvWrp}>
              <h1>
                Explore life
                <span className={styles.Trv}>Travel <b className={styles.TrvImg}> <Image src={'/images/life-trv-line.webp'} alt={'bottom line'} width={164} height={11} /></b></span>
                where you want
              </h1>

              <p>Lorem ipsum dolor sit amet consectetur. Eu malesuada aliquet leo varius purus risus amet sagittis at. Parturient cras blandit</p>
            </div>
          </Col>
          <Col md={5} lg={6} className='d-none d-md-block'> 
            <div className={styles.TrvWrpRight}> 
              <span className={styles.TrvWrpRightBck}></span> 
              <Image
                src={'/images/life-travel.webp'}
                alt={'Explore life Travel where you want'}
                width={586}
                height={450}
                priority={true}
              />
            </div>
          </Col>

          <Col xs={12}>
            <div className={styles.TrvEngWrp}>
              <EngineFields MobRadioCenter={true} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ExploreTravel