import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './blogtop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import { Icon } from '@iconify/react';

const LatestBlogs = ({ Title, BlogsItems, ViewALLBtn, error }) => {

     return (
        <>
            <div className={styles.TopBlogWave}></div>
            <section className={styles.TopBlogBlock}>
                <Container className={styles.TopBlogCont}>
                    <SectionTitle
                        title={Title}
                        ViewALLBtn={ViewALLBtn}
                    />


                    {BlogsItems?.length > 0 ? <Row className={styles.TopBlogRow}>
                        {BlogsItems.map((item, index) => {
                            const BlankImg = `/images/blog-src-${index}.webp`
                            return (
                                <Col xs={12} md={3} key={index} className={styles.TopBlogCol}>
                                    <Link href={`${ViewALLBtn}/${item.titleUrl}`}>
                                        <a className={`${styles.TopBlogCard}`}>
                                            <div className={styles.TopBlogThumb}>
                                                <Image src={`${item.imgUrl === null || item.imgUrl === '' ? BlankImg : item.imgUrl}`}
                                                    fill={true}
                                                    layout={'fill'}
                                                    objectFit={'cover'}
                                                    objectPosition={'top center'}
                                                    className={styles.TopBlogImg}
                                                    alt={`${item.heading}`} />
                                            </div>
                                            <div className={styles.BlogDate}>
                                                <span className={styles.BlogDateImg}>
                                                    <Image src={`/images/date-iconblog.png`} width={20} height={20} alt='date-icon' />
                                                </span>
                                                <Moment date={item.posttime} format="MMM DD, YYYY" />
                                            </div>
                                            <div className={styles.BlogTitle}>{item.heading}</div>
                                        </a>
                                    </Link>
                                </Col>
                            )
                        })}

                    </Row>
                        :
                        <div className='pt-3 pb-2'>
                        <div className="text-danger fw-semibold error-font-15 mb-5 pn-5 text-center"><Icon icon="material-symbols:error-outline" /> {error}</div>
                        </div>
                    }

                </Container>
            </section>
        </>
    )
}

export default LatestBlogs