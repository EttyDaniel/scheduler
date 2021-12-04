import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const interview = props.interview;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id,interview)
    .then( () => {transition(SHOW)})
    .catch( () => {
      transition(ERROR_SAVE, true)
    });
  }

  //is called after confirming that we want to delete
  function destroy() {
    transition(DELETING,true);
    props.cancelInterview(props.id)
    .then( () => {transition(EMPTY)})
    .catch( () => {
      transition(ERROR_DELETE, true)
    });
  }

  function confirm() {
    transition(CONFIRM);
  }

  function edit() {
    transition(EDIT);
    
  }

  console.log("interview",props.interview);
  return (
    <article 
    className="appointment" id={props.id}>
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition("CREATE")} />}
      {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer || {}}
        onDelete={confirm}
        onEdit={edit}
      />)}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} onSave={save}/>}
      {mode === SAVING && <Status message="Saving"/>}
      {mode === DELETING && <Status message="Deleting"/>}
      {mode === CONFIRM && <Confirm message="Are you sure you want to delete?" onCancel={back} onConfirm={destroy}/>}
      {mode === EDIT && <Form 
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onCancel={back} onSave={save}/>}
      {mode === ERROR_DELETE && <Error message="Could not Delete the appointment" onClose={back}/>}
      {mode === ERROR_SAVE && <Error message="Could not add the appointment" onClose={back}/>}
    </article>);
}