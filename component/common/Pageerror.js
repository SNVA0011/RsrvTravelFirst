import React, { useEffect } from 'react'
import Link from "next/link" 
export default function NoitemError({ metatitle, title, link, linktext }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>  
            <div className="pageerror-wrap d-flex flex-row align-items-center full-w py-5 my-5">
                <div className="container py-5">
                    <div className="row justify-content-center engineexp-btn">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-5 mt-2 lead">{title}</div>
                            <Link href={link}><a className="btn btn-site ripple-wv"><span>{linktext}</span></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
