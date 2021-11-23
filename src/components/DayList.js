import React from "react";
import "components/DayListItem.scss";
import DayListItem from "./DayListItem";
import classNames from "classnames";

export default function DayList(props) {

  let daysArray = [];
  return (
    <ul>
      {props.days.map((day)=> {
        return <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.value}
        setDay={()=> props.onChange(day.name)}  
      />
      })}
      
    </ul>
  );
}