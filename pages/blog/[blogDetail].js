import React, { useEffect } from "react";
import BlogHero from "../../component/common/BlogHero";
import { useRouter } from "next/router";
import NoitemError from "../../component/common/NoitemError";
import Moment from "react-moment";
import PageHead from "../../component/common/PageHead";
import RecentBlog from "../../component/common/RecentBlog";
import { cms_trav_api, cms_trav_authcode, siteid, socialUrls } from "../../utils/static";
import { Container, Row, Col } from "react-bootstrap";
 
import Image from "next/image";

export default function BlogDetails({ singleblog, allblog }) {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // isFallback
  if (location.isFallback) {
    return (
      <>
        <div className="wf-100 text-center full-w my-5 py-5">
          <div className="my-5 py-5">
          <Image
              src="/images/animpageload.gif"
              className="animpageload"
              alt="loader"
              width={60}
              height={60}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-100s">
      {singleblog?.length > 0 ? (
        <>
          <PageHead
            title={singleblog[0].title}
            description={singleblog[0].description}
            keywords={singleblog[0].keywords}
          />

          <BlogHero
            bgImg={{
              status: true,
              url: singleblog[0].imgUrl,
            }}
          />

          <div className="blogdt-single spcmy-60">
            <Container>
              <Row className="mb-3 flex-row-reverse">
                <Col xs={12} lg={8} xl={9}>
                  <div className="blog-content-fl">
                    {singleblog[0].content === "" ? (
                      <p className="pb-2">No Content found</p>
                    ) : (
                      <>
                        <p className="date-with-icon">
                          <Image
                            src="/images/blogdate-icon.png"
                            alt="date icon"
                            height={16}
                            width={16}
                          />
                            <span className="ms-2">
                          <Moment
                            date={singleblog[0].posttime}
                            format="MMM DD, YYYY"
                          />
                                </span> 
                        </p>

                        <div
                          className="content-ullist"
                          dangerouslySetInnerHTML={{
                            __html: singleblog[0].content,
                          }}
                        ></div>
                      </>
                    )}
                  </div>
                </Col>

                <Col xs={12} lg={4} xl={3}>
                  <div className="stickyasd blogrecent-card">
                    <RecentBlog
                      searplaceholder="Search Article"
                      blog={{
                        title: "Latest",
                        data: allblog,
                      }}
                      path={`blog`}
                      socialUrl={socialUrls}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : (
        <>
          <PageHead title={`404 Page Not Found`} description="" keywords="" />

          <Container className="my-5">
            <NoitemError
              title={`404 Page Not Found`}
              subtitle={`The page you are looking for was not found.`}
              link={`/`}
              linktext={`Back to Home`}
            />
          </Container>
        </>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // single blogDetail
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: `${params.blogDetail}`,
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    `${cms_trav_api}/travoles-content/blogdatabyid?authcode=${cms_trav_authcode}`,
    requestOptions
  );
  const onejson = await res.json();

  // All blog
  var myHeadersal = new Headers();
  myHeadersal.append("Content-Type", "application/json");

  var rawall = JSON.stringify({
    id: "",
    title: "",
    titleUrl: "",
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeadersal,
    body: rawall,
    redirect: "follow",
  };
  const resall = await fetch(
    `${cms_trav_api}/travoles-content/showblogdata?authcode=${cms_trav_authcode}`,
    requestOptions
  );
  const multiplejson = await resall.json();

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response,
    },
    revalidate: 60, // In seconds
  };
}

// paths -> slugs which are allowed
export const getStaticPaths = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: "",
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    `${cms_trav_api}/travoles-content/showblogdata?authcode=${cms_trav_authcode}`,
    requestOptions
  );
  const json = await res.json();
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { blogDetail: post.titleUrl },
    });
  });

  return {
    paths,
    fallback: true,
  };
};
