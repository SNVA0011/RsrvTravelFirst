import React from 'react'
import styles from './expl.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import EngineFields from '../EngineFields'


const ExploreTravel = ({ Title, SubTitle, ImgAlt }) => {
  return (
    <section className={styles.ExploreTravel}>
      <Container>
        <Row className='align-items-center'>
          <Col md={5} lg={6} xl={7} xxl={6} className='pt-md-4 pt-lg-0 pe-lg-3 pt-xl-0 pe-xl-5'>
            <div className={styles.TrvWrp}>
              <h1>
                Explore life
                <span className={styles.Trv}>Travel <b className={styles.TrvImg}> <Image src={'/images/life-trv-line.webp'} alt={'bottom line'} width={164} height={11} /></b></span>
                where you want

                <div className={styles.TrvWrpPlane}>
                  <Image src={`/images/plane-right-app.webp`} width={256} height={120} alt={'Airplane Dotted'} />
                </div>
              </h1>

              <p>Lorem ipsum dolor sit amet consectetur. Eu malesuada aliquet leo varius purus risus amet sagittis at. Parturient cras blandit</p>
            </div>

            <div className={styles.TrvEngWrp}>
              <EngineFields MobRadioCenter={true} />
            </div>
          </Col>
          <Col md={6} lg={6} xl={5} xxl={6} className='ms-auto align-self-end text-center'>

            <div className={`d-none d-md-block ${styles.TrvWrpRight}`}>
              <Image
                src={'/images/life-travel.webp'}
                alt={'Explore life Travel where you want'}
                width={1069}
                height={1173}
                priority={true}
              /> 
            </div>
 

          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default ExploreTravel