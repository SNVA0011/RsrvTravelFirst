import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Pagination from 'react-bootstrap/Pagination';


const PaginateBlog = ({ type, page, total, current }) => {
    const location = useRouter();
    const lastpage = `${type}/${total}`;
    const currentpage = location.query.slug ? location.query.slug : 1;
    const prev = currentpage == 2 ? page : `${type}/${Number(currentpage) - 1}`;
    const next = `${type}/${Number(currentpage) + 1}`;

    const allPaginate = [];
    const getllPagi = Array(total).fill(0).map((item, index) => { return (allPaginate.push(index)) });

    const numleft = currentpage < 6 ? 0 : Number(currentpage) - 4;
    const numright = currentpage < 6 ? 5 : Number(currentpage) + 3;


    return (
        <>
            <div className='site-paginate-theme spcmt-60'>
                <ul className={`pagination${current || currentpage == 1 ? ' prevnone' : ''} ${location.asPath == lastpage ? 'nextnone' : ''}`}>

                <li className={`control page-item left-lg ${currentpage == 1 ? 'd-none' : ''}`}>
                            <Link href={page}>
                                <a className="page-link" role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                        <img src="/images/blog-dblarrow-left.png" />
                                    </span>
                                    <span className="visually-hidden">First</span>
                                </a>
                            </Link>
                        </li>
                        <li className={`control page-item left-md ${currentpage == 1 ? 'd-none' : ''}`}>
                            <Link href={prev}>
                                <a className="page-link" role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                        <img src="/images/blog-arrow-left.png" />
                                    </span>
                                </a>
                            </Link>
                        </li>


                        {getllPagi.map((item, index) => {
                        const name = item
                        const url = name == 1 ? page : `${type}/${name}`
                        const between = numleft > item || numright < item ? 'd-none' : ''
                        return (
                            <li className={`nv page-item ${location.asPath === url ? 'active' : ''} ${between}`} key={index}>
                                <Link href={url}>
                                    <a className="page-link">
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}

                    <li className={`control page-item right-md ${location.asPath == lastpage ? 'd-none' : ''}`}>
                            <Link href={next}>
                                <a className="page-link " role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                        <img src="/images/blog-arrow-right.png" />
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className={`control page-item right-lg ${location.asPath == lastpage ? 'd-none' : ''}`}>
                            <Link href={lastpage}>
                                <a className="page-link" role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                        <img src="/images/blog-dblarrow-right.png" />
                                    </span>
                                </a>
                            </Link>
                        </li>

                </ul>

            </div>
        </>
    )
}

export default PaginateBlog