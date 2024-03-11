import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {

  const events = [
    { title: 'Event 1', start: new Date('2024-03-10'), end: new Date('2024-03-12') },
    // ... other events
  ];

  return (
    <div class="max-w-[80rem] px-4  sm:px-6 lg:px-8 lg:py-1 mx-auto ">

    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: "dayGridMonth,listMonth,dayGridWeek"
      }}

      events={events}
      contentHeight="500px" // Adjust the height value as needed


    />
    </div>
  )
}