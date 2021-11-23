import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";

export default function Appointment(props) {
  const interview = props.interview;
  return (
    <article 
    className="appointment">
      <Header time={props.time}/>
      {interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty/>}
    </article>);
  
}