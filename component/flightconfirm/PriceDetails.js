import React from "react";
import { mostused } from "../../utils/staticCurrency";
import { Icon } from "@iconify/react";

const PriceDetails = ({ filghtData }) => {
  const currencyLogo = mostused.find(
    (ite) => ite.value === filghtData.paymentInfo.currency
  ).icon;
  const noOfAdult = filghtData.paxDetails.filter(
    (ite) => ite.pax === "Adult"
  ).length;
  const noOfchild = filghtData.paxDetails.filter(
    (ite) => ite.pax === "Children"
  ).length;
  const noOfInfant = filghtData.paxDetails.filter(
    (ite) => ite.pax === "Infant"
  ).length;

  return (
    <section className="travel-price-details">
      <h3 className="travel-dbk-heading">Price Details</h3>

      <table className="table m-0">
        <thead>
          <tr className="travel-dbk-subhead">
            <th>{noOfAdult + noOfchild + noOfInfant} Traveler(s) : </th>
            <th>
              {filghtData.paymentInfo.currency === "AED" ? (
                <span>AED </span>
              ) : (
                <Icon icon={currencyLogo} className="lsc-currency" />
              )}
              {Math.round(
                filghtData.priceDetail.BookingFlightDetails[0].fare.grandTotal
              )}
            </th>
          </tr>
          <tr>
            <td colSpan={2} height={6} className="p-0"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adult X {noOfAdult}</td>
            <td align="right" className="ps-2">
              {filghtData.paymentInfo.currency === "AED" ? (
                <span>AED </span>
              ) : (
                <Icon icon={currencyLogo} className="lsc-currency" />
              )}
              {Math.round(
                filghtData.priceDetail.BookingFlightDetails[0].fare.adultFare
              ) * noOfAdult}
            </td>
          </tr>
          {noOfchild > 0 && (
            <tr>
              <td>Children X {noOfchild}</td>
              <td align="right" className="ps-2">
                {filghtData.paymentInfo.currency === "AED" ? (
                  <span>AED </span>
                ) : (
                  <Icon icon={currencyLogo} className="lsc-currency" />
                )}
                {Math.round(
                  filghtData.priceDetail.BookingFlightDetails[0].fare.childFare
                ) * noOfchild}
              </td>
            </tr>
          )}
          {noOfInfant > 0 && (
            <tr>
              <td>Infant X {noOfInfant}</td>
              <td align="right" className="ps-2">
                {filghtData.paymentInfo.currency === "AED" ? (
                  <span>AED </span>
                ) : (
                  <Icon icon={currencyLogo} className="lsc-currency" />
                )}
                {Math.round(
                  filghtData.priceDetail.BookingFlightDetails[0].fare.infantFare
                ) * noOfInfant}
              </td>
            </tr>
          )}

          <tr>
            <td>Tax & Fees per adult</td>
            <td>
              {filghtData.paymentInfo.currency === "AED" ? (
                <span>AED </span>
              ) : (
                <Icon icon={currencyLogo} className="lsc-currency" />
              )}
              {Math.round(
                filghtData.priceDetail.BookingFlightDetails[0].fare.totalTax
              )}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2} height={20} className="p-0"></td>
          </tr>
          <tr className="travel-dbk-subhead">
            <td className="first">Total</td>
            <td className="last">
              {filghtData.paymentInfo.currency === "AED" ? (
                <span>AED </span>
              ) : (
                <Icon icon={currencyLogo} className="lsc-currency" />
              )}{" "}
              {Math.round(
                filghtData.priceDetail.BookingFlightDetails[0].fare.grandTotal
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={2} height={13} className="p-0"></td>
          </tr>
          <tr>
            <td colSpan={2} className="note">
              Note: All fares displayed are quoted in{" "}
              {filghtData.paymentInfo.currency} and inclusive of base fare,
              taxes and all fees. Additional baggage fees may apply as per the
              airline policies.
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default PriceDetails;
