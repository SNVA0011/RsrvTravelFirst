import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './blogtop.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const LatestBlogs = ({ Title, BlogsItems }) => {
    return (
        <>
            <div className={styles.TopBlogWave}></div>
            <section className={styles.TopBlogBlock}>
                <Container className={styles.TopBlogCont}>
                    <SectionTitle title={Title} />
                    {BlogsItems?.length > 0 && <Row className={styles.TopBlogRow}>
                        {BlogsItems.map((item, index) => {
                            return (
                                <Col xs={12} md={3} key={index} className={styles.TopBlogCol}>
                                    <Link href={`/blogs/${item.url}`}>
                                        <a className={`${styles.TopBlogCard}`}>
                                            <div className={styles.TopBlogThumb}>
                                                <Image src={`/images/${item.thumbnail}`}
                                                    fill={true}
                                                    layout={'fill'}
                                                    objectFit={'cover'}
                                                    objectPosition={'top center'}
                                                    className={styles.TopBlogImg}
                                                    alt={`${item.title}`} />
                                            </div>
                                            <div className={styles.BlogDate}>
                                                <span className={styles.BlogDateImg}>
                                                    <Image src={`/images/date-iconblog.png`} width={20} height={20} />
                                                </span>
                                                {item.date}
                                            </div>
                                            <div className={styles.BlogTitle}>{item.title}</div>
                                        </a>
                                    </Link>
                                </Col>
                            )
                        })}

                    </Row>}
                </Container>
            </section>
        </>
    )
}

export default LatestBlogs