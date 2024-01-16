import React from "react";
import PageHead from "../component/common/PageHead";
import BreadHero from "../component/BreadHero";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AboutDescription from "../component/aboutus/AboutDescription";
import WhyChooseUs from "../component/aboutus/WhyChooseUs";
import AboutStats from "../component/aboutus/AboutStats";
import CustomerFeedback from "../component/aboutus/CustomerFeedback";
import WhyChooseServices from "../component/aboutus/WhyChooseServices";

const privacyPolicy = () => {
  return (
    <>
      <PageHead
        title={`ReservationsDeal - Aboutus`}
        description={`Book here Cheap Flight tickets online,Low cost airfares and Get best discounted flight tickets at reservationsdeal.in`}
        keywords={`cheap flights,cheap flight tickets,Low cost flight tickets,Low Cost Airfare,Cheap Airfares,Discount flight tickets`}
      />

      <BreadHero title="About Us" imagePath="about-us-banner.png">
        <ul className="bradcum container">
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li className="mr-2">
            <span>
              <Icon icon="mingcute:right-line" color="#DC391B" />
            </span>
          </li>
          <li>
            <p>About Us</p>
          </li>
        </ul>
      </BreadHero>

      <AboutDescription />

      <WhyChooseUs
        content={[
          {
            title: "Leading private aviation",
            description:
              "Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate",
          },
          {
            title: "Leading safety & privacy",
            description:
              "Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate",
          },
          {
            title: "Client rating & reviews",
            description:
              "Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate",
          },
          {
            title: "Exceptional Service",
            description:
              "Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate",
          },
          {
            title: "Faster & smarter response",
            description:
              "Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate",
          },
          {
            title: "Lorem Ipsum",
            description:
              "Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate",
          },
        ]}
      />

      <AboutStats
        content={[
          { number: 95, title: "Lorem Ipsum" },
          { number: 69, title: "Lorem Ipsum" },
          { number: 170, title: "Lorem Ipsum" },
          { number: 220, title: "Lorem Ipsum" },
        ]}
      />

      <CustomerFeedback />

      <WhyChooseServices />
    </>
  );
};

export default privacyPolicy;
