import React from "react";
import { useState } from "react";
import ExisitingContact from "./ExisitingCust";
import NewContact from "./NewContact"

function ContactContainer() {
  const [selectedvalue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>ContactContainer</h2>
      <input
        type="radio"
        value="existingcust"
        name="contact"
        checked={selectedvalue == "existingcust"}
        onChange={handleChange}
      />{" "}
      Existing Contact &nbsp;
      <input
        type="radio"
        value="newcust"
        checked={selectedvalue == "newcust"}
        onChange={handleChange}
        name="contact"
      />{" "}
      New Contact
      {selectedvalue == "" ? null : selectedvalue == "existingcust" ? (
        <ExisitingContact />
      ) : (
        <NewContact />
      )}
    </div>
  );
}

export default ContactContainer;
