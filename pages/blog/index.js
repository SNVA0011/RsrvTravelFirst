import { useEffect } from "react";
import Link from "next/link";
import BlogTile from "../../component/common/BlogTile";
import BlogHero from "../../component/common/BlogHero";
import PageHead from "../../component/common/PageHead";
import RecentBlog from "../../component/common/RecentBlog";
import { Container, Row, Col } from "react-bootstrap";
import {
  cms_trav_api,
  cms_trav_authcode,
  paginateSize,
  siteid,
  socialUrls,
} from "../../utils/static";
import PaginateBlog from "../../component/common/PaginateBlog";
 

export default function Blog({ blogdata, allblog }) {
  const blogitems = blogdata.data;
  const totalpage = blogdata.totalPages;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHead title="List of Blog" description="" keywords="" />

      <BlogHero
        bloglisting={true}
        listing={[
          {
            title:
              "Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam.",
            discription:
              "Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam. Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam. ",
            anchortext: "Read More",
            url: "/",
          },
          {
            title:
              "Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam.",
            discription:
              "Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam. Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam. ",
            anchortext: "Read More",
            url: "/",
          },
          {
            title:
              "Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam.",
            discription:
              "Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam. Lorem ipsum dolor sit amet consectetur. Massa massa vitae fames diam. ",
            anchortext: "Read More",
            url: "/",
          },
        ]}
        bgImg={{
          status: false,
          url: "",
        }}
      />
      <div className="clearfix"></div>

      <section className="blog-listing spcmy-60">
        <Container className="spcmt-60">
          <Row className="mb-3 flex-row-reverse">
            <Col xs={12} lg={8} xl={9}>
              <div className="section-heading">
                <p>Stories</p>
                <h3>All New Articles</h3>
              </div>

              <div className="rowpagi-allblogs">
                <BlogTile
                  allbloglist={blogitems}
                  path={`blog`}
                  noitem={{
                    title: "Item Not Found",
                    subtitle:
                      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
                    link: "/",
                    linktext: "Go Back",
                  }}
                />

                {totalpage > 1 && blogitems?.length > 0 && (
                  <PaginateBlog
                    current={true}
                    page={`/blog`}
                    type={`/blog/page`}
                    total={totalpage}
                  />
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
      </section>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // All blogs (1st Page)
    const res = await fetch(
      `${cms_trav_api}/travoles-content/pagination?authcode=${cms_trav_authcode}&page=1&pageSize=${paginateSize}`,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          siteId: siteid,
        }),
        redirect: "follow",
      }
    );
    const json = await res.json();

    // All blogs
    const resall = await fetch(
      `${cms_trav_api}/travoles-content/showblogdata?authcode=${cms_trav_authcode}`,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
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
        }),
        redirect: "follow",
      }
    );
    const allblg = await resall.json();

    return {
      props: {
        blogdata: json,
        allblog: allblg.response,
      },
      revalidate: 60, // In seconds
    };
  } catch (error) {
    return { notFound: true };
  }
};
