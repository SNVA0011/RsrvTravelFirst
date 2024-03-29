import React from 'react'
import styles from './partners.module.scss'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

const PartnerBrands = ({ BrandsImage }) => {
  return (
    <>
      {BrandsImage?.length > 0 && <section className={`text-center ${styles.BrandsSection}`}>
        <Container className='position-relative'>
          <div className={styles.BrandsCardRow}>

            {BrandsImage.map((item, index) => {
              return (
                <div className={styles.BrandsCard} key={index}>
                  <div className={`d-flex flex-column align-items-center justify-content-center ${styles.BrandsCardInner}`}>
                    <Image
                      fill={true}
                      layout={'fill'}
                      objectFit={'contain'}
                      objectPosition={'left'}
                      alt={item}
                      src={`/images/${item}`}
                      className={styles.FlgdtSrcImg}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <ul className={`d-lg-none PopularRtsUl`}>
            <li className={'PopularRtsLi'}></li>
            <li className={`PopularRtsLi PopularRtsLiAct`}></li>
            <li className={'PopularRtsLi'}></li>
          </ul>
        </Container>
      </section>}
    </>
  )
}

export default PartnerBrands