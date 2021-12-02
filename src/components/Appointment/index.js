import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

export default function Appointment(props) {
  const interview = props.interview;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id,interview);
    transition(SHOW);
    
  }

  console.log("interview",props.interview);
  return (
    <article 
    className="appointment" id={props.id}>
      <Header time={props.time}/>
      {/* {interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty/>} */}
      {mode === EMPTY && <Empty onAdd={() => transition("CREATE")} />}
      {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />)}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={ () => { back() }} onSave={save}/>}
    </article>);
}