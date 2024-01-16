import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Icon } from "@iconify/react";
import Image from "next/image";

function FaqList({ content }) {
  return (
    <div className="faq-site">
      <Accordion defaultActiveKey={0}>
        {content.map((item, index) => {
          return (
            <>
              {item.title != null && (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header className="d-flex justify-content-between">
                    <div className="question-ic d-inline-flex justify-content-center align-items-center align-self-start">
                      <Icon icon="ph:question-light" color="#DC391B" />
                    </div>
                    <div className="flex-grow-1 pe-2">{item.title}</div>
                    <Image
                      src="/images/clstrv-arrow.png"
                      height={15}
                      width={15}
                      alt="arrow"
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.paragraph }}
                      className="tab-content"
                    ></div>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              )}
            </>
          );
        })}
      </Accordion>
    </div>
  );
}

export default FaqList;
