import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './footer.module.scss'
import Link from 'next/link'
import { FooterLinks, WhiteBrandLogo } from '../../utils/static'
import ButtonStyle from '../ButtonStyle/ButtonStyle';
import Image from 'next/image'

const FooterSection = ({ title }) => {

  return (
    <footer className={styles.FooterBlock}>
      <Container className={styles.ContBody}>
        <Row>
          <Col xs={12} xl={4} className={styles.FooterLogoCol}>

            <div className={styles.FooterLogoLeft}> 
              <Link href={WhiteBrandLogo.url}>
                <a className={'mainLogoArea'}>
                  <Image
                    src={WhiteBrandLogo.imgPath}
                    alt={WhiteBrandLogo.imgAlt}
                    width={146}
                    height={30}
                  />
                </a>
              </Link>

              <p className={styles.FooterLogoCont}>Lorem ipsum dolor sit amet consectetur. Imperdiet morbi arcu condimentum aliquam. Lorem ipsum dolor sit amet consectetur.</p>

              <Link href={'https://play.google.com/store/search?q='}>
                <a target='_blank' className={styles.AppPlayFooter}><Image src={`/images/GooglePlay-ft.webp`} width={126} height={37} alt={'Google Play Store'} /></a>
              </Link>

              <Link href={'https://apps.apple.com/in/app/'}>
                <a target='_blank' className={styles.AppAppleFooter}><Image src={`/images/Appstore-ft.webp`} width={126} height={37} alt={'Apple App Store'} /></a>
              </Link>

              <ul className={styles.FooterSocial}>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/facebook-footer.webp'} alt="copyright" width={24} height={24} /></a></Link></li>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/instagram-footer.webp'} alt="copyright" width={24} height={24} /></a></Link></li>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/twitter-footer.webp'} alt="copyright" width={24} height={24} /></a></Link></li>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/linkedin-footer.webp'} alt="copyright" width={24} height={24} /></a></Link></li>
              </ul>
            </div>

          </Col>

          {FooterLinks?.length > 0 && <>
            {FooterLinks.map((item, index) => {
              return (
                <Col xs={6} md={4} xl key={index}>
                  <div className={styles.QuickLinks}>
                    <h5>{item.heading}</h5>
                    <ul>
                      {item.Urls.map((navitem, index) => {
                        return (
                          <li key={index}>
                            <Link href={navitem.url}>
                              <a className='d-flex align-items-center'>
                                <span className={styles.QuickLinksArw}><Image src={'/images/angle-double.webp'} alt="angle" width={32} height={26} /></span>
                                <span className='flex-grow-1'>{navitem.title}</span>
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Col>
              )
            })}
          </>}

          <Col xs={12} md={4} xl>
          <hr className={`d-md-none ${styles.ContactLinksHr}`}></hr>
            <div className={`${styles.QuickLinks}`}>
              <h5>Contact with us</h5>

              <div className={`${styles.animateLabel}`}>
                <span className={styles.EmailIcon}><Image src={'/images/subs-mail.png'} alt="mail-icon" width={16} height={16} /> </span>
                <input type="text" id="username" className={`form-control ${styles.FormControl}`} required />
                <label htmlFor="username"> Email or phone </label>
              </div>

              <ButtonStyle
                content={'Submit'}
                outline={true}
                fullwidth={true}
                onClick={() => { console.log("Click Event") }}
                className={styles.SubsCrbBtn}
              />

              <div className="text-center">
                <div className={styles.QuickMaster}>
                  <Image src={'/images/cards-visa-mastercard.webp'} alt="cards-visa-mastercard" width={250} height={22} />
                </div>

                <Image src={'/images/rating-google.webp'} alt="rating-google" width={228} height={46} />
              </div>

            </div>
          </Col>
        </Row>
      </Container>


      <Container className={styles.ContFooter}>
        <hr></hr>
        <Row className={styles.CRowFooter}>
          <Col xs={12} sm={6}>
            <span className={styles.ContFtCopyrt}>
              <Image src={'/images/icoutline-copyright.webp'} alt="copyright" width={20} height={20} />
            </span>
            {new Date().getFullYear()}. All Rights Reserved.
          </Col>
          <Col xs={12} sm={6} className='text-sm-end'>
            (DBA of SNVA Traveltech Pvt. Ltd.)
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterSection