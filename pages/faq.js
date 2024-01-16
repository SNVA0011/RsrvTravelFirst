import React from "react";
import PageHead from "../component/common/PageHead";
import BreadHero from "../component/BreadHero";
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { Container } from "react-bootstrap";
import FaqList from "../component/common/FaqList";

const privacyPolicy = () => {
  return <>
    <PageHead
      title={`ReservationsDeal - FAQ`}
      description={``}
      keywords={``}
    />

    <BreadHero title="FAQ’s" imagePath="faq-bg-banner.png">
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
          <p>FAQ’s</p>
        </li>
      </ul>
    </BreadHero>


    <section className="termprivacy-content">

      <Container className="spcmy-60">
        <div className="content-ullist">
          <h2 className="text-center">Frequently Asked Questions</h2>
        </div>

        <FaqList content={[
          {
            "title": "How to make a booking with ReservationsDeal?",
            "paragraph": `<div class="tab-content">
<p>Ans: Booking the flight for your desired destination is really short and simple. All you have to do is
visit www.reservationsdeal.in and use our filters to find the best flight possible on the date you have
chosen to travel. If you find any problem in searching your flight destination or have any further query
before booking a flight, you can call us at one of our executive for assistance on 1-878-847-0037</p>
</div>` },
          {
            "title": "How do I get to know if my booking is confirmed?",
            "paragraph": `<div class="tab-content">
<p>Ans: As your booking is confirmed, you will receive an e-mail from us containing all the details
either in your inbox or in the spam box within 4 hours. Still, if you do not find the confirmation mail,
please contact us.</p>
</div>` },
          {
            "title": "Will there be any charges of booking my flight tickets from phone?",
            "paragraph": `<div class="tab-content">
<p>Ans: No. ReservationsDeal do not charge anything to book over the phone.</p>
</div>` },
          {
            "title": "I have not received my tickets yet. What is the procedure to get the tickets as soon as possible?",
            "paragraph": `<div class="tab-content">
<p>Ans:The mode you opt for your ticket delivery is the subject of uncertainty. If you have selected
e-ticket then you can get your ticket from the airline desk at the airport where you will be required to
show the necessary documents along with confirmation mail in printout.</p>
</div>
` },
          {
            "title": "What is the procedure of getting an E-Ticket?",
            "paragraph": `<div class="tab-content">
<p>Ans:You can go for an E-ticket while booking your flight with ReservationsDeal and you will get one as
soon as possible. E-Ticket are more effective and secured in terms of misplace, torn apart or lost.</p>
</div>` },
          {
            "title": "Where can I find my terminal and airline details of flight?",
            "paragraph": `<div class="tab-content">
<p>Ans:All the necessary details are visible in the confirmation e-mail including terminal, air carrier,
seat number and time of departure. Still if you find any problem, please contact us with the reference
number of your booking.</p>
</div>` },
          {
            "title": "How can I transfer my ticket on someone else's name?",
            "paragraph": `<div class="tab-content">
<p>Ans: Change of name on a flight ticket is not possible, however you can cancel that particular ticket
and book another one on the respective person's name which will be issued with the changed names.</p>
</div>` },
          {
            "title": "What is the age criteria for Infant and Children?",
            "paragraph": `<div class="tab-content">
<p>Ans: Infants: 0-1 years till the entire period of travel.<br>
Children: 2-11 years till the entire period of travel.<br>
Please note that infants are not allocated with a seat and must travel on the lap of an adult.</p>
</div>` },
          {
            "title": "How can I reconfirm my flight status?",
            "paragraph": `<div class="tab-content">
<p>Ans: You can contact directly to the airline 72 hours prior of departure to reconfirm your flight
status.</p>
</div>` },

          {
            "title": "What are the documents required to receive tickets from ticket counter on the airport?",
            "paragraph": `<div class="tab-content">
<p>Ans: You will be required to present an official form of Identification i.e. Driving License, Passport
etc. along with the printout of your booking confirmation and the debit/credit card from which you have
booked your ticket.</p>
</div>` },
          {
            "title": "What are the payment methods you use for charging the ticket booking amount?",
            "paragraph": `<div class="tab-content">
<p>
Ans: We charge the amount of flight booking through:
<ul>
<li><b></b> Credit/Debit card payment</li>
<li><b></b> 3.5% Surcharge on all Credit card Payment.</li>
<li><b></b> No Extra Surcharge on Debit card Payment.</li>
</ul>
</p>
</div>` },
          {
            "title": "How will I get to know if I have been charged for meals or not?",
            "paragraph": `<div class="tab-content">
<p>Ans: If you have asked for meal during flight and have given your meal preferences at the time of
booking, all such details including the charges for the meal will be mentioned at the confirmation mail
you have received.</p>
</div>` },
        ]} />

      </Container>

    </section>

  </>
};

export default privacyPolicy;
