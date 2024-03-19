import Link from "next/link";
import React from "react";
import Moment from "react-moment";

const SingleBlog = ({ content, path }) => {

  const removeHtml = (string) => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replaceAll(regex, " ");
    return newString
  }

  return (
    <div className="blog-body-list">
      <ul>
        {content.slice(1, 4).map((item, i) => (
          <li>
            <div className="blog-list" key={i}>
              <Link href={`/${path}/${item.titleUrl}`}>
                <a className="d-flex">
                  <div className="blog-lts-thumbnail">
                    <div className="flgofferover-hide">
                      <div className="flgoffer-cover-rt" style={{ backgroundImage: `url(${item.imgUrl === null || item.imgUrl === '' ? '/images/inflight-aircraft.png' : item.imgUrl})` }}></div>
                    </div>
                  </div>

                  <div className="content-body py-0 align-self-center">
                    <p className="date-with-icon">
                      <img src="/images/blogdate-icon.png" /> 
                      <span className="ms-2">
                        <Moment date={item.posttime} format="MMM DD, YYYY" />
                      </span>

                    </p>
                    <p className="mini-description">
                      {item.heading}
                    </p>
                    <div className="paragraph-des d-md-none" dangerouslySetInnerHTML={{ __html: removeHtml(item.content).substring(0, 60) + "..." }}></div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="line"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleBlog;
