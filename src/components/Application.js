import React, { useState, useEffect } from "react";
import Appointment from "./Appointment";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData, {state, setDay, bookInterview, cancelInterview} from "hooks/useApplicationData";

export default function Application(props) {

  //using our custome hook
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const interviewersByDay = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  
  //returning all appointments per day 
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state,appointment.interview);
      return (
        <Appointment
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          interviewers={interviewersByDay}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
  });

  return (
    <main className="layout">
      <section className="sidebar">
      <img
      className="sidebar--centered"
      src="images/logo.png"
      alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {schedule}
        {<Appointment key="last" time="5pm" />}
      </section>
    </main>
  );
}
