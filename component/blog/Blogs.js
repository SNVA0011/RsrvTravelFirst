import React from "react";
import SingleBlog from "./SingleBlog";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";
import { Icon } from '@iconify/react';

const Blogs = ({ title, subtitle, content, path, error }) => {
  return (
    <section className="latest-new-blogs spcmb-60">
      <Container>

        {content.length > 0 ? <Row>
          <div className="col-xs-12 section-ltblg">
            <div className="section-heading text-center">
              <p>{title}</p>
              <h3>{subtitle}</h3>
            </div>
          </div>
          <Col xs={12} md={6}>
            <div className="large-blog-home">
              <Link href={`/${path}/${content[0].titleUrl}`}>
                <a className="flgoffer-cover-rt lg">
                  <div style={{ backgroundImage: `url(${content[0].imgUrl === null || content[0].imgUrl === '' ? '/images/inflight-aircraft.png' : content[0].imgUrl})` }} className="bg-bck"></div>
                  <div className="info-overlay">
                    <p className="date-with-icon">
                      <img src="/images/blogdatewh-icon.png" />
                      <span className="ms-2"> 
                        <Moment date={content[0].posttime} format="MMM DD, YYYY" />
                      </span>

                    </p>
                    <h3>
                      {content[0].heading}
                    </h3>
                  </div>
                </a>
              </Link>
            </div>

          </Col>
          <Col xs={12} md={6} className="mt-4 mt-md-0">
            <SingleBlog path={path} content={content} />
          </Col>
        </Row>
          :
          <div className="text-center text-danger fw-semibold error-font-15"><Icon icon="material-symbols:error-outline" /> {error}</div>
        }

      </Container>
    </section>
  );
};

export default Blogs;
