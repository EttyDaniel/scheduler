import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

const formatSpots = function (spots) {
  let spotsString = "";
  switch(spots) {
    case 5:
      spotsString = "5 spots remaining"
      break;
    case 4:
      spotsString = "4 spots remaining"
      break;
    case 3:
      spotsString = "3 spots remaining"
      break;
    case 2:
        spotsString = "2 spots remaining";
      break;
    case 1:
      spotsString = "1 spot remaining";
      break;
    case 0:       
      spotsString = "no spots remaining";
      break;  
    default:
      break; 
  }
  return spotsString;
}

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  return (
    <li 
      className={dayClass} 
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}