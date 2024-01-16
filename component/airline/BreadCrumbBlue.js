import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Link from "next/link";

const BreadCrumbBlue = ({ data }) => {
  return (
    <>
      <section role="presentation" className="site-breadcrumb">
        <Container>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <Icon
                icon="ant-design:double-right-outlined"
                color="#7d93ab"
                className="mx-1"
              />
            }
          >
            <Link href={data?.home?.url}>
              <a className="orange-clr">
                <Icon icon="ion:home" color="#DC391B" className="icflg" />{" "}
                {data?.home?.title}
              </a>
            </Link>

            {data?.other?.length > 0 &&
              data?.other?.map((item, index) => {
                return (
                  <Link key={index} href={item.url}>
                    <a className="text-capitalize">{item.title}</a>
                  </Link>
                );
              })}

            {data?.current && (
              <Typography color="#6d7578">
                {data?.current?.title}
              </Typography>
            )}
          </Breadcrumbs>
        </Container>
      </section>
    </>
  );
};

export default BreadCrumbBlue;
