import React from "react";

const Readablelist = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Update List
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete List
        </button>
      </td>
    </tr>
  );
};

export default Readablelist;