

export function getAppointmentsForDay(state, day) {
  let appointmentsArr = [];
  let appointmentsByDay = [];
  for(const stateDay of state.days) {
    if(stateDay.name === day){
      appointmentsByDay = stateDay.appointments;
    }
  }
   if(appointmentsByDay) {
     for(const appointmentId of appointmentsByDay) {
       appointmentsArr.push(state.appointments[appointmentId]);
     }
   }
   console.log("appointments", appointmentsArr);
   
  return appointmentsArr;
}

export function getInterview(state, interview) {

      if(interview) {
        let interviewerId = interview.interviewer;
        let interviewObj = {
          student: interview.student,
          interviewer : {
            id:interviewerId,
            name: state.interviewers[interviewerId]["name"],
            avatar:state.interviewers[interviewerId]["avatar"]
          }
        };
        return interviewObj;
      }
      return null;
}

export function getInterviewersForDay(state, day) {

  let interviewersArr = [];
  let interviewersByDay = [];
  for(const stateDay of state.days) {
    if(stateDay.name === day){
      interviewersByDay = stateDay.interviewers;
    }
  }
   if(interviewersByDay) {
     for(const interviewId of interviewersByDay) {
      interviewersArr.push(state.interviewers[interviewId]);
     }
   }
   console.log("interview", interviewersArr);
  return interviewersArr;
}