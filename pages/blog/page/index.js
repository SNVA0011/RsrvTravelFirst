import React from "react";
import PageHead from "../../../component/common/PageHead";
import NoitemError from "../../../component/common/NoitemError";
import { Container } from "react-bootstrap";

const index = () => {
  return (
    <div className="wf-100">
      <PageHead title={`404 Page Not Found`} description="" keywords="" />

      <Container className="my-5">
        <NoitemError
          title={`404 Page Not Found`}
          subtitle={`The page you are looking for was not found.`}
          link={`/`}
          linktext={`Back to Home`}
        />
      </Container>
    </div>
  );
};

export default index;
