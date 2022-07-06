import React from "react";

const ContactsCard = (props) => {
    return (
    <div className="Contact">
      <img src={props.imgURL} alt="" />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default ContactsCard;
