import React from 'react'
import styles from './titleui.module.scss'

const SectionTitle = ({title}) => {
  return (
    <h4 className={styles.SectionTitle}>{title}</h4>
  )
}

export default SectionTitle