import moment from "moment";
import React from "react";

const TravelerInfo = ({ filghtData }) => {
  return (
    <section className="travel-dbk-details">
      <h3 className="travel-dbk-heading">Traveler’s Information</h3>
      <table className="table m-0">
        <thead>
          <tr>
            <th>Traveler</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filghtData.paxDetails.map((item, i) => (
            <tr key={i}>
              <td data-label="Traveler">
                {i + 1}. {item.pax}
              </td>
              <td data-label="First Name">{item.First_Name}</td>
              <td data-label="Last Name">{item.Last_Name}</td>
              <td data-label="DOB">
                {moment(item.DOB, "YYYY-MM-DD").format("DD MMM, YYYY")}
              </td>
              <td data-label="Gender">
                {item.Gender === "1" ? "Male" : "Female"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TravelerInfo;
