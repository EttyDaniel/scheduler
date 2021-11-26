

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
       appointmentsArr.push(state.appointments.data[appointmentId]);
     }
   }
  return appointmentsArr;
}