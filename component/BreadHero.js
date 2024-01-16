import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container'

export default function BreadHero({title, children, imagePath}) {
    return (
        <section className="pagetitle-resever">
        <div className="d-flex align-items-center justify-content-center flex-column page-title page-title-small page-title-blog text-center" 
         style={{ backgroundImage: imagePath ? `url("../images/${imagePath}")` : '' }}>
            <div className="container">
                <div className="page-title-content">
                    <h1 className="page-title-slogan">{title}</h1>
                </div>
            </div>
            <div className={'breadcrumb_area full-w text-uppercase'}>
                <Container> 
                  {children}
                </Container>
            </div>
        </div>
    </section>
    )
}






