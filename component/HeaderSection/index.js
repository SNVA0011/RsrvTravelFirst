import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './header.module.scss'
import Link from 'next/link'
import { BrandLogo, FooterLinks, headerUrl } from '../../utils/static'
import useWindowSize from "../../hooks/useWindowSize";
import HeaderCurrency from "./HeaderCurrency";
import HeaderLang from "./HeaderLang";
import Navbar from "react-bootstrap/Navbar";
import ButtonStyle from '../ButtonStyle/ButtonStyle';
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

const HeaderSection = () => {
    const [sticky, setSticky] = useState("");
    const location = useRouter();


    // on render, set listener
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 150 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    // left sidebar
    const [show, setShow] = useState(false);
    const MenuClose = () => setShow(false);
    const MenuShow = () => setShow(true);

    // currency flag
    const [deglang, setDeglang] = useState({
        index: 0,
        title: "India",
        icon: "in",
    });

    const [allcurrency, setAllcurrency] = useState({
        index: 0,
        currency: "ph:currency-inr-bold",
    });

    const size = useWindowSize();

    return (
        <>
            {size.width >= 992 && (
                <div className={styles.navDark}>
                    <Container>
                        <Row>
                            {headerUrl.social &&
                                headerUrl.social.map((item, index) => {
                                    return (
                                        <Col
                                            xs={12}
                                            sm={6}
                                            className={index == 0 ? "text-start" : "text-end"}
                                            key={index}
                                        >
                                            <Link href={item.url} target="_blank">
                                                <a>
                                                    <Icon icon={item.icon} className={styles.IconMini} />
                                                    {item.title}
                                                </a>
                                            </Link>
                                        </Col>
                                    );
                                })}
                        </Row>
                    </Container>
                </div>
            )}

            <header className={`${styles.headerClassic}  ${sticky ? styles.headerClsFix : ''}`}>
                <Navbar expand="lg" className={`${styles.headerClsNavbar}`}>
                    <Container>
                        <div className="d-flex align-items-center">
                            <Link href={BrandLogo.url}>
                                <a className={`navbar-brand mainLogoArea me-0 py-0`}>
                                    <Image
                                        src={BrandLogo.imgPath}
                                        alt={BrandLogo.imgAlt}
                                        width={146}
                                        height={30}
                                    />
                                </a>
                            </Link>
                        </div>

                        <nav className='d-none d-lg-block mx-auto'>
                            <ul className={styles.mainMenu}>
                                {headerUrl.main &&
                                    headerUrl.main.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`${item.disable ? styles.DisableNav : ""}`}
                                            >
                                                <Link href={item.url}>
                                                    <a className={`${location.pathname === item.url ? `${styles.NavbarLinkAct} ` : ''}`} onClick={MenuClose}>
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </nav>


                        <ul className={styles.navCurrencyHead}>
                            <li className={styles.accountIconMr}>
                                <ButtonStyle
                                    content={<>
                                        <Icon icon={'ic:sharp-account-circle'} className={styles.accountIcon} />
                                        Sign In
                                    </>}
                                    outline={true}
                                    fullwidth={false}
                                    onClick={() => { console.log("Click Event") }}
                                    className={styles.SignInBtn}
                                />
                            </li>
                            {size.width >= 992 ? (
                                <li className="list-2">
                                    <HeaderLang deglang={deglang} setDeglang={setDeglang} />

                                    <HeaderCurrency
                                        allcurrency={allcurrency}
                                        setAllcurrency={setAllcurrency}
                                    />
                                </li>
                            )
                                :
                                (
                                    <li className="list-2">
                                        <button className={`btn sidenav-btn ${show ? "visible" : ""}`}
                                            onClick={MenuShow}>
                                            <span className="nvt-1" onClick={MenuShow}></span>
                                            <span className="nvt-2" onClick={MenuShow}></span>
                                            <span className="nvt-3" onClick={MenuShow}></span>
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </Container>
                </Navbar>
            </header>
            <div className={`${styles.Classicempty} ${sticky ? styles.BlockEmpt : ''}`}></div>



            <Offcanvas show={show} onHide={MenuClose} className="sidenav-offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className={`mainLogoArea`}>
                            <Image
                                src={BrandLogo.imgPath}
                                alt={BrandLogo.imgAlt}
                                width={146}
                                height={30}
                            />
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="slidenav-url-group">
                        {headerUrl.main &&
                            headerUrl.main.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${item.disable ? "disable" : ""}`}
                                    >
                                        <Link href={item.url}>
                                            <a className="ripple-wv" onClick={MenuClose}>
                                                <span>
                                                    <Icon icon={item.icon} />
                                                    {item.title}
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                    <hr></hr>

                    {size.width <= 991 && (
                        <div className="ft-supportsocial">
                            <ul className="slidenav-url-group">
                                {headerUrl.social &&
                                    headerUrl.social.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item.url} target="_blank">
                                                    <a
                                                        className="ripple-wv text-truncate"
                                                        onClick={MenuClose}
                                                    >
                                                        <span>
                                                            <Icon icon={item.icon} />
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    )}
                </Offcanvas.Body>

                {size.width <= 991 && (
                    <div className="offcanvas-footer">
                        <div className="lang-wrp">
                            <Row className="align-items-center">
                                <Col xs={5}>
                                    <HeaderLang deglang={deglang} setDeglang={setDeglang} />
                                </Col>
                                <Col xs={7} className="text-right">
                                    <HeaderCurrency
                                        allcurrency={allcurrency}
                                        setAllcurrency={setAllcurrency}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                )}
            </Offcanvas>
        </>
    )
}

export default HeaderSection