import React, { useState } from 'react'
import styles from './dwnloadapp.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import ButtonStyle from '../ButtonStyle/ButtonStyle';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const DownloadApp = ({ Title, SubTitle, AppTitle, PlayStoreUrl, AppleStoreUrl }) => {

  const [phone, setPhone] = useState('');
  const setval = (e) => {
    console.log(e.country)
  }


  return (
    <section className={styles.DownloadApp}>

      <Container className={styles.DownloadAppCont}>
        <Row className={styles.DownloadAppRow}>
          <Col xs={12} lg={9} xl={7} className={styles.ColAppOne}>
            <div className={`d-flex flex-column flex-md-row ${styles.AppFlex}`}>
              <div className={styles.AppFlexImg}>
                <Image src={`/images/travomint-app.webp`} width={168} height={138} alt={Title} />
              </div>
              <div className={`flex-grow-1 ${styles.AppFlexGrow}`}>
                <h5 className={styles.AppHeading}>{Title}</h5>
                <p className={styles.AppSubHeading}>{SubTitle}</p>


                <div className={`phonetypeStyle ${styles.phonetypeAutocom}`}>
                  <div className={`input-group flex-nowrap align-items-center flex-column flex-md-row`}>
                    <PhoneInput
                      country={'in'}
                      specialLabel={''}
                      value={phone}
                      name="name"
                      placeholder="9XX XXX XXXX"
                      onChange={(e) => { setval(e) }}
                      className={styles.PhoneAutocomBx}
                    />
                    <div className={styles.PhoneAutoBtnStyle}>
                      <ButtonStyle
                        content={'Get App Link'}
                        outline={false}
                        fullwidth={false}
                        onClick={()=>{console.log("Click Event")}}
                        className={styles.GetAppBtn}
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </Col>


          <Col xs={12} lg={3} xl={5} className={styles.ColAppThree}>
            <div className={styles.ColAppTbox}>
              <div className={styles.ColAppPlane}>
                <Image src={`/images/plane-right-app.webp`} width={256} height={120} alt={'Airplane Dotted'} />
              </div>

              <p className={styles.AppTitle}>{AppTitle}</p> 
              <Link href={AppleStoreUrl}>
                <a target='_blank' className={styles.AppleStoreUrl}><Image src={`/images/download-appstore.webp`} width={175} height={52} alt={'Apple App Store'} /></a>
              </Link>
              <Link href={PlayStoreUrl}>
                <a target='_blank' className={styles.PlayStoreUrl}><Image src={`/images/download-googleplay.webp`} width={175} height={52} alt={'Google Play Store'} /></a>
              </Link>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default DownloadApp