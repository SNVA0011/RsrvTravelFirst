import React, { useEffect, useState } from "react";
import Link from "next/link";
import Moment from 'react-moment';
import NoitemError from '../../component/common/NoitemError';



export default function BlogTile({ allbloglist, showitem = allbloglist?.length, path, noitem }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeHtml = (string) => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replaceAll(regex, " ");
    return newString
  }

  return (
    <>
      <div className="blog-body-list">
        {allbloglist?.length > 0 ? (
          <ul>
            {allbloglist.slice(0, showitem).filter((item) => item.status === "Active").map((item, i) => (
              <li key={i}>
                <div className="blog-list">
                  <Link href={`/${path}/${item.titleUrl}`}>
                    <a className="d-flex">
                      <div className="blog-lts-thumbnail">
                        <div className="flgofferover-hide">
                          <div className="flgoffer-cover-rt" style={{ backgroundImage: `url(${item.imgUrl === null || item.imgUrl === '' ? '/images/inflight-aircraft.png' : item.imgUrl})` }}></div>
                        </div>
                      </div>

                      <div className="content-body pt-1">
                        <p className="date-with-icon">
                          <img src="/images/blogdate-icon.png" />
                          <span className="ms-2">
                            <Moment date={item.posttime} format="MMM DD, YYYY" />
                          </span>

                        </p>
                        <p className="mini-description">
                          {item.heading}
                        </p>
                        <div className="paragraph-des" dangerouslySetInnerHTML={{ __html: removeHtml(item.content).substring(0, 330) + "..." }}></div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="line"></div>
              </li>
            ))}

          </ul>
        ) : (
          <NoitemError
            title={noitem.title}
            subtitle={noitem.subtitle}
            link={noitem.link}
            linktext={noitem.linktext}
          />
        )}
      </div>
    </>
  );
}

