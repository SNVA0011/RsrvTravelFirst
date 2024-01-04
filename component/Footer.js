import React from "react" 
import { Col, Container, Row } from "react-bootstrap";
import { PageStaicJson } from "../static/StaticJson"; 


export default function Footer() {
  const Footer = PageStaicJson('footer');

  return (
    <>
      <footer className="bg-light py-2">
        <Container>
          <p className="m-0">Footer</p>
        </Container> 
      </footer> 
    </>
  );
}
