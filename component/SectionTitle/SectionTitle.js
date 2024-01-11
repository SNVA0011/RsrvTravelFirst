import React from 'react'
import styles from './titleui.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const SectionTitle = ({ title, ViewALLBtn }) => { 
  return (
    <h4 className={`${styles.SectionTitle} ${ViewALLBtn ? styles.ViewALLBtnHeading : ''}`}>
      {title}
      {ViewALLBtn && <Link href={ViewALLBtn}>
        <a className={styles.ViewALLBtn}> View All
          <span><Image width="14" height="14" src={`/images/blog-arrow-right.png`} alt='arrow' /></span>
        </a>
      </Link>}
    </h4>
  )
}

export default SectionTitle