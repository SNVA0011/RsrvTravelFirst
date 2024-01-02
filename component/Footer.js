import React from "react" 
import { Col, Container, Row } from "react-bootstrap";
import { PageStaicJson } from "../static/StaticJson"; 


export default function Footer() {
  const Footer = PageStaicJson('footer');

  return (
    <>
      <footer className="bg-light py-4">
        <Container>
          <p>Footer</p>
        </Container> 
      </footer> 
    </>
  );
}
