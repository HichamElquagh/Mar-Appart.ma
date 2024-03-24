import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // for event click handling

import { useGetReservationsQuery , useDeleteReservationMutation } from '../../store/api/reservationQuery';

export default function Calendar() {
  const { data: reservations, error, isLoading, isError , refetch } = useGetReservationsQuery();
  const [deleteReservation] = useDeleteReservationMutation();

  const [events, setEvents] = useState([]); // Use state for reactive event updates
  const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event
  console.log("reservations",reservations)

  useEffect(() => {
    if (reservations) {
      const formattedEvents = reservations.map((reservation) => ({
        title: reservation.user.username + ", Tel: " + reservation.user.phone,
        start: reservation.checkIn,
        end: reservation.checkOut,
        className: reservation.status === "Reserved" ? "bg-green-500" : "bg-red-500",
        // Add a custom property to store reservation details for modal
        reservationDetails: reservation,
        apartment: reservation.apartment

      }));
      setEvents(formattedEvents);
    }
  }, [reservations]); // Update events on reservation data change

  const handleEventClick = (clickInfo) => {
    console.log("hhhhhhh")
    console.log(clickInfo.event)
    setSelectedEvent(clickInfo.event); // Set selected event state
    handleShowModal(); // Show modal on event click
  };
  const handleDeleteReservation = () => {
    console.log(selectedEvent.extendedProps.reservationDetails._id)
    deleteReservation(selectedEvent.extendedProps.reservationDetails._id);
    handleCloseModal();
    refetch();



  }

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleCloseModal = () => setShowDetailsModal(false);
  const handleShowModal = () => setShowDetailsModal(true);

  return (
    <div className="max-w-[80rem] px-4 sm:px-6 lg:px-8 lg:py-1 mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // Include interaction plugin
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: "dayGridMonth,listMonth,dayGridWeek"
        }}
        events={events}
        contentHeight="500px" // Adjust the height value as needed
        eventClick={handleEventClick} // Call handleEventClick on event click
        className="h-full" // Optional class for calendar height
      />

      {/* Modal for displaying reservation details (adjust styling as needed) */}
      {showDetailsModal && ( // Render modal conditionally
  <div
    className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50"
  >
    <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
      <div className="flex mb-4 md:mr-6 md:mb-0">
        <img
          className="h-56 rounded-lg object-cover md:w-56"
          src={selectedEvent.extendedProps.reservationDetails.user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start gap-4 justify-self-center">
        <p className="text-xl font-medium text-gray-700">{selectedEvent.extendedProps.reservationDetails.user.username}</p>
        <div className="flex space-x-2">
          <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
            <p className="text-sm font-medium text-gray-500">Tel</p>
            <p className="text-3xl font-medium text-gray-600">{selectedEvent.extendedProps.reservationDetails.user.phone}</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
            <p className="text-sm font-medium text-gray-500">Call</p>
            <a
              href={`tel:${selectedEvent.extendedProps.reservationDetails.user.phone}`}
              className="text-3xl font-medium text-gray-600"
            >
              &#9990;
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
  <p className="text-xl font-medium text-gray-700">Apartment Details:</p>
  {/* <img
    className="h-56 rounded-lg object-cover"
    src={selectedEvent.extendedProps.apartment.images[0]}
    alt=""
  /> */}
  <p className="text-sm font-medium text-gray-900">Name: {selectedEvent.extendedProps.apartment.name}</p>
  <p className="text-sm font-medium text-gray-900">City: {selectedEvent.extendedProps.apartment.city}</p>
  <p className="text-sm font-medium text-gray-900">Price: {selectedEvent.extendedProps.apartment.price + " dh"} </p>
  <p className="text-sm font-medium text-gray-900">Location: {selectedEvent.extendedProps.apartment.address}</p>

</div>
        <div className="flex justify-between  mt-5">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleDeleteReservation}
          >
            Cancel Reservation
          </button>
          <button
            type="button"
            className="ms-3 inline-flex items-center px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
