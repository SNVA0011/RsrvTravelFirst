import React from "react";
import PageHead from "../component/common/PageHead";
import NoitemError from "../component/common/NoitemError";

export default function Custom404() {
  return (
    <>
      <PageHead title={`404 Page Not Found`} description="" keywords="" />

      <NoitemError
        title={`404 Page Not Found`}
        subtitle={`The page you are looking for was not found.`}
        link={`/`}
        linktext={`Back to Home`}
      />
    </>
  );
}
