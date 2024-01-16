import React from "react";
import PageHead from "../component/common/PageHead";
import BreadHero from "../component/BreadHero";
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { Container } from "react-bootstrap";

const privacyPolicy = () => {
  return <>
    <PageHead
      title={`ReservationsDeal - Privacy Policy`}
      description={``}
      keywords={``}
    />

    <BreadHero title="Privacy Policy" imagePath="privacy-banner.jpg">
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
          <p>Privacy Policy</p>
        </li>
      </ul>
    </BreadHero>


    <section className="termprivacy-content">

      <Container className="spcmy-60">
        <div className="content-ullist">
          <h2 className="text-center">Privacy Policy Statement</h2>
          <p>At reservationsdeal we respect the privacy of our customers and we take every measure to secure the details of our users. In this privacy policy section, we inform you how we collect, use and disclose the information, and keep it secured and restricted for our usage; while using our platform. Go through the privacy policy before using our website. We recognize and acknowledge the importance of your personal data and are committed to respecting your privacy and protecting your personal information.</p>

          <h3>1. What information do we collect and why?</h3>
          <p>We need to collect, use and disclose personal information to perform our duties as a travel agent, namely, making and managing travel bookings on behalf of our customers. During the course of our relationship we may collect the following:</p>

          <ol className="alpha-list">
            <li><strong>Personal and contact details,</strong> such as title, full name, contact details (address, telephone and email address)</li>
            <li><strong>Passport number,</strong> date of birth and nationality - if required by the respective airline</li>
            <li><strong>Payment information:</strong> card number, security number, expiration date and cardholder name</li>
            <li><strong>Frequent flyer numbers,</strong> car rental program and hotel room preferences (if applicable)</li>
            <li><strong>Dietary requirements and health issues</strong> (if any) relevant to your travel arrangements or required by the relevant travel service provider(s) (e.g. accommodation or tour providers).</li>
            <li><strong>Information provided</strong> by filling forms on our website e.g. email address, where you heard about us and your travel preferences. This information will be used to keep you up to date with all our latest offers and products</li>
            <li><strong>Call recordings</strong> - calls may be recorded for the purposes of quality control and staff training</li>
            <li><strong>Social media</strong> - by interacting with the social media features on our website (Facebook, Twitter or Instagram) you will be bound by the privacy policies of the respective social media companies</li>
            <li><strong>IP address and cookies</strong> - When you access our website our servers may record data regarding your device and the network you are using to connect with us, including your IP address</li>
          </ol>

          <h3>2. How will we collect this information?</h3>
          <p>We usually collect your personal data from the information you submit during your relationship with us. The above data may be collected from the following sources:</p>
          <ol className="alpha-list">
            <li>Information generated about you when you purchase or make enquiries, regarding a travel arrangement; via the phone, email or website</li>
            <li>When you subscribe to receive marketing from us (e.g. e-newsletters)</li>
            <li>When you speak to our customer services team</li>
            <li>When you enter competitions or register for promotions</li>
          </ol>
          <p>In some circumstances, it may be necessary for us to collect personal information about you from a third party. This includes where a person makes a travel booking on your behalf which includes travel arrangements to be used by you (e.g. a family or group booking or a travel booking made for you by your employer). Where this occurs, we will rely on the authority of the person making the travel booking to act on behalf of any other traveller on the booking.</p>
          <p>Where you make a travel booking on behalf of another person (e.g. a family or group booking or a travel booking made for an employee), you agree you have obtained the consent of the other person for us to collect, use and disclose the other person's personal information in accordance with this Notice.</p>

          <h3>3. What do we use your personal data for and what is the lawful basis for doing so?</h3>
          <p><strong>3.1 Contractual</strong></p>
          <ol className="alpha-list">
            <li>In order to perform our duties as a travel agent. The consequences of not providing this information is that we will be unable to complete your booking.</li>
            <li>Personal and contact details are used for the purposes of completing the travel bookings you make on our site. Similarly, payment information, passport numbers, date of birth, frequent flyer numbers and dietary requirements.</li>
          </ol>
          <p><strong>3.2 Legitimate interest</strong></p>
          <ol className="alpha-list">
            <li>For direct marketing communications and related profiling to help us to offer you relevant products and services, including deciding whether or not to offer you certain products and service.</li>
            <li>Your information may also be utilised for broader reasons, such as: to provide you with travel confirmation and updates on your itinerary, to manage your booking and to allow us to contact you for customer service.</li>
            <li>We may use your personal information to send you targeted marketing activities; about special offers, new products or competitions. These may include emails, text messages and data messages. If you do not wish to receive such information, you may ask us in writing not to receive it.</li>
          </ol>
          <p><strong>3.3 With your consent</strong></p>
          <ol className="alpha-list">
            <li>In specific situations, we can collect and process your data with your consent. For example, when you tick a box to receive email newsletters, your personal information may be used, with your explicit consent, to send you relevant promotional fares.</li>
          </ol>



          <h3>4. With whom do we share your personal data?</h3>
          <p>We may share your information with the following entities:</p>
          <ol className="alpha-list">
            <li>Primary suppliers: airlines, hotels, tour operators, transfer providers, cruise lines, car rental and activity providers who fulfil your travel reservation</li>
            <li>An individual making a third-party reservation, on your behalf</li>
            <li>Third parties who provide services on our behalf, including credit card processing, business analytics and fraud prevention</li>
            <li>As required or authorized by applicable law, and to comply with our legal obligations</li>
            <li>Moresand Limited T/A Reservations Deal is a global business and includes operations outside the EEA. Your personal information may be disclosed to our overseas related entities in order for us to complete your travel booking and/or to enable the performance of administrative, advisory and technical services, including the storage and processing of such information. We will ensure that any such international transfers are either necessary for the performance of a contract between you and the overseas recipient or are made subject to appropriate or suitable safeguards as required by your local data protection laws</li>
          </ol>



          <h3>5. For how long do we keep your personal data on file?</h3>
          <ol className="alpha-list">
            <li>Personal data is retained as long as is necessary, for the purpose that it was originally obtained</li>
            <li>To protect us against any contractual claims, generally for a period of 6 years</li>
            <li>Records are kept in line with legal and regulatory requirements / guidance</li>
          </ol>


          <h3>6. Your rights</h3>
          <p>Below is a list of the rights that you have regarding the personal information that we process. You have the right to</p>
          <ol className="alpha-list">
            <li>Confirm with us that we are processing your data</li>
            <li>Request access to the personal data we hold</li>
            <li>Have data amended if it is inaccurate or incomplete</li>
            <li>Request that we delete your personal data if there is no compelling reason for its continued processing</li>
            <li>Request that we remove your consent</li>
          </ol>
          <p>If you wish to exercise any of the above rights, please contact us on <Link  href="mailto:support@reservationsdeal.in" target="_blank"><a className="text-decoration-underline">support@reservationsdeal.in</a></Link> providing details of your request.</p>
          <p>If you are dissatisfied with our data processing activities, you have the right to complain to the concerned authorities.</p>


        </div>
      </Container>

    </section>

  </>
};

export default privacyPolicy;
