import { Icon } from '@iconify/react';
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './header.module.scss'


const HeaderLang = ({ deglang, setDeglang }) => {


    const allFlags = [
        { 'title': 'India', 'icon': 'in', 'other': [] },
        { 'title': 'New Zeland', 'icon': 'nz', 'other': ['DE', 'FR'] },
        { 'title': 'Hungary', 'icon': 'hu', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Arab Emirates', 'icon': 'ae', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Rusia', 'icon': 'ru', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Canada', 'icon': 'ca', 'other': ['DE', 'FR'] },
        { 'title': 'Belgium', 'icon': 'be', 'other': ['EN', 'FR'] },
        { 'title': 'Argentina', 'icon': 'ar', 'other': [] },
        { 'title': 'Norway', 'icon': 'no', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Vietnam', 'icon': 'vn', 'other': [] },
        { 'title': 'India', 'icon': 'in', 'other': [] },
        { 'title': 'Rusia', 'icon': 'ru', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Arab Emirates', 'icon': 'ae', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Rusia', 'icon': 'ru', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Canada', 'icon': 'ca', 'other': ['DE', 'FR'] },
        { 'title': 'Belgium', 'icon': 'be', 'other': ['EN', 'FR'] },
        { 'title': 'Argentina', 'icon': 'ar', 'other': [] },
        { 'title': 'Norway', 'icon': 'no', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'India', 'icon': 'in', 'other': [] },
        { 'title': 'New Zeland', 'icon': 'nz', 'other': ['DE', 'FR'] },
        { 'title': 'Hungary', 'icon': 'hu', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Arab Emirates', 'icon': 'ae', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Rusia', 'icon': 'ru', 'other': ['EN', 'DE', 'FR'] },
        { 'title': 'Canada', 'icon': 'ca', 'other': ['DE', 'FR'] },
    ]

    return (
        <>

            <Dropdown className={`${styles.headerLangMenu}`}>
                <Dropdown.Toggle variant="light" className={styles.borderFlgcurrency}  aria-label={deglang.title}> 
                    <div className={styles.langFlag}><Icon icon={`flagpack:${deglang.icon}`} width="28" height="19" /> </div>
                    <span className={`${styles.typenameAts} d-lg-none`}>{deglang.title}</span>
                    <Icon icon={`formkit:down`} className={`${styles.typenameAtsIcon} d-lg-none`} width={14} height={14} />
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dropdownMenu}>
                    <Row className={styles.FlexGrowRow}>
                        {allFlags && allFlags.map((item, index) => {
                            return (
                                <Col xs={12} lg={4} key={index} className={styles.FlexGrowCol}>

                                    <Dropdown.Item as={`button`} onClick={() => { setDeglang({ 'index': index, 'title': item.title, 'icon': item.icon }) }}
                                       aria-label={item.title}
                                        className={`d-flex align-items-center ${styles.rippleWv} ${styles.dropItem} ${deglang.index == index ? ` ${styles.rippleWvActive}` : ''}`}>
                                        <span><Icon icon={`flagpack:${item.icon}`} width="28" height="19" /></span>
                                        <span className='d-block'>{item.title}</span>

                                        {item.other.length > 0 && <span className={`flex-grow-1 ${styles.FlexGrow}`}>
                                            {item.other.map((langs, index) => {
                                                return (
                                                    <button key={index} className={`btn ${styles.FlexGrowBtn}`}>{langs}</button>
                                                )
                                            })}
                                        </span>}

                                    </Dropdown.Item>
                                </Col>
                            )
                        })}
                    </Row>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default HeaderLang