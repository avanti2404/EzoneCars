import React, { useEffect, useState } from 'react';
import { Trash2, Eye } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { backendUrl } from "../App";

const ContactDetails = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  if (!token) {
    navigate("/");
  }

  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getContactDetails();
  }, []);

  const getContactDetails = () => {
    axios.get(`${backendUrl}/admin/getContactDetails`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setAllData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };

  const handleView = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedContact(null);
    setShowModal(false);
  };

  const dummyContact = {
    name: "Avanti Murlidhar Perla",
    email: "dfghbjnmk",
    subject: "cvbnm,./flex justify-centerflex justify-centerflex justify-center",
    message: "dcfgvbhnjm,dcfgvbhnjm,dcfgvbhnjm,dcfgvbhnjm,dcfgvbhnjm",
    _id: "1"
  };

  return (
    <div className='px-10 flex flex-col w-full'>
      <h1 className='text-3xl font-semibold text-primary-blue py-6'>Contact Details</h1>

      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        {/* Header */}
        <div className="grid grid-cols-5 font-semibold bg-gray-300/60 py-2 rounded-md mb-2 text-center gap-4">
          <div>Name</div>
          <div>Email Id</div>
          <div>Subject</div>
          <div>Message</div>
          <div>Actions</div>
        </div>

        {/* Row */}
        {allData.length > 0 ? (
          allData.map((contact) => (
            <div
              key={contact._id}
              className="grid grid-cols-5 items-center text-center border-b py-2 gap-4"
            >
              <div>{contact.name}</div>
              <div className="font-semibold">{contact.email}</div>
              <div className="truncate">{contact.subject}</div>
              <div className="truncate">{contact.message}</div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleView(contact)}
                  className="text-blue-500 hover:text-blue-700"
                  title="View"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {/* add delete logic here with contact._id */ }}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No contact details found.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px]">
            <h2 className="text-xl font-bold mb-4 text-primary-blue">Message Details</h2>
            <p><strong>Name:</strong> {selectedContact.name}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Subject:</strong> {selectedContact.subject}</p>
            <p><strong>Message:</strong> {selectedContact.message}</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-primary-blue text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
