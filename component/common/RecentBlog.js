import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';


const RecentBlog = ({ blog, path, searplaceholder, socialUrl }) => {
    const location = useRouter();

    const [blogName, setblogName] = useState("");

    const makeBold = (item, keyword) => {
        var re = new RegExp(keyword, 'g')
        return (
            item.replace(re, '<b>' + keyword + '</b>')
        )
    }

    
  const removeHtml = (string) => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replaceAll(regex, " ");
    return newString
  }

    useEffect(() => {
        setblogName("")
    }, [location.asPath]);

    return (
        <>

            {blog.data?.length > 0 ? (
                <>
                    <aside className="recent-searchall">
                        <div className="post__info form-underline">
                            <div className={`field-input typeblogsearch ${blogName?.length === 0 ? "null" : ""}`}>
                                <Dropdown>
                                    <Dropdown.Toggle as={'button'} className='btn'>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <img src='/images/searchby-blog.png' />
                                            </InputGroup.Text>
                                            <input type="text"
                                                placeholder={searplaceholder}
                                                className='form-control' value={blogName} onChange={(e) => { setblogName(e.target.value) }} />
                                        </InputGroup>
                                    </Dropdown.Toggle>

                                    {blogName?.length > 0 && <Dropdown.Menu show>
                                        {
                                            blog.data.filter(({ heading }) => heading.toLowerCase().includes(blogName.toLowerCase())).map((items, i) => (
                                                <Dropdown.Item href={`/${path}/${items.titleUrl}`} as={Link} key={i}>
                                                    <a className='dropdown-item' dangerouslySetInnerHTML={{ __html: makeBold(`${items.heading.toLowerCase()}`, blogName.toLowerCase()) }}></a>
                                                </Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>}

                                </Dropdown>
                            </div>
                        </div>
                    </aside>


                    <aside className="recent-blogslist tint-asidescl">
                       <div className='title-h5'>
                       <h5><span>{blog.title}</span></h5>
                       </div>
                        <div className="blog-body-list">
                            <ul>
                                {blog.data.slice(0, 6).filter((item) => item.status === "Active").map((item, i) => (
                                    <li key={i}>
                                        <div className="blog-list">
                                            <Link href={`/${path}/${item.titleUrl}`}>
                                                <a className={`d-flex ${location.asPath === `/${path}/` + item.titleUrl ? "active" : "not-active"}`}>
                                                    <div className="blog-lts-thumbnail">
                                                        <div className="flgofferover-hide">
                                                            <div className="flgoffer-cover-rt"
                                                             style={{ backgroundImage: `url(/images/${item.imgUrl === null || item.imgUrl  === '' ? 'inflight-aircraft-sm.png' : item.imgUrl})` }}></div>
                                                        </div>
                                                    </div>

                                                    <div className="content-body">
                                                        <p className="mini-description" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                                                        <div className="paragraph-des d-lg-none" dangerouslySetInnerHTML={{ __html: removeHtml(item.content).substring(0, 120) + "..." }}></div>

                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </>
            ) : (
                ""
            )}




            {socialUrl.links && <aside className="social-follow-blg tint-asidescl">
                <h4>{socialUrl.title}</h4>
                <ul>
                    {socialUrl.links.map((item, index) => {
                        return (
                            <li key={index}><Link href={item.url}><a target='_blank' className='d-flex justify-content-between align-items-center'>{item.title} <img src='/images/iconoir-arrow-tr.png' /></a></Link></li>
                        )
                    })}
                </ul>
            </aside>}

        </>
    )
}

export default RecentBlog