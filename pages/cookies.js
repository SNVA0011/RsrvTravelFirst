import React from "react";
import PageHead from "../component/common/PageHead";
import BreadHero from "../component/BreadHero";
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { Container } from "react-bootstrap";

const privacyPolicy = () => {
  return <>
    <PageHead
      title={`ReservationsDeal - Cookies`}
      description={``}
      keywords={``}
    />

    <BreadHero title="Cookies" imagePath="cookies-banner.jpg">
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
          <p>Cookies</p>
        </li>
      </ul>
    </BreadHero>


    <section className="termprivacy-content">

      <Container className="spcmy-60">
        <div className="content-ullist">
        <h2 className="text-center">Cookies</h2>

          <div>
            <div>
              <h3>What are cookies?</h3>
            </div>
            <div>
              <p>
                The small texts that you receive on your computer or mobile device upon
                visiting any website are what are referred to as cookies. These might be
                delivered to you by a third-party supplier or by us. Cookies shall enable
                your activities and preferences, for which you will not have to reenter
                the same when required. This information might be used for marketing or
                analytical purposes.
              </p>
            </div>
            <div>
              <h3>Why do we use cookies?</h3>
            </div>
            <div>
              <p>
                There are multiple reasons why we use cookies; these can be as follows:
              </p>
              <ul>
                <li>Help us improve what we provide when you visit our website</li>
                <li>Ensure secure transactions as required</li>
                <li>Enables memorizing preferences, language, currency, etc.</li>
                <li>Bring you forth relevant and necessary ads and their performance.</li>
                <li>Target required visitors.</li>
                <li>
                  Scan any fraudulent, malicious activities and help in data protection.
                </li>
                <li>Inspect our website performance.</li>
              </ul>
            </div>
            <div>
              <h3>What Information do we collect?</h3>
            </div>
            <div>
              <p>
                There are different types of information that we collect from the user/
                passengers, these include:
              </p>
              <ul>
                <li>Internet Service Provider</li>
                <li>IP Address</li>
                <li>Browsed pages</li>
                <li>Browing information</li>
                <li>Operating System</li>
                <li>Referred Links or URLs.</li>
                <li>Device ID</li>
                <li>Response to an advertisement</li>
                <li>
                  Activities engaged and features used in our website and in our
                  application.
                </li>
              </ul>
            </div>
            <div>
              <h3>What are the different types of cookies?</h3>
            </div>
            <div>
              <p>
                We use varied cookies for our website to make it engaging and informative
                for you. They are explained below:
              </p>
              <p>
                <strong>Performance Cookies- </strong>Performance cookies help us hoard
                information about how the website is performing and collect details of how
                you use a website. Our usage of performance cookies includes
              </p>
              <ul>
                <li>
                  Features of the website and checking different designs or layouts.
                </li>
                <li>Keep a note of how visitors reach our website.</li>
                <li>Consider the potentiality of our ads.</li>
                <li>Improve your experience as per your preference on the website.</li>
              </ul>
              <p>
                <strong>Targeting Cookies-</strong> Targeting cookies help in gathering
                users’ information and using the same to build a profile as per the
                interest and needs of the user. It even specializes in ads for you. These
                are generally small files that trail the action of a user and are used for
                the identification of users between different websites.
              </p>
              <p>
                {" "}
                <strong>Functional Cookies- </strong> These cookies help in enhancing the
                functionality and performance of our website. With this, we remember your
                choice and preference as your previous interaction during the last visit.
              </p>
            </div>
          </div>



        </div>
      </Container>

    </section>

  </>
};

export default privacyPolicy;
