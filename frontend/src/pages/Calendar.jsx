import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import axios from "axios";
import moment from "moment";
import AddEventModal from "../components/AddEventModal";
import { Box } from "@chakra-ui/react";
import CalendarHeader from "../components/CalendarHeader";
import TaskSecHeader from "./Taskheader/TaskSecHeader";


const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const calendarRef = useRef();

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    console.log(data);
    await axios.post("https://bitrix24-backend.herokuapp.com/event/create", data.event);
  }

  async function handleDateSet(data) {
    const response = await axios.get(
      "https://bitrix24-backend.herokuapp.com/event/?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString()
    );

    setEvents(response.data);
  }

  return (
    <Box w="70%" m="auto" >
      < CalendarHeader setModalOpen={setModalOpen}/>
      <Box w="100%" bg="#fff"  p="50px 50px" h="400px" overflowY={"scroll"} mt="50px">
        <Box position="relative" zIndex="0">
          <FullCalendar
            ref={calendarRef}
            events={events}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventAdd={(event) => handleEventAdd(event)}
            datesSet={(date) => handleDateSet(date)}
          />
        </Box>
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          onEventAdded={(event) => onEventAdded(event)}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
