import React from "react";

const TicketStatus = () => {
  return (
    <div className="fbkconf-status">
      <h4 className="travel-dbk-subhead">E - Ticket Status</h4>
      <div className="e-ticket-desc">
        <p>
          Your e-Ticket will be emailed shortly, once your credit card
          verification has been completed.
        </p>
        <p>
          <strong>Note:</strong> We are handling your reservation and will send
          you the confirmation after the completion of the reservation procedure
          and a ticket has been issued. It would be ideal if you take a note
          that your purchase will be completed only when the ticket has been
          issued. Fares are not guaranteed until ticketed. In the rare event
          fare increase, you may opt to cancel your booking by contacting our
          customer support help desk.
        </p>
        <p>
          <strong>Please note:</strong> All fares are quoted in USD. Some
          Airlines may charge baggage fees.
        </p>
      </div>
    </div>
  );
};

export default TicketStatus;
